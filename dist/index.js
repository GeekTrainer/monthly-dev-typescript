"use strict";
// function displayMessage(name) {
//     console.log('Hello ' + name);
// }
Object.defineProperty(exports, "__esModule", { value: true });
// displayMessage()
const node_fetch_1 = require("node-fetch");
async function displayUUID() {
    const response = await node_fetch_1.default('https://httpbin.org/uuid');
    const json = await response.json();
    console.log(json.uuid);
}
