import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CarService } from './car.service';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('car')
export class CarController {
    constructor(private readonly carService: CarService) {}

    @Post()
    create(@Body() createCarDto: CarDto) {
        return this.carService.postCar(createCarDto);
    }

    @Get()
    findAll() {
        return this.carService.getCars();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.carService.getCarById(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto) {
        return this.carService.putCarById(+id, updateCarDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.carService.deleteCarById(+id);
    }
}
