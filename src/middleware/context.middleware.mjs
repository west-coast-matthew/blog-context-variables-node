import { AsyncLocalStorage } from 'async_hooks';
import { v4 as uuidv4 } from 'uuid';
import { TRANSACTION_ID } from "../constants/index.mjs";

const asyncLocalStorage = new AsyncLocalStorage();

const contextMiddleware2 = (req, res, next) => {
  
  als.run({ TRANSACTION_ID: generateTransactionId() }, () => {
    next();
  });
  
};

export default contextMiddleware2;