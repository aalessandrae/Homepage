import Email from "https://smtpjs.com/v3/smtp.js";
const Name = document.getElementById("name")
const Emailaddress = document.getElementById("email")
const Message = document.getElementById("message")

const SendEmail = () => {


    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "23b7fea21ee3f3",
        Password : "53f4f55cfa3bf7",
        To : "alessandra.latham2808@gmail.com",
        From : Emailaddress.getAttribute("value"),
        Subject : "Message from " + Name.getAttribute("value") + " (Your Website)",
        Body : Message.getAttribute("value")
    }).then(
        message => alert(message)
    );
}

