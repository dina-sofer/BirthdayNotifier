import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';

@Controller('user')
export class UserController {
    constructor (private userService: UserService) {}

    @Get()
    getAll() {
        try {
            return this.userService.getAll();
        } catch (error) {
            console.log(error)
        }
    }

    @Post()
    insertUser(@Body() newUser: User) {
        console.log(newUser)
        try {
            const result = this.userService.insertUser(newUser);
            return result;
            // return newUser;
        } catch (error) {
            console.log(error);
        }
    }
}
