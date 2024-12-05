import als from '../local-storeage.mjs';
import { v4 as uuidv4 } from 'uuid';

import { TRANSACTION_ID } from "../constants/index.mjs";

export const generateTransactionId = ()=>{
  return uuidv4();
}

export const getTransactionId = ()=>{
  return als.getStore().TRANSACTION_ID;
}
