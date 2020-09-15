import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Param,
    Put,
    Query,
    Response,
  
   
  } from '@nestjs/common';
  
import { UserService } from './user/user.service';
import { User } from './user.model';

  

  
  @Controller('users')
  export class UserController {
    constructor(private readonly userService: UserService) {}
  
    @Post()
   async  addUser(@Body() user: User) {
     return this.userService.addUser(user);
    
    }

    @Get()
    async getAllUsers() {
       return this.userService.allUsers()
        
    }
    @Delete(':id')
    async deletUser(@Param('id') id:string) {
       return this.userService.deleteUser(id);
    } 

    @Put()
    async updateUser(@Body() user:User, @Query() query) {
       
       return this.userService.updateUser(user,query.id);
        
    }
  
  
    
  }