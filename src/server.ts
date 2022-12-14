import 'reflect-metadata'
import http from 'node:http'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import { Server } from 'socket.io'

import './shared/container'
import swaggerFile from './swagger.json'
import { AppError } from './errors/AppError'

import { router } from './routes/index'

const app = express()
const server = http.createServer(app)
export const io = new Server(server)

app.use(express.json())
app.use(cors())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use(router)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message
    })
  }

  return response.status(500).json({
    status: 'error',
    message: `Internal server erro - ${err.message}`
  })

})

server.listen(3333, () => console.log('Server is running 3333'))
