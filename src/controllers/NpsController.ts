import { Request, Response } from "express"
import { getCustomRepository, IsNull, Not } from "typeorm"
import { SurveyUserRepository } from "../repositories/SurveyUserRepository"

class NpsController {

    async execute(request: Request, response: Response) {
        const { survey_id } = request.params

        const surveyUserRepository = getCustomRepository(SurveyUserRepository)

        const surveysUsers = await surveyUserRepository.find({
            survey_id, 
            value: Not(IsNull())
        })

        const numberOfDetractors = surveysUsers.filter(
            (surveyAnswer) => surveyAnswer.value >= 0 && surveyAnswer.value <= 6
        ).length

        const numberOfPassives = surveysUsers.filter(
            (surveyAnswer) => surveyAnswer.value >= 7 && surveyAnswer.value <= 8
        ).length

        const numberOfPromoters = surveysUsers.filter(
            (surveyAnswer) => surveyAnswer.value >= 9 && surveyAnswer.value <= 10
        ).length

        const totalAnswers = surveysUsers.length

        const calculate = Number(
            (((numberOfPromoters - numberOfDetractors) / totalAnswers) * 100).toFixed(2)
        )

        return response.json({
            surveysUsers,
            numberOfDetractors,
            numberOfPassives,
            numberOfPromoters,
            totalAnswers,
            nps: calculate
        })
    }

}

export { NpsController }
