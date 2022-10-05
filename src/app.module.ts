import { MongoModule } from './mongo/mongo.module';
import { JwtModule } from './jwt/jwt.module';
import { WebsocketModule } from './websocket/websocket.module';
import { GraphqlModule } from './graphql/graphql.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MongooseModule } from '@nestjs/mongoose';
import { join } from 'path';

@Module({
  imports: [
    MongoModule,
    JwtModule,
    WebsocketModule,
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
    MongooseModule.forRoot('mongodb://localhost/nest'),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
