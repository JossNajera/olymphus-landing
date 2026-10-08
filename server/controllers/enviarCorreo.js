const nodemailer = require('nodemailer');

// CONFIGURAR EL TRANSPORTE SMTP DE GMAIL.
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Al desplegar a producción se cambia al puerto 587 porque Render, AWS o Digital Ocean Bloquean el puerto 465 para eviar el spam de envios de corros.
    secure: false, // true para puerto 465 en modo local, false para otros puertos en este caso para subir a producción
    auth: {
        user: process.env.CORREO, // Tu correo personal
        pass: process.env.PAZZ // La contraseña de 16 dígitos generada en Google
    }
});

// ENVIAR CORREO A PROSPECTOS
const enviarCorreoProspecto = async (correo, asunto, nombreCompleto, telefono, servicioInteres, comentario) => {

    // PLANTILLA HTML PROSPECTO
const plantillaProspecto = `

        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación Olymphus TI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            font-family: 'Google Sans', Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            color: #202124;
        }
        .main-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }
        .content-padding {
            padding: 40px 30px;
        }
        .logo-section {
            padding-bottom: 24px;
        }
        .logo-img {
            display: block;
            border: 0;
        }
        .main-title {
            font-size: 24px;
            line-height: 32px;
            color: #202124;
            padding-bottom: 16px;
            font-weight: 400;
        }
        .account-badge {
            margin-bottom: 30px;
        }
        .avatar-container {
            padding-right: 8px;
        }
        .avatar {
            width: 28px;
            height: 28px;
            background-color: #e91e63;
            color: #ffffff;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            font-size: 14px;
            font-weight: bold;
        }
        .email-text {
            font-size: 14px;
            color: #5f6368;
            line-height: 20px;
        }
        .divider {
            border: 0;
            border-top: 1px solid #e0e0e0;
            margin-top: 0;
            margin-bottom: 30px;
        }
        .body-text-table {
            font-size: 14px;
            line-height: 21px;
            color: #3c4043;
            text-align: left;
        }
        .paragraph {
            padding-bottom: 24px;
        }
        .paragraph-bold-title {
            color: #202124;
            display: block;
            margin-bottom: 4px;
        }
        .footer-section {
            font-size: 12px;
            line-height: 16px;
            color: #5f6368;
        }
        .footer-link-wrapper {
            padding-top: 4px;
        }
        .link {
            color: #1a73e8;
            text-decoration: none;
        }
        .footer-link {
            color: #1a73e8;
            text-decoration: none;
            word-break: break-all;
        }
    </style>
</head>
<body>

    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="main-container">
        <tr>
            <td class="content-padding">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" class="logo-section">
                            <img src="https://res.cloudinary.com/qxdtbuqk/image/upload/f_auto/q_auto/logo_fondo_blanco.jpg" alt="Olymphus TI" width="184" class="logo-img">
                        </td>
                    </tr>
                </table>

                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" class="main-title">
                           ¡Hola ${nombreCompleto}! Hemos recibido tus datos.
                        </td>
                    </tr>
                </table>

                <table align="center" border="0" cellpadding="0" cellspacing="0" class="account-badge">
                    <tr>
                        <td class="avatar-container">
                            <div class="avatar">J</div>
                        </td>
                        <td class="email-text">
                            ${correo}
                        </td>
                    </tr>
                </table>

                <hr class="divider">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="body-text-table">
                    <tr>
                        <td class="paragraph">
                            En breve nos pondremos en contacto contigo, a tu correo <a href="mailto:${correo}" class="link">${correo}</a>, ó, a tu número de teléfono ${telefono}, para que nos platiques un poco más sobre tu proyecto.
                        </td>
                    </tr>

                    <tr>
                        <td class="paragraph">
                            <strong class="paragraph-bold-title">Tenemos mas de 5 años en el mercado trasformado negocios con tecnología</strong>
                            Si no tienes idea por dónde empezar tu proyecto, nosotros te orientamos a tomar las mejores decisiones para tu negocio.
                        </td>
                    </tr>

                    <tr>
                        <td align="center" class="footer-section">
                            También puedes seguirnos en nuestra página de Facebook en: 
                            <div class="footer-link-wrapper">
                                <a href="https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr" class="footer-link">https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr</a>
                            </div>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>

`;

// CONFIGURACIÓN DEL CORREO
    try {
        const mailOptions = {
            from: `"Olymphus TI" <${process.env.CORREO}>`,
            to: correo,
            subject: asunto,
            html: plantillaProspecto, // Aqui va la plantilla HTML para el cuerpo del correo
        }

        // VERIFICAR QUE EL TRANSPORTADOR EXISTA ANTES DE EJECUTARSE
        if (!transporter) {
            throw new Error("El objeto 'transporter' de Nodemailer no está inicializado o importado correctamente.");
        }
        // METODO TRANSPORTADOR PARA ENVIAR LAS OPCIONES AL SERVIDOR SMTP
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: %s', info.messageId);

        return true;
        
    } catch (error) {
        console.error('Error al enviar correo:', error.message || error);
        return false;
    }
};

