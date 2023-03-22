const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();


  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "elmore.kovacek71@ethereal.email",
      pass: "xenX22sr7ahWhfz4uh",
    },
  });

  let info = await transporter.sendMail({
    from: '"aparna" <aparnaraji2000@gmail.com>', // sender address
    to: "adarshspillai65@gmail.com", // list of receivers
    subject: "Hello Adarsh", // Subject line
    text: "This is for testing purpose", // plain text body
    html: "<b>This is for testing purpose</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;