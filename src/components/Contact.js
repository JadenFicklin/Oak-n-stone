import React, { useState } from "react";
import "../styles/Contacts.css";

function Contact() {
  const [topLine, setTopLine] = useState(false);
  const [bottomLine, setBottomLine] = useState(false);

  const [lineOne, setLineOne] = useState(false);
  const [lineTwo, setLineTwo] = useState(false);
  const [lineThree, setLineThree] = useState(false);
  const [lineFour, setLineFour] = useState(false);

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

  return (
    <div className="contact-outer">
      <div className="contact-inner">
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
          <div className="contact-inner-box-left">
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
          <div className="contact-inner-box-right">
            <div className="map-box-outer"></div>
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
