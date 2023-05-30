import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { v4 as uuid } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: uuid(),
      name: 'fede',
    },
    {
      id: uuid(),
      name: 'fede2',
    },
    {
      id: uuid(),
      name: 'fede3',
    },
  ];

  findAll() {
    return this.users;
  }

  findById(id: string) {
    const user = this.users.find((user) => user.id == id);
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

  userCreate(createUserDto: CreateUserDto) {
    const user: User = {
      id: uuid(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }

  userUpdate(id: string, updateUserDto: UpdateUserDto) {
    let userDB = this.findById(id);
    this.users = this.users.map((user) => {
      if (user.id == id) {
        userDB = { ...userDB, ...updateUserDto, id };
        return userDB;
      }
      return user;
    });
    return userDB;
  }

  userDelete(id: string) {
    this.findById(id);
    this.users = this.users.filter(user => user.id != id)
  }

  fillUserDB(users:User[]){
    this.users = users
  }
}
