import { format } from "/node_modules/@formkit/tempo/dist/index.mjs";

const date = format(new Date(), "full");

console.log(date);
