//

interface APIResponse {
    body: string;
    headers?: object;
    responseTime?: number;

}
// Create an object that adheres to the APIResponse interface
let response1: APIResponse = {
    body: 'Hi',
};
// Create another object that adheres to the APIResponse interface
let response2: APIResponse = {
    body: 'Hi',
    headers: {},
    responseTime: 400
};
// Log the details of the API responses

console.log("Response 1:", response1);
console.log("Response 2:", response2);