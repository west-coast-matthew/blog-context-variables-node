import express from 'express';
import service1 from './service/service1.service.mjs';
import widget from './orm/widget.model.mjs';
import {generateTransactionId, getTransactionId} from './utils/transaction-generator.utils.mjs';
import {TRANSACTION_ID} from './constants/index.mjs';
import contextMiddleware from './middleware/context.middleware.mjs';

import als from './local-storeage.mjs';

const app = express();

  app.use(contextMiddleware);


app.get('/welcome',(req, res)=>{
    service1(widget);
    console.log(`[${getTransactionId()}] request received`);
    res.send({message:'Welcome!'});
})


const PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Server started on ${PORT}`);
})
