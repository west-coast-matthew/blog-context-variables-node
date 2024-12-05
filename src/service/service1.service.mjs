import service2 from './service2.service.mjs';
import {getTransactionId} from '../utils/transaction-generator.utils.mjs';
import {TRANSACTION_ID} from '../constants/index.mjs';

import als from '../local-storeage.mjs';
const service1 = (widget)=>{
    
    console.log(`service 1: Transaction id: ${getTransactionId()}`);
    service2(widget);
};

export default service1;
