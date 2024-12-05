import repo from '../orm/widget.repo.mjs';
import {getTransactionId} from '../utils/transaction-generator.utils.mjs';
import saveWidget from '../orm/widget.repo.mjs';
const service3 = (widget)=>{
    console.log(`Service 3: Transaction id: ${getTransactionId()}`);
    saveWidget(widget);
};

export default service3;