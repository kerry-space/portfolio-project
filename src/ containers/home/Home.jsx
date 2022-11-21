import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home__text-wrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform: "translateX(800px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h1>
            Hello, I'm Kerry
            <br />
            Full Stack Blockchain Developer.
          </h1>
        </Animate>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <Link to="about">About Me</Link>
            <Link to="#">Download App</Link>
          </div>
          <div className="contact-me__socials-wrapper">
            <Link to="">
              <FaLinkedin size={32} />
            </Link>
            <Link to="">
              <FaFacebook size={32} />
            </Link>
            <Link to="">
              <FaTwitter size={32} />
            </Link>
            <Link to="">
              <FaInstagram size={32} />
            </Link>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
