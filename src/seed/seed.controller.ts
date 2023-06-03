import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';
// import { USERS_SEED } from './data/users.seed';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  findAll() {
    return this.seedService.excecuteSeed()
    // return this.seedService.populateDB();
  }

}
