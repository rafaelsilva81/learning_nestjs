import { Strategy } from 'passport-local'; //Importações do passport
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(username, password); //Tenta validar o usuário
    if (!user) {
      throw new UnauthorizedException(); //Exception
    }
    return user;
  }
}