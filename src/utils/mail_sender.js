import nodemailer from "nodemailer";
import { CONFIG } from "../../config/global.config.js";

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: CONFIG["USER"],
    pass: CONFIG["APP_PASSWORD"],
  },
});

export function send_notification() {
  var mailOptions = {
    from: "jerenr18@gmail.com",
    to: "rahuldarekar369782@gmail.com",
    subject: "Sending Email using Node.js", // add dyanamicaly
    text: "That was easy!",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
