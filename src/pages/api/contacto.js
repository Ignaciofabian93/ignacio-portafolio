// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  require("dotenv").config();

  let nodemailer = require("nodemailer");

  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.app,
    },
    secure: true,
  });

  const mailData = {
    from: process.env.email,
    to: process.env.my_email,
    subject: `Message from: ${req.body.nombre}`,
    html: `<div>${req.body.correo}</div>
					<p>Sent by: <br/>
					Name: ${req.body.nombre} <br/>
					Email: ${req.body.correo} <br/>
					Message: ${req.body.mensaje} <br/>
					</p>
		`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
