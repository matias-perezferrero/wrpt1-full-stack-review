import axios from 'axios';


describe('Auth API Endpoints', () => {
    let validateStatus =  function (status) {
        return true;
    }

    beforeAll( async () => {
        //TODO: hit our server and see if its alive, otherwise kick out.
        //TODO: hit our delete for our testUser
        
    })

    test('POST /api/register', async () => {
        const requestBody = { email: "test@gmail.com", password: "test" } 
        try {
            const response = await axios.post('http://localhost:4420/api/register', requestBody, { validateStatus })
        } catch (err) {
            
            expect(response.status).toBe(400);
        }

    })
})