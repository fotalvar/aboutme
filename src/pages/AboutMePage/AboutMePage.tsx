import React, { useState } from "react";
import AboutMePageStyled from "./AboutMeStyled";

const AboutMePage = (): React.ReactElement => {
  const [showLessText, setShowLessText] = useState(true);

  const handleLessButtonClick = () => {
    setShowLessText(true);
  };

  const handleMoreButtonClick = () => {
    setShowLessText(false);
  };

  return (
    <AboutMePageStyled className="about" id="about">
      <section className="about__time">
        <h4 className="about__time__title">
          How much time you have to know me?
        </h4>
        <div className="about__time__buttons">
          <button
            className="about__time__button less"
            onClick={handleLessButtonClick}
          >
            {" "}
            Not much
          </button>
          <button
            className="about__time__button more"
            onClick={handleMoreButtonClick}
          >
            I want to know everithing!
          </button>
        </div>
        {showLessText ? (
          <p className="about__time__text less__text">
            As a web developer and UX designer, my background as a secondary
            education teacher sets me apart. Combining my skills in crafting
            engaging user experiences and understanding diverse learners, I
            create websites that prioritize accessibility and usability. My
            unique blend of expertise ensures a fresh and seamless fusion of
            creativity and functionality.
          </p>
        ) : (
          <p className="about__time__text more__text">
            As a web developer and UX designer, my background as a secondary
            education teacher sets me apart. Combining my skills in crafting
            engaging user experiences and understanding diverse learners, I
            create websites that prioritize accessibility and usability. My
            unique blend of expertise ensures a fresh and seamless fusion of
            creativity and functionality. As a web developer and UX designer, my
            background as a secondary education teacher sets me apart. Combining
            my skills in crafting engaging user experiences and understanding
            diverse learners, I create websites that prioritize accessibility
            and usability. My unique blend of expertise ensures a fresh and
            seamless fusion of creativity and functionality.
          </p>
        )}
      </section>
      <section className="about__info">
        <h3 className="about__title">
          About <strong>Me</strong>
        </h3>
        <ul className="about__list">
          <li className="about__list__item">
            Full stack developer
            <img src="/images/check_dev.svg" className="about__check" />
          </li>
          <li className="about__list__item">
            UX Designer
            <img src="/images/check_ux.svg" className="about__check" />
          </li>
          <li className="about__list__item">
            Teacher
            <img src="/images/check_teacher.svg" className="about__check" />
          </li>
        </ul>
      </section>
      <div className="about__separator"></div>
    </AboutMePageStyled>
  );
};

export default AboutMePage;
