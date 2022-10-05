import { PostgresqlModule } from './postgresql/postgresql.module';
import { MongoModule } from './mongo/mongo.module';
import { JwtModule } from './jwt/jwt.module';
import { WebsocketModule } from './websocket/websocket.module';
import { GraphqlModule } from './graphql/graphql.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './postgresql/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PostgresqlModule,
    MongoModule,
    JwtModule,
    WebsocketModule,
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
