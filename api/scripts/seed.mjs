import mongoose from 'mongoose';
import 'dotenv/config';

const CarSchema = new mongoose.Schema({
    id: Number,
    brand: String,
    color: String,
    model: String,
});

const Car = mongoose.model('Car', CarSchema);

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
});

mongoose.connection.on('open', async () => {
    console.log('Connected to MongoDB');

    const cars = [
        { id: 1, brand: 'Toyota', color: 'Red', model: 'Corolla' },
        { id: 2, brand: 'Honda', color: 'Blue', model: 'Civic' },
        { id: 3, brand: 'Ford', color: 'Black', model: 'Mustang' },
        { id: 4, brand: 'Chevrolet', color: 'White', model: 'Camaro' },
        { id: 5, brand: 'BMW', color: 'Silver', model: 'X5' },
    ];

    try {
        const result = await Car.insertMany(cars);
        console.log('Cars inserted successfully:', result);
        mongoose.connection.close();
    } catch (error) {
        console.error('Error inserting cars:', error);
        mongoose.connection.close();
    }
});

mongoose.connection.on('close', () => {
    console.log('Connection to MongoDB closed');
});
