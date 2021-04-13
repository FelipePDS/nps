import nodemailer, { Transporter } from "nodemailer"
import handlebars from "handlebars"

import { resolve } from "path"
import { readFileSync } from "fs"

class SendMailService {

    private client: Transporter
    constructor() {
        nodemailer.createTestAccount().then(account => {
            const transporter = nodemailer.createTransport({
                host: account.smtp.host,
                port: account.smtp.port,
                secure: account.smtp.secure,
                auth: {
                    user: account.user,
                    pass: account.pass
                }
            });

            this.client = transporter
        })
    }

    async execute(to: string, subject: string, body: string) {
        const npsMailPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs") // get project directory
        const templateFileContent = readFileSync(npsMailPath).toString("utf-8") // reads file from directory

        const mailTemplateParse = handlebars.compile(templateFileContent) // compiles the template file to be sent as an email by passing the variables that are present in it
        const html = mailTemplateParse({
            name: to,
            title: subject,
            description: body
        })

        const message = await this.client.sendMail({
            to,
            subject,
            html,
            from: "NPS <noreplace@nps.com.br>"
        })

        console.log('Message sent: %s', message.messageId)
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(message))
    }

}

export default new SendMailService()
