import { Request, Response } from 'express'
import prisma from '../lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const findUserByEmail = async (email: string) => {
  return await prisma.user.findFirst({
    where: {
      email,
    },
  })
}

const signup = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body
    // TODO: add validations here, check if email and password exists

    const user = await findUserByEmail(email)
    if (user) return res.status(401).send('User already exists.')

    const hashedPassword = await bcrypt.hash(password, 10)
    await prisma.user.create({
      data: { email, password: hashedPassword },
    })

    return res.status(201).send('New user created!')
  } catch (error) {
    console.error(error)
    res.status(500).send('Eror to create the user')
  }
}

const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body

  const user = await findUserByEmail(email)
  if (!user) return res.status(400).send(`User doesn't exist.`)

  const match = await bcrypt.compare(password, user.password)
  if (!match) return res.status(400).send('Invalid email or password')

  const token = jwt.sign({ userId: user.id }, process.env.SECRET as string, {
    expiresIn: '2h',
  })

  return res.send({ token })
}

export default { signup, signin }
