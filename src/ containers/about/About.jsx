import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiSass,
  DiReact,
  DiGit,
  DiFirebase,
  DiDatabase,
  DiMongodb,
  DiMysql,
  DiAtom,
  DiNodejs,
  DiNpm,
  DiBootstrap,
  DiCode,
  DiLinux,
} from "react-icons/di";
import { FaDev, FaBitcoin, FaEthereum } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">
              Full Stack Java Developer
            </h3>
            <p>
            I would like to introduce myself Kerry Jalal, I am a talented software engineer specializing in Java full-stack development. I am a highly motivated individual who wakes up each day with a passion for exploring new ideas and possibilities.<br/><br/>
            I am a type of person who has a natural curiosity for exploring the world, space, and human development. I am an individual who believes in the potential of sustainable energy, the Internet, artificial intelligence, and multiplanetary design of life to create a better future for all of us.
            I am committed to my field of software technology and am always learning and updating myself with the latest technologies. I am also a creative thinker and am  developing several SaaS ideas in my field.<br/><br/>
            In addition to my work in software engineering, I have set my sights on a larger goal, starting a space company one day. Am also very passionate about exploring the unknown, pushing the boundaries of technology, and contributing to humanity's future.<br/>
            Overall, I am a driven individual who is passionate about making a difference in the world. My dedication to sustainable energy, technology, and human development makes me a valuable asset to any team i  works with.  
            make better

            </p>
          </Animate>

          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalContent">Personal Information</h3>
            <ul>
              {personalData.map((item, key) => (
                <li key={key}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>

        <div className="about__content__servicesWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <FaDev size={30} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiJavascript
                  size={30}
                  color="var(--selected-theme-main-color"
                />
              </div>
              <div>
                <DiHtml5 size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiCss3 size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiSass size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiReact size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiNodejs size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiNpm size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiCode size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiGit size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiDatabase size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiFirebase size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiLinux size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiMongodb size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <DiMysql size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <FaBitcoin size={45} color="var(--selected-theme-main-color" />
              </div>
              <div>
                <FaEthereum size={45} color="var(--selected-theme-main-color" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
