 //Post API validation
 import { test, expect } from '@playwright/test';

test('Post API validation', async ({ request }) => {
    const postAPI = await request.post('https://gorest.in/public/v2/users', {
        headers: {
            'content-type': 'application/json',
            'Authorization': 'Bearer demo-token'
        },
        data: {
            "name": "jiva das",
            "email": "jivadas@example.com",
            "gender": "male",
            "status": "active"
        }
    });
    expect(postAPI.status()).toBe(201);
   
    const responseBody = await postAPI.json();
    console.log("Response Body:", responseBody);
    //expect(responseBody.status()).toBe(201);
    expect(responseBody.name).toBe("jiva das");
    expect(responseBody.email).toBe("jivadas@example.com");
    expect(responseBody.gender).toBe("male");
    expect(responseBody.status).toBe("active");
});