import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly apiService: AppService) {}

  @Get()
  async version(): Promise<{ version: string }> {
    return this.apiService.version();
  }
}
