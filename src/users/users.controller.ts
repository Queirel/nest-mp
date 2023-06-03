import { Body, Controller, Post, HttpCode, HttpStatus, Get, Param, Patch, Delete} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto  } from './dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService:UsersService
    ){}

    @Get()
    findAll(){
        return this.usersService.findAll()
    }

    @Get(':term')
    getById( @Param('term') term: string ) {
        return this.usersService.findById(term)
    }

    @Post()
    // @HttpCode(HttpStatus.CREATED)
    createUser(
        @Body() createUserDto:CreateUserDto){
        return this.usersService.create(createUserDto)
    }

    @Patch(':term')
    updateUser( 
        @Param('term' ) term: string, 
        @Body() updateUserDto:UpdateUserDto ){
        return this.usersService.userUpdate(term,updateUserDto)
    }

    @Delete(':id')
    deleteUser( @Param('id', ParseMongoIdPipe ) id: string ){
        return this.usersService.userDelete(id)
    }
}
