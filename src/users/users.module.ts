import { Module } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, DatabaseService],
  controllers: [UsersController]
})
export class UsersModule {}
