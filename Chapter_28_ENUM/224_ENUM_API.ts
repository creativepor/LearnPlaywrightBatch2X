enum HTTPMETHOD {
    get = "GET",
    post = "POST",
    put = "PUT",
    delete = "DELETE"
}

function sendRequest(method: HTTPMETHOD, endpoint: string): void {
    console.log(method + " " + endpoint + " → 200 OK");
}

sendRequest(HTTPMETHOD.get, "/api/users");
sendRequest(HTTPMETHOD.post, "/api/users");
sendRequest(HTTPMETHOD.delete, "/api/users/1");