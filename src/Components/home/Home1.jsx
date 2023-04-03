import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import Typed from "../Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../../images/profile.png";
import { CiInstagram } from "react-icons/ci";
import "./home.css";
import Social from "./Social.jsx";
import Info from "./Info.jsx";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Dimas Aditya</b>
          </h1>
          <Typed />
          <a href="#contact" className="button button--flex">
            {" "}
            See More...
            <svg
              class="button__icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            ></svg>
          </a>
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <div className="about_container container grid">
            <div className="about_data">
              <Info />
            </div>
          </div>
          <p>
            I exited to contribute to a development of a raw idea into a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>Java</b> and mainly using <b>Java Spring</b> as a backend engineer. 
            i also have some experience in <b>React js</b> to build some of my project.
            <br />I  also plan to deepen my knowledge of <b>Typescripts.js</b>, in the near future. <br />
            <br />
            Also, I like <b>graphic design</b>{" "}
            <CiInstagram style={{ transform: "scale(1.5) rotate(15deg)" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
