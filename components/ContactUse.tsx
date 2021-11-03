import emailjs from "emailjs-com";
import { useRef } from "react";

const ContactUse: React.FC = () => {
  const form: any = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_2wdq8se",
        "template_2eogbjd",
        form.current,
        "user_eKRBGOm39MiPHt31D2bfi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    console.log(form.current);
    e.target.reset();
  };
  return (
    <>
      <div className="py-12 card bg-gray-200" id="contactuse">
        <h1 className="text-center text-3xl ">Contact Form</h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-96 grid grid-cols-1 text-center mx-auto form-control"
        >
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="from_name"
            className="input"
            placeholder="Enter Your Name"
          />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="from_email"
            className="input"
            placeholder="Enter Your Email"
          />
          <label className="label">
            <span className="label-text">Message</span>
          </label>
          <textarea
            name="message"
            className="input"
            placeholder="Enter Message"
          />
          <input type="submit" value="Send" className="btn btn-outline w-40 mx-auto mt-6" />
        </form>
      </div>
    </>
  );
};

export default ContactUse;
