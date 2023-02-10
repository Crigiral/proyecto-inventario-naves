import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getNaves(): string {
    return 'Hello World!';
  }
}
