import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello nestjs-starter-kit ! This message is injected from app.service.ts !';
  }
}
