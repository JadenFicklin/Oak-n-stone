import React, { useState } from "react";
import "../styles/Landing.css";

function Landing() {
  // letters
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);
  const [seven, setSeven] = useState(false);
  const [eight, setEight] = useState(false);
  const [nine, setNine] = useState(false);
  const [ten, setTen] = useState(false);
  const [eleven, setEleven] = useState(false);
  const [twelve, setTwelve] = useState(false);
  const [thirteen, setThirteen] = useState(false);
  const [fourteen, setFourteen] = useState(false);
  const [fifteen, setFifteen] = useState(false);
  const [sixteen, setSixteen] = useState(false);
  const [seventeen, setSeventeen] = useState(false);
  const [eighteen, setEighteen] = useState(false);
  const [nineteen, setNineteen] = useState(false);
  const [twenty, setTwenty] = useState(false);
  const [twentyone, setTwentyone] = useState(false);
  const [twentytwo, setTwentytwo] = useState(false);
  const [twentythree, setTwentythree] = useState(false);
  const [twentyfour, setTwentyfour] = useState(false);
  const [twentyfive, setTwentyfive] = useState(false);
  const [twentysix, setTwentysix] = useState(false);
  const [twentyseven, setTwentyseven] = useState(false);
  const [twentyeight, setTwentyeight] = useState(false);
  const [twentynine, setTwentynine] = useState(false);
  const [thirty, setThirty] = useState(false);

  const [thirtyone, setThirtyone] = useState(false);
  const [thirtytwo, setThirtytwo] = useState(false);
  const [thirtythree, setThirtythree] = useState(false);
  const [thirtyfour, setThirtyfour] = useState(false);

  const [button, setButton] = useState(false);

  const [thirtyfive, setThirtyfive] = useState(false);

  // lines
  const [thirtysix, setThirtysix] = useState(false);
  const [thirtyseven, setThirtyseven] = useState(false);
  const [thirtyeight, setThirtyeight] = useState(false);
  const [thirtynine, setThirtynine] = useState(false);
  const [fourty, setFourty] = useState(false);
  const [fourtyone, setFourtyone] = useState(false);
  const [fourtytwo, setFourtytwo] = useState(false);

  setTimeout(() => {
    setOne(true);
  }, 1600);
  setTimeout(() => {
    setTwo(true);
  }, 1500);
  setTimeout(() => {
    setThree(true);
  }, 1400);
  setTimeout(() => {
    setFour(true);
  }, 1300);
  setTimeout(() => {
    setFive(true);
  }, 1200);
  setTimeout(() => {
    setSix(true);
  }, 1100);
  setTimeout(() => {
    setSeven(true);
  }, 1000);
  setTimeout(() => {
    setEight(true);
  }, 900);
  setTimeout(() => {
    setNine(true);
  }, 800);
  setTimeout(() => {
    setTen(true);
  }, 900);
  setTimeout(() => {
    setEleven(true);
  }, 1000);
  setTimeout(() => {
    setTwelve(true);
  }, 1100);
  setTimeout(() => {
    setThirteen(true);
  }, 1200);
  setTimeout(() => {
    setFourteen(true);
  }, 1800);
  setTimeout(() => {
    setFifteen(true);
  }, 1700);
  setTimeout(() => {
    setSixteen(true);
  }, 1600);
  setTimeout(() => {
    setSeventeen(true);
  }, 1500);
  setTimeout(() => {
    setEighteen(true);
  }, 1400);
  setTimeout(() => {
    setNineteen(true);
  }, 1300);
  setTimeout(() => {
    setTwenty(true);
  }, 1200);
  setTimeout(() => {
    setTwentyone(true);
  }, 1100);
  setTimeout(() => {
    setTwentytwo(true);
  }, 1000);
  setTimeout(() => {
    setTwentythree(true);
  }, 1100);
  setTimeout(() => {
    setTwentyfour(true);
  }, 1200);
  setTimeout(() => {
    setTwentyfive(true);
  }, 1300);
  setTimeout(() => {
    setTwentysix(true);
  }, 1400);
  setTimeout(() => {
    setTwentyseven(true);
  }, 1500);
  setTimeout(() => {
    setTwentyeight(true);
  }, 1600);
  setTimeout(() => {
    setTwentynine(true);
  }, 1700);
  setTimeout(() => {
    setThirty(true);
  }, 1800);

  setTimeout(() => {
    setThirtyone(true);
  }, 2300);
  setTimeout(() => {
    setThirtytwo(true);
  }, 2400);
  setTimeout(() => {
    setThirtythree(true);
  }, 2500);
  setTimeout(() => {
    setThirtyfour(true);
  }, 2600);

  setTimeout(() => {
    setThirtyfive(true);
  }, 2600);

  setTimeout(() => {
    setThirtysix(true);
  }, 0);
  setTimeout(() => {
    setThirtyseven(true);
  }, 100);
  setTimeout(() => {
    setThirtyeight(true);
  }, 200);
  setTimeout(() => {
    setThirtynine(true);
  }, 300);
  setTimeout(() => {
    setFourty(true);
  }, 400);
  setTimeout(() => {
    setFourtyone(true);
  }, 500);
  setTimeout(() => {
    setFourtytwo(true);
  }, 600);

  return (
    <>
      <div className="landing-outer">
        <div className="landing-top">
          <div className="landing-top-inner">
            <div className="landing-top-one">
              <span className={one ? "l l-true" : "l l-false"}>A</span>
              <span className={two ? "l l-true" : "l l-false"}>R</span>
              <span className={three ? "l l-true" : "l l-false"}>C</span>
              <span className={four ? "l l-true" : "l l-false"}>H</span>
              <span className={five ? "l l-true" : "l l-false"}>I</span>
              <span className={six ? "l l-true" : "l l-false"}>T</span>
              <span className={seven ? "l l-true" : "l l-false"}>E</span>
              <span className={eight ? "l l-true" : "l l-false"}>C</span>
              <span className={nine ? "l l-true" : "l l-false"}>T</span>
              <span className={ten ? "l l-true" : "l l-false"}>U</span>
              <span className={eleven ? "l l-true" : "l l-false"}>R</span>
              <span className={twelve ? "l l-true" : "l l-false"}>A</span>
              <span className={thirteen ? "l l-true" : "l l-false"}>L</span>
            </div>
            <div className="landing-top-two">
              <span className={fourteen ? "l l-true" : "l l-false"}>A</span>
              <span className={fifteen ? "l l-true" : "l l-false"}>C</span>
              <span className={sixteen ? "l l-true" : "l l-false"}>O</span>
              <span className={seventeen ? "l l-true" : "l l-false"}>U</span>
              <span className={eighteen ? "l l-true" : "l l-false"}>S</span>
              <span className={nineteen ? "l l-true" : "l l-false"}>T</span>
              <span className={twenty ? "l l-true" : "l l-false"}>I</span>
              <span
                className={twentyone ? "l l-true space" : "l l-false space"}
              >
                C
              </span>
              <span className={twentytwo ? "l l-true" : "l l-false"}>S</span>
              <span className={twentythree ? "l l-true" : "l l-false"}>O</span>
              <span className={twentyfour ? "l l-true" : "l l-false"}>L</span>
              <span className={twentyfive ? "l l-true" : "l l-false"}>U</span>
              <span className={twentysix ? "l l-true" : "l l-false"}>T</span>
              <span className={twentyseven ? "l l-true" : "l l-false"}>I</span>
              <span className={twentyeight ? "l l-true" : "l l-false"}>O</span>
              <span className={twentynine ? "l l-true" : "l l-false"}>N</span>
              <span className={thirty ? "l l-true" : "l l-false"}>S</span>
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-left">
            <div className="landing-bottom-left-top">
              <div
                className={
                  thirtyone
                    ? "landing-bottom-left-top-inner"
                    : "landing-bottom-left-top-inner opacity"
                }
              >
                <span className="space"></span>
                We help architects sculpt sound out of space, with bespoke,
                acoustic solutions.
              </div>
            </div>
            <div className="landing-bottom-left-bottom">
              <div
                className={
                  thirtyfour
                    ? "landing-bottom-left-bottom-inner"
                    : "landing-bottom-left-bottom-inner opacity"
                }
                onMouseEnter={() => setButton(true)}
                onMouseLeave={() => setButton(false)}
              >
                <span
                  className={button ? "products-text" : "products-text-false"}
                >
                  PRODUCTS
                </span>
                <div
                  className={button ? "button-hover" : "button-hover-false"}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={
              thirtytwo
                ? "landing-bottom-middle"
                : "landing-bottom-middle opacity"
            }
          >
            BUILT TO SPEC
          </div>
          <div
            className={
              thirtythree
                ? "landing-bottom-right"
                : "landing-bottom-right opacity"
            }
          >
            INDIGENOUS OWNED SINCE. 1972
          </div>
        </div>
      </div>
      <div
        className={thirtyfive ? "landing-span-img" : "landing-span-img opacity"}
      ></div>
      <div className="landing-lines-outer">
        <div className="landing-top-lines">
          <div className="line landing-line-one"></div>
          <div
            className={
              thirtysix
                ? "line landing-line-two"
                : "line landing-line-two false-line"
            }
          ></div>
          <div
            className={
              thirtyseven
                ? "line landing-line-three"
                : "line landing-line-three false-line"
            }
          ></div>
          <div
            className={
              thirtyeight
                ? "line landing-line-four"
                : "line landing-line-four false-line"
            }
          ></div>
          <div
            className={
              thirtynine
                ? "line landing-line-five"
                : "line landing-line-five false-line"
            }
          ></div>
          <div
            className={
              fourty
                ? "line landing-line-six"
                : "line landing-line-six false-line"
            }
          ></div>
          <div
            className={
              fourtyone
                ? "line landing-line-seven"
                : "line landing-line-seven false-line"
            }
          ></div>
          <div className="line landing-line-eight"></div>
        </div>
        <div className="landing-bottom-line">
          <div
            className={
              fourtytwo
                ? "landing-bottom-line-inner"
                : "landing-bottom-line-inner false-line-horizontal"
            }
          ></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
