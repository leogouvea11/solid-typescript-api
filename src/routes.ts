import { Router } from 'express'
import type { Request, Response } from 'express'

import { createUserController } from './useCases/CreateUser'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  return response.json({
    message: 'Hello world!',
  })
})

router.post('/users', (request: Request, response: Response) => {
  return createUserController.handle(request, response)
})

export { router }
