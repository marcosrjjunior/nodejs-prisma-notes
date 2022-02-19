import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET as string

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers.authorization
  if (!authorization) return res.status(401).send('Authorization is required.')

  const [, token] = authorization.split(' ')
  if (!token) return res.status(401).send('Authorization is required.')

  jwt.verify(token, secret, (error, decoded) => {
    if (error) return res.status(403).send(error)

    const { userId } = decoded as { userId: number }

    req.userId = userId

    next()
  })
}

export default auth
