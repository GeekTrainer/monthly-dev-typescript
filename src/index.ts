// function displayMessage(name) {
//     console.log('Hello ' + name);
// }

// displayMessage()

import fetch from 'node-fetch';

interface UUIDServiceResponse {
    uuid: string;
}

async function displayUUID() {
    const response = await fetch('https://httpbin.org/uuid');
    const json = await response.json() as UUIDServiceResponse;

    console.log(json.uuid);
}
