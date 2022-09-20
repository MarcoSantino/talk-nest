/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { WebsocketGateway } from './gateway/websocket.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [WebsocketGateway],
})
export class WebsocketModule {}
