import React from "react";
import "./Contact.css";
import mail from "../../assets/mail_icon.svg";
import call from "../../assets/call_icon.svg";
import location from "../../assets/location_icon.svg";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8df381c9-218d-4b66-9812-99dab30fd3cf");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <section id="ContactPages">
      <div id="ContactPage">
        <h1 className="ContactTitle">Contact Me</h1>
        <span className="ContactDes">
          Please fill out the form below to discuss my work oppotunities.
        </span>
        <form className="contactForm" onSubmit={onSubmit}>
          <input
            type="text "
            placeholder="Your Name"
            className="name"
            name="Name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="Email"
          />
          <textarea
            className="msg"
            name="Message"
            id=""
            placeholder="Your message"
            rows="5"
          ></textarea>
          <button type="submit" value="Send" className="SubmitBtn">
            Submit
          </button>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail} alt="" />
              <p>sraj15050@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call} alt="" />
              <p>+91-8210780054</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="" />
              <p>Hyderabad</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
