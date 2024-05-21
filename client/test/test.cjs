const request = require('supertest');

describe('Car API', () => {
  let assert;

  before(async () => {
    const chai = await import('chai');
    assert = chai.assert;
  });

  it('GET /car - should retrieve all cars', (done) => {
    request('http://localhost:3000')
      .get('/car')
      .end((err, res) => {
        console.log(res.body);
        assert.ok(res.body, 'Data should be retrieved');
        done();
      });
  });

  it('POST /car - should create a car', (done) => {
    const newCar = { id: 1, brand: 'Toyota', color: 'Red', model: 'Camry' };
    request('http://localhost:3000')
      .post('/car')
      .send(newCar)
      .end((err, res) => {
        console.log(res.body);
        assert.equal(res.body.id, newCar.id, 'Car should be created');
        done();
      });
  });

  it('GET /car/:id - should retrieve one car', (done) => {
    const id = 1;
    request('http://localhost:3000')
      .get(`/car/${id}`)
      .end((err, res) => {
        console.log(res.body);
        assert.equal(res.body.id, id, 'Car should be retrieved');
        done();
      });
  });

  it('PATCH /car/:id - should update one car', (done) => {
    const id = 1;
    const updatedCar = { color: 'Blue' };
    request('http://localhost:3000')
      .patch(`/car/${id}`)
      .send(updatedCar)
      .end((err, res) => {
        console.log(res.body);
        assert.equal(res.body.color, 'Blue', 'Car should be updated');
        done();
      });
  });

  it('DELETE /car/:id - should delete one car', (done) => {
    const id = 1;
    request('http://localhost:3000')
      .delete(`/car/${id}`)
      .end((err, res) => {
        console.log(res.body);
        assert.equal(res.status, 200, 'Car should be deleted');
        done();
      });
  });
});