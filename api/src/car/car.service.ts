import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ICar } from './interfaces/car.interface';
import { CarDto } from './dto/car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { HttpException } from '@nestjs/common';
import { DeleteResult } from 'mongodb';

@Injectable()
export class CarService {
    constructor(@InjectModel('Car') private readonly carModel: Model<ICar>) {}
    public async getCars(): Promise<CarDto[]> {
        const cars = await this.carModel.find().exec();

        if (!cars || !cars[0]) {
            throw new HttpException('Not Found', 404);
        }

        return cars;
    }

    public async postCar(carDto: CarDto): Promise<CarDto> {
        const newCar = new this.carModel(carDto);
        return await newCar.save();
    }

    public async getCarById(id: number): Promise<CarDto> {
        const car = await this.carModel.findOne({ id }).exec();

        if (!car) {
            throw new HttpException('Not Found', 404);
        }

        return car;
    }

    public async deleteCarById(id: number): Promise<DeleteResult> {
        const car = await this.carModel.deleteOne({ id }).exec();

        if (car.deletedCount === 0) {
            throw new HttpException('Not Found', 404);
        }

        return car;
    }

    public async putCarById(
        id: number,
        updateCarDto: UpdateCarDto,
    ): Promise<UpdateCarDto> {
        const car = await this.carModel
            .findOneAndUpdate({ id }, { ...updateCarDto }, { new: true })
            .exec();

        if (!car) {
            throw new HttpException('Not Found', 404);
        }

        return car;
    }
}
