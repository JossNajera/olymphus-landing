const SibApiV3Sdk = require('@getbrevo/brevo');

// CONFIGURAR EL CLIENTE DE BREVO
const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

// Autenticación mediante la API Key guardada en Render
const apiKey = SibApiV3Sdk.ApiClient.instance.authentications['api-key'];
apiKey.apiKey = process.env.BREVO_API_KEY;


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

  // CONFIGURACIÓN DEL OBJETO DE CORREO PARA BREVO
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = asunto;
    sendSmtpEmail.htmlContent = plantillaProspecto;
    
    // Remitente (Tu cuenta de soporte autenticada)
    sendSmtpEmail.sender = { 
        name: "Olymphus TI", 
        email: process.env.CORREO 
    };
    
    // Destinatario (El prospecto que llenó el formulario)
    sendSmtpEmail.to = [{ 
        email: correo, 
        name: nombreCompleto 
    }];

    try {
        console.log("Enviando petición de correo a la API de Brevo...");
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        
        console.log('Correo enviado exitosamente a través de Brevo. ID:', data.messageId);
        return true;
    } catch (error) {
        // Captura el error de la API si Brevo llega a rechazar la estructura
        console.error('Error al enviar correo con Brevo:', error.response ? error.response.body : error);
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

  // CONFIGURACIÓN DEL OBJETO DE CORREO PARA BREVO
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

    sendSmtpEmail.subject = asunto2;
    sendSmtpEmail.htmlContent = plantillaCEO;
    
    // Remitente: Tu cuenta de soporte/sistema configurada en las variables de entorno de Render
    sendSmtpEmail.sender = { 
        name: "Olymphus TI", 
        email: process.env.CORREO 
    };
    
    // Destinatario: El correo del CEO recibido por parámetro (correo2)
    sendSmtpEmail.to = [{ 
        email: correo2, 
        name: "Olymphus TI <Notificación>" 
    }];

    try {
        console.log("Enviando correo de notificación al CEO a la API de Brevo...");
        const data = await apiInstance.sendTransacEmail(sendSmtpEmail);
        
        console.log('Correo enviado al CEO exitosamente. ID:', data.messageId);
        return true;
    } catch (error) {
        console.error('Error al enviar correo al CEO con Brevo:', error.response ? error.response.body : error);
        return false;
    }

};

module.exports = {
    enviarCorreoProspecto,
    enviarCorreoCEO
};