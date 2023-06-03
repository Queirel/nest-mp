import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import axios, { AxiosInstance } from 'axios';
import { UserResponse } from './interfaces/user-response.interface';
// import { USERS_SEED } from './data/users.seed';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios

  // constructor(
  //   // private readonly userService:UsersService
  // ){}

// populateDB(){
//   return this.userService.fillUserDB(USERS_SEED)
// }
async excecuteSeed(){
  const {data} = await this.axios.get<UserResponse>('https://rickandmortyapi.com/api/character')
  data.results.forEach(({id, name}) => {
    console.log(name, id)
   })
   return data.results
  }
 

}