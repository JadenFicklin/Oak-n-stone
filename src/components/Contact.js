import React, { useState, useRef } from "react";
import "../styles/Contacts.css";
import emailjs from "@emailjs/browser";
const {
  REACT_APP_EMAIL_SERVICE_ID,
  REACT_APP_EMAIL_TEMPLATE_ID,
  REACT_APP_EMAIL_PUBLIC_KEY,
} = process.env;

function Contact() {
  const [topLine, setTopLine] = useState(false);
  const [bottomLine, setBottomLine] = useState(false);

  const [lineOne, setLineOne] = useState(false);
  const [lineTwo, setLineTwo] = useState(false);
  const [lineThree, setLineThree] = useState(false);
  const [lineFour, setLineFour] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  function formatPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  }

  setTimeout(() => {
    setTopLine(true);
  }, 300);
  setTimeout(() => {
    setBottomLine(true);
  }, 400);
  setTimeout(() => {
    setLineOne(true);
  }, 600);
  setTimeout(() => {
    setLineTwo(true);
  }, 500);
  setTimeout(() => {
    setLineThree(true);
  }, 600);
  setTimeout(() => {
    setLineFour(true);
  }, 1200);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        REACT_APP_EMAIL_SERVICE_ID,
        REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          console.log("message sent");
          setInputValue("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-outer">
      <div className="contact-inner">
        {/* lines */}
        <div
          className={
            topLine
              ? "contact-inner-top-line"
              : "contact-inner-top-line false-line"
          }
        ></div>
        <div
          className={
            bottomLine
              ? "contact-inner-bottom-line"
              : "contact-inner-bottom-line false-line"
          }
        ></div>
        <div className="contact-inner-box">
          {/* left box */}
          <div className="contact-inner-box-left">
            {/* inner left box */}
            <div className="contact-inner-box-left-inner">
              {/* <div className="contact-us-header">CONTACT US</div>

              <container>
                <div className="contact-name-text">Name:</div>
                <input className="contact-us-name-input"></input>
              </container>
              <container>
                <div className="contact-email-text">Email:</div>
                <input className="contact-us-email-input"></input>
              </container>

              <container>
                <div className="contact-message-text">Message:</div>
                <textarea className="contact-us-message-input"></textarea>
              </container>

              <button className="send-email">Send Email</button> */}
              <form ref={form} onSubmit={sendEmail}>
                <label>First Name</label>
                <input type="text" name="first_name" />
                <label>Last Name</label>
                <input type="text" name="last_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="user_phone"
                  onChange={(e) => handleInput(e)}
                  value={inputValue}
                />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
              </form>
            </div>
            <div
              className={
                lineOne
                  ? "contact-inner-box-left-line-one"
                  : "contact-inner-box-left-line-one virticle-line-false"
              }
            ></div>
            <div
              className={
                lineTwo
                  ? "contact-inner-box-left-line-two"
                  : "contact-inner-box-left-line-two virticle-line-false"
              }
            ></div>
          </div>

          {/* right box */}
          <div className="contact-inner-box-right">
            {/* map box */}
            <div className="map-box-outer"></div>

            {/* info box */}
            <div className="contact-info-box-outer">
              <div
                className={
                  lineFour
                    ? "line-above-contact-info"
                    : "line-above-contact-info horizontal-line-false"
                }
              ></div>
            </div>
            <div
              className={
                lineThree
                  ? "contact-inner-box-left-line-three"
                  : "contact-inner-box-left-line-three virticle-line-false"
              }
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
