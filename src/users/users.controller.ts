import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto.js';
import { updateUserDto } from './dto/updateUser.dto.js';
import { UsersService } from './users.service.js';

@Controller('users') // Parent routes /users
export class UsersController {


    constructor(private readonly userService: UsersService){}

    // each of these method will be declared inside of service class

    // get all user
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ROLE') {
        return this.userService.findAll(role);
    }
    

    // dynamic routes
    @Get(":id")
    findOne(@Param('id', ParseIntPipe) id:number) {
        return this.userService.findOne(id);
    }

    // Posts
    @Post()
    create(@Body(ValidationPipe) payload: CreateUserDto){
        return this.userService.create(payload);
    }

    @Patch(":id")
    update(@Param('id', ParseIntPipe) id:number, @Body(ValidationPipe) payload: updateUserDto) {
        return this.userService.update(id, payload);
    }

    @Get(":id")
    deleteOne(@Param('id', ParseIntPipe) id:number) {
        return this.userService.delete(id);
    }

}
