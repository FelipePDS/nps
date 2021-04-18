import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SurveyRepository } from "../repositories/SurveyRepository"
import * as yup from "yup"

class SurveyController {

    async create(request: Request, response: Response) {
        const { title, description } = request.body

        const schema = yup.object().shape({
            title: yup.string().required(),
            description: yup.string().required()
        })

        try {
            await schema.validate(request.body, { abortEarly: false })
        } catch(err) {
            return response.status(400).json({ error: err })
        }

        const surveyRepository = getCustomRepository(SurveyRepository)

        const survey = surveyRepository.create({
            title, description
        })

        await surveyRepository.save(survey)

        return response.status(201).json(survey)
    }

    async show(request: Request, response: Response) {
        const surveyRepository = getCustomRepository(SurveyRepository)

        const all = await surveyRepository.find()

        return response.json(all)
    }
    
}

export { SurveyController }
