import express from 'express'
import cors from 'cors'
import userRouter from './routers/userRouter.js'
import productRouter from './routers/productRouter.js'
import { logger } from './middleware/logger.js'
import { verifier } from './middleware/verifier.js'

const app = express()
const port = 3000


app.use(logger())
app.use(cors())
app.use(express.json())

app.use('/user', userRouter)
app.use('/product', productRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
