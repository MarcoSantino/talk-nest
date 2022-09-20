import { JwtModule } from './jwt/jwt.module';
import { WebsocketModule } from './websocket/websocket.module';
import { GraphqlModule } from './graphql/graphql.module';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    JwtModule,
    WebsocketModule,
    GraphqlModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'client'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
