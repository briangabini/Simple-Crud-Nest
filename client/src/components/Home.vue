<template>
    <div>
        <h1>Home</h1>
        <table v-if="car">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Brand</th>
                    <th>Color</th>
                    <th>Model</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ car.id }}</td>
                    <td>{{ car.brand }}</td>
                    <td>{{ car.color }}</td>
                    <td>{{ car.model }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            car: null
        }
    },
    created() {
        axios.get('http://localhost:3000/car')
            .then(response => {
                this.car = response.data;
                console.log(this.car);
            })
            .catch(error => {
                console.error(error);
            });
    }
}
</script>