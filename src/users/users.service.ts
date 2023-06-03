import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { Model, isValidObjectId } from 'mongoose';
import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.name = createUserDto.name.toLowerCase();
    try{
      const user = await this.userModel.create(createUserDto);
      return user;
    }
    catch(error){
      console.log(error.keyValue)
    this.handleError(error)
    } 
  }

  findAll() {
    return this.userModel.find();
  }

  async findById(term: string) {
    let user: User;

    if (isValidObjectId(term)) user = await this.userModel.findById(term);
    if (!isNaN(+term)) user = await this.userModel.findOne({ no: term });
    if (!user) user = await this.userModel.findOne({ name: term });
    if (!user) throw new NotFoundException('User not found');

    return user;
  }

  //   userCreate(createUserDto: CreateUserDto) {
  //     const user: User = {
  //       id: uuid(),
  //       ...createUserDto
  //     };
  //     this.users.push(user);
  //     return user;
  //   }

  async userUpdate(term: string, updateUserDto: UpdateUserDto) {
    const user = await this.findById(term);
    if (updateUserDto.name)
      updateUserDto.name = updateUserDto.name.toLowerCase();
try{
    await user.updateOne(updateUserDto);

    return { ...user.toJSON(), ...updateUserDto };
  
  }
catch(error){
  this.handleError(error)
}
}

    async userDelete(id: string) {
        const { deletedCount }= await this.userModel.deleteOne({id})
        if(deletedCount==0) throw new BadRequestException(`user ${id} not found`)
        return
      }

  
  private handleError(error: any){
    if(error.code == 11000) throw new BadRequestException(`already exists ${JSON.stringify(error.keyValue)}`);
  }
}
//   fillUserDB(users:User[]){
//     this.users = users
//   }
