import { AsyncLocalStorage } from 'async_hooks';

const asyncLocalStorage = new AsyncLocalStorage();
console.log(`loading...`);
export default asyncLocalStorage;