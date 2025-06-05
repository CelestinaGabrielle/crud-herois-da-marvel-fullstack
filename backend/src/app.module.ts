import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HeroesModule } from './heroes/heroes.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/heroes'),
    HeroesModule,
  ],
})
export class AppModule {}
