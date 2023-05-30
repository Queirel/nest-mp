import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [UsersModule, SeedModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
