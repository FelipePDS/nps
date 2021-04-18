import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repositories/UserRepository"
import * as yup from "yup"

class UserController {

    async create(request: Request, response: Response) {
        const { name, email } = request.body

        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email().required()
        })

        try {
            await schema.validate(request.body, { abortEarly: false })
        } catch(err) {
            return response.status(400).json({ error: err })
        }

        const userRepository = getCustomRepository(UserRepository)

        const userAlreadyExists = await userRepository.findOne({ email })

        if (userAlreadyExists) {
            return response.status(400).json({
                error: "user already exists!"
            })
        }

        const user = userRepository.create({
            name, email
        })

        await userRepository.save(user)

        return response.status(201).json(user)
    }
}

export { UserController }
