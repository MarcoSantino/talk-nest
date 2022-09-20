import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebsocketGateway {
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('send_name')
  listenForMessages(@MessageBody() name: string) {
    this.server.sockets.emit('welcome', { msg: `Benvenuto ${name}` });
  }
}
