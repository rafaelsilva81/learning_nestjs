import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';
import { User, Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
    constructor(private db: DatabaseService) { }

    //Isso permite filtrar por inputs "unique" do modelo, no caso temos email e id
    async getSingleUser(userWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.db.user.findUnique({
            where: userWhereUniqueInput,
        });
    }

    async getManyUsers(): Promise<User[]> {
        return this.db.user.findMany();
    }

    async createUser(data: Prisma.UserCreateInput): Promise<User> {
        return this.db.user.create({
            data,
        });
    }

    async updateUser(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
    }): Promise<User> {
        const { where, data } = params;
        return this.db.user.update({
            data,
            where,
        });
    }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.db.user.delete({
            where,
        });
    }

}
