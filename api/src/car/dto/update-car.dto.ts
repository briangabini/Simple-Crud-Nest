import { CarDto } from './car.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateCarDto extends PartialType(CarDto) {}
