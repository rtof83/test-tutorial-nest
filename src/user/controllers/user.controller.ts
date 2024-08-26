import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '@prisma/client';
import { CreateUserDto } from '../dto/create.user.dto';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // @Post()
  // @ApiOperation({ summary: 'Create a new user' })
  // @ApiResponse({ status: 201, description: 'User created successfully.' })
  // async create(@Body() body: { name: string; email: string }): Promise<User> {
  //   return this.usersService.createUser(body);
  // }

  @Post()
  @ApiResponse({ status: 201, description: 'User created successfully.' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  // @Get()
  // @ApiOperation({ summary: 'Get all users' })
  // @ApiResponse({ status: 200, description: 'List of users.' })
  // async findAll(): Promise<User[]> {
  //   return this.userService.findAllUsers();
  // }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get user by ID' })
  // @ApiResponse({ status: 200, description: 'User details.' })
  // async findOne(@Param('id') id: number): Promise<User | null> {
  //   return this.userService.findUserById(id);
  // }
}
