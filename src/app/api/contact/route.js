// src/app/api/contact/route.js
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        // 1. Extraer datos enviados desde el formulario (JSON)
        const { name, phone, email, city, message } = await request.json();

        // 2. Configurar transporter con nodemailer (ejemplo con Gmail)
        // En producción es preferible usar variables de entorno en .env.local
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'rickisierra03@gmail.com',       // <-- Reemplaza con tu correo
                pass: 'sbav rkyb apwa xmyy'  // <-- Contraseña de aplicación de tu cuenta Gmail
            },
        });

        // 3. Definir el contenido del correo
        const mailOptions = {
            from: 'rickisierra03@gmail.com',
            to: ['rickisierra919@gmail.com', 'rickisierra03@gmail.com'], // Destinatarios
            subject: `Verderaíz - ${name} - Formulario Contáctanos`,
            text: `Teléfono: ${phone}
Email: ${email}
Ciudad: ${city}

Mensaje:
${message}`
        };

        // 4. Enviar correo
        await transporter.sendMail(mailOptions);

        // 5. Responder al cliente con éxito
        return new Response(
            JSON.stringify({ success: true, message: 'Correo enviado exitosamente' }),
            { status: 200 }
        );

    } catch (error) {
        console.error('Error al enviar correo:', error);
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 500 }
        );
    }
}
