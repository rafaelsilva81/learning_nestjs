import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {

    constructor(private usersService: UsersService) {}
    
    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.getSingleUser({email: email}); //Obtem usuario unico através do email passado
        if (user && user.pass === pass) {
          const { pass , ...result } = user;
          return result;
        }
        return null;
    }
    


}
