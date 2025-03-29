import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
    try {
        debugger
        const { name,lastName,email, phone,money,message } = await request.json();

        const transporter = nodemailer.createTransport({
            service: 'luxore',
            host: 'mail.luxore.mx',
            port: 465,
            secure: true,
            auth: {
                user: 'gguillen@luxore.mx',
                //  pass: process.env.NEXT_PUBLIC_PASSWORD
                pass: '|D~|f3@2l75#'
            }
        })

        const mailOption = {
            from: 'gguillen@luxore.mx',
            to: 'contacto@luxore.mx',
            subject: "Nuevo mensaje de cliente",
            html: `
        <li> Nombre: ${name}</li>
        <li> Apellido: ${lastName}</li> 
        <li> Email: ${email}</li> 
        <li> Teléfono: ${phone}</li> 
        <li> Monto: ${money}</li> 
        <li> mensaje: ${message}</li> 
        `
        }

        await transporter.sendMail(mailOption)
        console.log("mail ok");
        return NextResponse.json({ message: "Mensaje enviado con éxito" }, { status: 200 })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to Send Email" + error}, { status: 500 })
    }
}