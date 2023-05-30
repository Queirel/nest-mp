import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { USERS_SEED } from './data/users.seed';

@Injectable()
export class SeedService {

  constructor(
    private readonly userService:UsersService
  ){}

populateDB(){
  return this.userService.fillUserDB(USERS_SEED)
}
}

