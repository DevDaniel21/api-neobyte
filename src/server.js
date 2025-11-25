import express from 'express';
import cors from 'cors';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import favoriteRouter from './routers/favoriteRouter.js';
import adressRouter from './routers/adressRouter.js';
import commentRouter from './routers/commentRouter.js';
import cartRouter from './routers/cartRouter.js';
// import { logger } from './middleware/logger.js'
// import { verifier } from './middleware/verifier.js'

const app = express();
const port = 4000;

// app.use(logger())
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/favorite', favoriteRouter);
app.use('/adress', adressRouter);
app.use('/comment', commentRouter);
app.use('/cart', cartRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
