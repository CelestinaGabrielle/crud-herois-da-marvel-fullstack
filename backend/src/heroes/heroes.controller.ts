import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Controller('heroes')
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.heroesService.create(createDto);
  }

  @Get()
  findAll() {
    return this.heroesService.findAll();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.heroesService.update(id, updateDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.heroesService.remove(id);
  }
}
