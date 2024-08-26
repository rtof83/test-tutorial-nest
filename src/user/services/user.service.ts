import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create.user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  // async createUser(data: { name: string; email: string }): Promise<User> {
  //   return this.prisma.user.create({ data });
  // }

  async create(createUserDto: CreateUserDto) {
    // try {
    const { email, name, password } = createUserDto;

    const user = await this.userRepository.create({ email, name, password });

    return {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    // } catch (error) {
    //   throw error;
    // } 
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOneByEmail(email);
  }

  // async findAllUsers(): Promise<User[]> {
  //   return this.prisma.user.findMany();
  // }

  // async findUserById(id: number): Promise<User | null> {
  //   return this.prisma.user.findUnique({ where: { id } });
  // }
}
