import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        const { subject, message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'luxore',
            host: 'mail.luxore.mx',
            port: 465,
            secure: true,
            auth: {
                user: 'gguillen@luxore.mx',
                //  pass: process.env.NEXT_PUBLIC_PASSWORD
                pass: '|d~|f3@2l75#'
            }
        })

        const mailOption = {
            from: 'gguillen@luxore.mx',
            to: 'mdud9505@gmail.com',
            subject: "Send Email Tutorial",
            html: `
        <h3>Hello Augustine</h3>
        <li> title: ${subject}</li>
        <li> message: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)

        return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "Failed to Send Email" + error}, { status: 500 })
    }
}