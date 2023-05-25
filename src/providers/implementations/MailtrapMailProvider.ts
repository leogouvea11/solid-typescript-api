import { IMailProvider, IMessage } from '../IMailProvider'

import Mail from 'nodemailer/lib/mailer'
import nodemailer from 'nodemailer'

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'c1ec036c055dd2',
        pass: 'a1d2e722bac80a',
      },
    })
  }
  async sendMail(message: IMessage): Promise<void> {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.to.name,
        address: message.to.email,
      },
      subject: message.subject,
      html: message.body,
    })
  }
}
