import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarService } from './car.service';
import { CarController } from './car.controller';
import { CarSchema } from './schemas/car.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {
                name: 'Car',
                schema: CarSchema,
            },
        ]),
    ],
    controllers: [CarController],
    providers: [CarService],
})
export class CarModule {}
