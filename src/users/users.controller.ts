import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto  } from './dto';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService:UsersService
    ){}

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Get(':id')
    getById( @Param('id', ParseUUIDPipe) id: string ) {
        return this.usersService.findById(id)
    }

    @Post()
    createUser(
        @Body() createUserDto:CreateUserDto){
        return this.usersService.userCreate(createUserDto)
    }

    @Patch(':id')
    updateUser( 
        @Param('id', ParseUUIDPipe ) id: string, 
        @Body() updateUserDto:UpdateUserDto ){
        return this.usersService.userUpdate(id,updateUserDto)
    }

    @Delete(':id')
    deleteUser( @Param('id', ParseUUIDPipe ) id: string ){
        return this.usersService.userDelete(id)
    }
}
