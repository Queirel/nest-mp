import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { CommonModule } from './common/common.module';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { joiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: joiValidationSchema
    }),
    UsersModule,
    SeedModule,
    MongooseModule.forRoot(process.env.MONGODBURL),
    CommonModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
