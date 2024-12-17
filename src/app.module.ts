import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import envConfig from './config/env.config';
import { UserModule } from './modules/users/user.module';
import { EventModule } from './modules/events/event.module';

@Module({
  imports: [
    MongooseModule.forRoot(envConfig.dbConnection),
    UserModule,
    EventModule,
  ],
})
export class AppModule {}
