import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

// https://www.youtube.com/watch?v=bMq2riFCF90
// npm i @emailjs/browser
// https://www.emailjs.com/docs/examples/reactjs/

// https://dashboard.emailjs.com/admin/account
// Email Services => Service ID
// Email Templates => Email Templates
// Account => API keys

export const Gmail = () => {
  const [toName, setToName] = useState("");
  const [fromName, setFromName] = useState("");
  const [messageText, setMessageText] = useState("");

  const form = useRef();

  const validateForm = () => {
    if (!toName) {
      toast.error("Please enter a name");
      return false;
    }
    if (!fromName) {
      toast.error("Please enter an email");
      return false;
    }
    if (!messageText) {
      toast.error("Please enter a message");
      return false;
    }

    // Други валидации, ако е необходимо
    return true;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_oehhwu5",
        "template_tcukdd4",
        form.current,
        "bOCr1g25g-7ADwIWq"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Error sending email");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="to_name"
          value={toName}
          onChange={(e) => setToName(e.target.value)}
        />
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="from_name"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
        />
      </div>
      <div>
        <label>Message</label>
        <textarea
          name="message"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
        />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};