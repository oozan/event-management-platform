import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User } from './user.schema';
import * as jwt from 'jsonwebtoken';
import envConfig from '../../config/env.config';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(email: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new this.userModel({ email, password: hashedPassword });
    return user.save();
  }

  async validateUser(email: string, password: string) {
    const user = await this.userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  generateJwt(user: User) {
    return jwt.sign({ email: user.email, id: user._id }, envConfig.jwtSecret, {
      expiresIn: '1h',
    });
  }
}
