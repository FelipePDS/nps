import { Request, Response } from "express"
import { getCustomRepository } from "typeorm"
import { SurveyRepository } from "../repositories/SurveyRepository"
import { UserRepository } from "../repositories/UserRepository"
import { SurveyUserRepository } from "../repositories/SurveyUserRepository"
import { resolve } from "path"
import SendMailService from "../services/SendMailService"

class SendMailController {
    
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body

        const userRepository = getCustomRepository(UserRepository)
        const surveyRepository = getCustomRepository(SurveyRepository)
        const surveyUserRepository = getCustomRepository(SurveyUserRepository)

        const user = await userRepository.findOne({ email })

        if (!user) {
            return response.status(400).json({
                error: "User does not exists!"
            })
        }

        const survey = await surveyRepository.findOne({ id: survey_id })

        if (!survey) {
            return response.status(400).json({
                error: "Survey does not exists!"
            })
        }

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            link: process.env.USER_ANSWER_URL_MAIL,
            user_id: user.id
        }

        const npsMailPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs")

        const surveyUserAlreadyExists = await surveyUserRepository.findOne({ 
            where: [{ user_id: user.id }, { value: null }],
            relations: ["user", "survey"]
        })

        if (surveyUserAlreadyExists) {
            await SendMailService.execute(email, survey.title, variables, npsMailPath)

            return response.json(surveyUserAlreadyExists)
        }

        const surveyUser = surveyUserRepository.create({ 
            user_id: user.id,
            survey_id
        })

        await surveyUserRepository.save(surveyUser)

        await SendMailService.execute(email, survey.title, variables, npsMailPath)

        return response.json(surveyUser)
    }

}

export { SendMailController }
