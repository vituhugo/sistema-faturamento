import {Injectable} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {
  }

  async version(): Promise<{ version: string }> {
    return { version: this.config.get('api.version') };
  }
}
