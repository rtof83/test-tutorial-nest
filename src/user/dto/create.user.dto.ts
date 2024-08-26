import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: 'John Doe', required: false })
  @IsOptional()
  name?: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @Length(8, 20)
  password: string;
}
