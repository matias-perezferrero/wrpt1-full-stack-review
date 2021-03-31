import axios from 'axios';

let validateStatus =  function (status) {
    return true;
}

describe('Products API Endpoints', () => {

    describe('GET /api/products', () => {

        test('Should return all products', async () => {
            const response = await axios.get('http://localhost:4420/api/products');

            expect(response.status).toBe(200);
            expect(response.data).toEqual(
                expect.arrayContaining([
                    expect.objectContaining({
                        category: expect.any(String),
                        price: expect.any(String),
                        description: expect.any(String),
                        name: expect.any(String),
                        product_id: expect.any(Number),
                        // product_images: expect.any(Array)
                    })  
                ])
            )
        })
    })

    describe('POST /api/products', () => {

    })

    describe('GET /api/products/:id', () => {

    })
})