// ENVIAR CORREO AL CEO
const enviarCorreoCEO = async( correo2, asunto2, nombreCompleto, correo, telefono, servicioInteres, comentario) =>{

       // PLANTILLA HTML PROSPECTO
           const plantillaCEO = `

        <!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notificación Olymphus TI</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #ffffff;
            font-family: 'Google Sans', Roboto, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            color: #202124;
        }
        .main-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }
        .content-padding {
            padding: 40px 30px;
        }
        .logo-section {
            padding-bottom: 24px;
        }
        .logo-img {
            display: block;
            border: 0;
        }
        .main-title {
            font-size: 24px;
            line-height: 32px;
            color: #202124;
            padding-bottom: 16px;
            font-weight: 400;
        }
        .account-badge {
            margin-bottom: 30px;
        }
        .avatar-container {
            padding-right: 8px;
        }
        .avatar {
            width: 28px;
            height: 28px;
            background-color: #e91e63;
            color: #ffffff;
            border-radius: 50%;
            text-align: center;
            line-height: 28px;
            font-size: 14px;
            font-weight: bold;
        }
        .email-text {
            font-size: 14px;
            color: #5f6368;
            line-height: 20px;
        }
        .divider {
            border: 0;
            border-top: 1px solid #e0e0e0;
            margin-top: 0;
            margin-bottom: 30px;
        }
        .body-text-table {
            font-size: 14px;
            line-height: 21px;
            color: #3c4043;
            text-align: left;
        }
        .paragraph {
            padding-bottom: 24px;
        }
        .paragraph-bold-title {
            color: #202124;
            display: block;
            margin-bottom: 4px;
        }
        .footer-section {
            font-size: 12px;
            line-height: 16px;
            color: #5f6368;
        }
        .footer-link-wrapper {
            padding-top: 4px;
        }
        .link {
            color: #1a73e8;
            text-decoration: none;
        }
        .footer-link {
            color: #1a73e8;
            text-decoration: none;
            word-break: break-all;
        }
    </style>
</head>
<body>

    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="main-container">
        <tr>
            <td class="content-padding">
                
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" class="logo-section">
                            <img src="https://res.cloudinary.com/qxdtbuqk/image/upload/f_auto/q_auto/logo_fondo_blanco.jpg" alt="Olymphus TI" width="184" class="logo-img">
                        </td>
                    </tr>
                </table>

                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tr>
                        <td align="center" class="main-title">
                           ¡Tienes un nuevo prospecto! El usuario ${nombreCompleto} ha dejado sus datos.
                        </td>
                    </tr>
                </table>

                <table align="center" border="0" cellpadding="0" cellspacing="0" class="account-badge">
                    <tr>
                        <td class="avatar-container">
                            <div class="avatar">J</div>
                        </td>
                        <td class="email-text">
                          Correo del contacto  ${correo}
                        </td>
                    </tr>
                </table>

                <hr class="divider">

                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="body-text-table">
                    <tr>
                        <td class="paragraph">
                            Estos son los datos del interesado correo: <a href="mailto:${correo}" class="link">${correo}</a>. Teléfono: ${telefono}, para que lo contactes y platiques sobre su proyecto.
                        </td>
                    </tr>

                    <tr>
                        <td class="paragraph">
                            <strong class="paragraph-bold-title">${servicioInteres}</strong>
                            ${comentario}
                        </td>
                    </tr>

                    <tr>
                        <td align="center" class="footer-section">
                            También puedes seguirnos en nuestra página de Facebook en: 
                            <div class="footer-link-wrapper">
                                <a href="https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr" class="footer-link">https://www.facebook.com/share/1F3wrsnYJR/?mibextid=wwXIfr</a>
                            </div>
                        </td>
                    </tr>
                </table>

            </td>
        </tr>
    </table>

</body>
</html>

`;

    try {
        const mailOptions = {
            from: correo2,
            to: correo2,
            subject: asunto2,
            html: plantillaCEO, // Aqui va la plantilla HTML para el cuerpo del correo
        }
        
        // METODO TRANSPORTADOR PARA ENVIAR LAS OPCIONES AL SERVIDOR SMTP
        const info = await transporter.sendMail(mailOptions);
        console.log('Correo enviado: %s', info.messageId);
        return true;
    } catch (error) {
        console.error('Error al enviar correo:', error);
        return false;
    }

};

module.exports = {
    enviarCorreoProspecto,
    enviarCorreoCEO
};