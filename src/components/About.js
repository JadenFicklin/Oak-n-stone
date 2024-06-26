import React, { useState } from "react";
import "../styles/About.css";
import ReactPlayer from "react-player";
import vidOne from "../assets/videos/videoone.mp4";
import vidTwo from "../assets/videos/videotwo.mp4";
import { Link } from "react-router-dom";

function About() {
  const videoSrc = vidOne;
  const videoSrcTwo = vidTwo;

  const [topLine, setTopLine] = useState(false);
  const [bottomLine, setBottomLine] = useState(false);

  const [middleLine, setMiddleLine] = useState(false);

  const [fadeInOne, setFadeInOne] = useState(false);
  const [fadeInTwo, setFadeInTwo] = useState(false);
  const [fadeInThree, setFadeInThree] = useState(false);
  const [fadeInFour, setFadeInFour] = useState(false);
  const [fadeInFive, setFadeInFive] = useState(false);

  // time outs
  setTimeout(() => {
    setTopLine(true);
  }, 300);
  setTimeout(() => {
    setBottomLine(true);
  }, 400);
  setTimeout(() => {
    setMiddleLine(true);
  }, 600);
  setTimeout(() => {
    setFadeInOne(true);
  }, 800);
  setTimeout(() => {
    setFadeInTwo(true);
  }, 1000);
  setTimeout(() => {
    setFadeInThree(true);
  }, 1200);
  setTimeout(() => {
    setFadeInFour(true);
  }, 1200);
  setTimeout(() => {
    setFadeInFive(true);
  }, 1400);

  console.log(videoSrc);
  console.log(videoSrcTwo);
  return (
    <>
      <div className="about-outer">
        <div className="about-inner">
          <div
            className={fadeInTwo ? "about-video" : "about-video opacity-zero"}
          >
            <ReactPlayer
              url={videoSrc}
              playing={true}
              muted
              loop={true}
              width={"100%"}
              height={"100%"}
            />
          </div>

          <div
            className={fadeInOne ? "about-header" : "about-header opacity-zero"}
          >
            We're an experienced team you can trust
          </div>
          <Link
            to="/contact"
            className={
              fadeInFive
                ? "about-contact-button"
                : "about-contact-button opacity-zero"
            }
          >
            CONTACT
          </Link>
          <div
            className={fadeInThree ? "about-left" : "about-left opacity-zero"}
          >
            <div className="about-left-box-one">Rodney Ficklin</div>
            <div className="cover-scrollbar">
              <div className="scrollbar-cover"></div>
            </div>
            <div className="about-left-box-two">
              From building tree fort as a young man Rod has always had a
              passion for building things, in high school they offered a house
              construction class where he built a house, from that point on
              Rodney has been involved in the construction trades. He and his
              wife spent their younger years starting their family in Arizona
              and then spent 5 years back east where Rod worked in Manhattan for
              a construction management company. In the early 90s they made the
              move to the Wasatch front, where Rod grew up. Their family grew to
              eight and now six grand children. “We love it here!”
              <br></br>
              <br></br>
              They started a home building business here in the early 90s, which
              they ran for many years, when their son-in-law expressed interest
              in building they decided to start a new company focusing on custom
              kitchens and bathroom remodeling. They partnered and Oak and Stone
              was born.“This is by far the best part of my working career, I
              love going to work with my family and creating amazing creations
              for you.”
            </div>
            <div
              className={
                middleLine
                  ? "about-middle-line"
                  : "about-middle-line middle-line-false"
              }
            ></div>
          </div>
          <div
            className={fadeInFour ? "about-right" : "about-right opacity-zero"}
          >
            <div className="about-right-box-one">Nate Judkins</div>
            <div className="about-right-box-two">
              Nate always loved building things as a child. He would build
              anything from birdhouses to chicken coops, he loved all projects
              including restoring guitars. In Highschool, Nate was very involved
              in technical theater, building stage sets and platforms. After
              high school, Nate did not immediately start in the construction
              business. After serving a church mission, Nate attended school and
              became a veterinary technician. For 4 years, he worked as a vet
              tech in an equine hospital. Although his love for horses never
              changed, he found his career path changed drastically when he
              decided that joining forces with Rodney in a construction business
              would be rewarding. Nate had previously done small jobs, after
              work, with Rodney.
              <br></br>
              <br></br>
              Now with Oak and Stone started, Nate has really enjoyed learning
              the trade and gaining the skills associated with general
              construction. He and Rodney have been working together full-time
              now since 2019. Nate has a great attention to detail and is very
              forward thinking. He has so much fun working with Rod. He
              thoroughly enjoys learning and doing honest, rewarding, beautiful
              work.
            </div>
          </div>
          {/* lines */}
          <div
            className={
              topLine
                ? "about-inner-top-line"
                : "about-inner-top-line false-line"
            }
          ></div>
          <div
            className={
              bottomLine
                ? "about-inner-bottom-line"
                : "about-inner-bottom-line false-line"
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default About;
