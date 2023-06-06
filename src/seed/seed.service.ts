import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { UserResponse } from './interfaces/user-response.interface';
import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {

  private readonly axios:AxiosInstance = axios

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}  

async excecuteSeed(){
  await this.userModel.deleteMany({})
  let array:{name:string, no:number}[] = []
  let i
  for(i=1; i<40; i++){
    const {data} = await this.axios.get<UserResponse>(`https://rickandmortyapi.com/api/character?page=${i}`)
    data.results.forEach(async({id, name}) => {
      var no = id
      array.push({name,no})
    })
  }

    await this.userModel.insertMany(array)

   return 'Seeds done' 
  }
 

}