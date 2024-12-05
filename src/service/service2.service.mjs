import service3 from './service3.service.mjs';
import {getTransactionId} from '../utils/transaction-generator.utils.mjs';

const service2 = (widget)=>{
    console.log(`Service 2: Transaction id: ${getTransactionId()}`);
    service3(widget);    
};

export default service2;