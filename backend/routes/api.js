var express = require('express');
var router = express.Router();
var trabajosModel = require('./../models/trabajosModels');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/trabajos', async function (req, res, next){
    let trabajos = await trabajosModel.getTrabajos();

    trabajos = trabajos.map(trabajos => {
        if (trabajos.img_id) {
            const imagen = cloudinary.url(trabajos.img_id, {
                width: 400,
                height: 500,
                crop: 'pad'
            });
            return{
                ...trabajos,
                imagen
            }
        } else {
            return {
                ...trabajos,
                imagen: ''
            }
        }
    });

    res.json(trabajos);
});

/*Termina trabajos*/
/*Inicia contacto*/
router.post('/contacto', async (req,res) => {
    const mail = {
        to: 'renzonicolas27@gmail.com',
        subject: 'Contacto web',
        html: `${req.body.nombre} se contacto a traves de la web y requiere más información
        a este correo: ${req.body.email} <br> Además, hizo el siguiete comentario: 
        ${req.body.mensaje} <br> Su tel es:  ${req.body.telefono}`
    }

    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        }
      });

      await transport.sendMail(mail)

      res.status(201).json({
          error: false,
          message: 'Mensaje enviado'
      });
});

module.exports = router;