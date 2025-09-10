import express from 'express'
import cors from 'cors'
import userRouter from './routers/userRouter.js'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`)
})
