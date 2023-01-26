import React from "react";
import "./index.scss";
import image from "../../assets/images/undraw_youtube_tutorial.svg";
import image2 from "../../assets/images/undraw_teaching.svg";
import TeachersCard from "../../components/card-teachers";
import { Helmet } from "react-helmet";
const HomePage = () => {
  return (
    <div id="home">
      <Helmet>
        <meta charSet="utf-8" />
        <title>One School</title>
      </Helmet>
      <section id="first">
        <div className="container">
          <div className="first">
            <div className="aboutt">
              <div className="left">
                <h1>Learn From The Expert</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Maxime <br /> ipsa nulla sed quis rerum amet natus quas
                  necessitatibus.
                </p>
                <button>ADDMISSION NOW</button>
              </div>
              <div className="form">
                <form action="">
                  <h2>Sign Up</h2>
                  <div className="input">
                    <input placeholder="Email Addresss" type="text" />
                  </div>
                  <div className="input">
                    <input placeholder="Password" type="text" />
                  </div>
                  <div className="input">
                    <input placeholder="Re-type Password" type="text" />
                  </div>
                  <div className="btn">
                    <button>SIGN UP</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="programs">
        <div className="container">
          <div className="programs">
            <h1>Our Programs</h1>
            <p className="lorem">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              repellat aut <br /> neque! Doloribus sunt non aut reiciendis, vel
              recusandae obcaecati hic dicta <br /> repudiandae in quas
              quibusdam ullam, illum sed veniam!
            </p>
            <div className="program">
              <div className="img">
                <img src={image} alt="" />
              </div>
              <div className="text">
                <h2>We Are Excellent In Education</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                  maxime nam porro possimus fugiat quo molestiae illo.
                </p>
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fa-solid fa-graduation-cap"></i>
                    </div>
                    22,931 Yearly Graduates
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fa-sharp fa-solid fa-building-columns"></i>
                    </div>
                    150 Universities Worldwide
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="teacher">
        <div className="container">
          <div className="teacher">
            <div className="text">
              <h2>Strive for Excellent</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                maxime nam porro possimus fugiat quo molestiae illo.
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <i className="fa-solid fa-graduation-cap"></i>
                  </div>
                  22,931 Yearly Graduates
                </li>
                <li>
                  <div className="icon">
                    <i className="fa-sharp fa-solid fa-building-columns"></i>
                  </div>
                  150 Universities Worldwide
                </li>
              </ul>
            </div>
            <div className="img">
              <img src={image2} alt="" />
            </div>
          </div>
        </div>
      </section>
      <TeachersCard />
    </div>
  );
};

export default HomePage;
