import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    //Chamada do provider
    constructor(private userService: UsersService) {}


    @Get()
    async getAll(): Promise<User[]> {
        return this.userService.getManyUsers()
    }

    @Get(':id')
    async getSingleUser(@Param() params): Promise<User> {
        return this.userService.getSingleUser({id: Number(params.id)})
    }

    @Post()
    async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto)
    }

    @Put(':id') 
    //@Patch(':id')
    async updateUser(@Param() params, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.updateUser({where: {id: Number(params.id)}, data: updateUserDto})
    }

    @Delete(':id')
    async deleteUser(@Param() params): Promise<User> {
        return this.userService.deleteUser({id: Number(params.id)})
    }
}
