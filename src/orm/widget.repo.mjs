import {getTransactionId} from '../utils/transaction-generator.utils.mjs';

const saveWidget = (widget)=>{
    console.log(`Repo: saving widget... Transaction id: ${getTransactionId()}`);
};

export default saveWidget;