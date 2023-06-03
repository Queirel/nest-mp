import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    UsersModule,
    SeedModule,
    MongooseModule.forRoot(
      'mongodb+srv://marketplace:wuqjcLMhGwcvcUGb@cluster0.35c31bo.mongodb.net/marketplace?retryWrites=true&w=majority',
    ),
    CommonModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
