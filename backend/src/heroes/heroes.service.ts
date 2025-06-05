import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Hero, HeroDocument } from './schemas/hero.schema';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class HeroesService {
  constructor(@InjectModel(Hero.name) private heroModel: Model<HeroDocument>) {}

  async create(createDto: CreateDto): Promise<Hero> {
    const newHero = new this.heroModel(createDto);
    return newHero.save();
  }

  async findAll(): Promise<Hero[]> {
    return this.heroModel.find().exec();
  }

  async findOne(id: string): Promise<Hero | null> {
    return this.heroModel.findById(id).exec();
  }

  async update(id: string, updateDto: UpdateDto): Promise<Hero | null> {
    return this.heroModel
      .findByIdAndUpdate(id, updateDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Hero | null> {
    return this.heroModel.findByIdAndDelete(id).exec();
  }
}
