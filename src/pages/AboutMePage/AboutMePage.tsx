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
          <img src="/images/time.svg" />
          How much time you have to know me?
        </h4>
        <div className="about__time__buttons">
          <button
            className="about__time__button less"
            onClick={handleLessButtonClick}
          >
            Not much
          </button>
          <button
            className="about__time__button more"
            onClick={handleMoreButtonClick}
            defaultChecked
          >
            I want to know everything!
          </button>
        </div>
        {showLessText ? (
          <p className="about__time__text about__time__text__less">
            Hello! I'm Fede, a UX Designer and Fullstack Developer. With a
            passion for design, I enjoy creating intuitive and engaging digital
            experiences. My extensive knowledge in web development allows me to
            create functional solutions from sketch to front-end to back-end.
            Throughout my extensive teaching experience, I have developed
            effective communication skills and empathy, enabling me to
            understand the needs and priorities of users. My approach and
            ability to combine aesthetics and functionality make me a unique and
            versatile profile in the world of design and development.
          </p>
        ) : (
          <>
            <p className="about__time__text about__time__text__more">
              Hello! I'm Fede, a UX Designer and Fullstack Developer. With a
              passion for design, I enjoy creating intuitive and engaging
              digital experiences. My extensive knowledge in web development
              allows me to create functional solutions from sketch to front-end
              to back-end.
            </p>
            <p className="about__time__text__more">
              Throughout my extensive teaching experience, I have developed
              effective communication skills and empathy, enabling me to
              understand the needs and priorities of users. My approach and
              ability to combine aesthetics and functionality make me a unique
              and versatile profile in the world of design and development. I
              believe that good design goes beyond aesthetics; it should also
              enhance usability and solve real problems.
            </p>
            <p className="about__time__text__more">
              By conducting user research and gathering feedback, I strive to
              create designs that not only look visually appealing but also
              provide seamless interactions and delightful experiences. My
              expertise in user interface design and prototyping allows me to
              iterate quickly and efficiently, ensuring that the final product
              meets the expectations of both users and stakeholders. In addition
              to my technical skills, I am a strong advocate for collaboration
              and teamwork.
            </p>
            <p className="about__time__text__more">
              I thrive in environments where diverse perspectives come together
              to create innovative solutions. Working closely with
              cross-functional teams, I have honed my ability to listen,
              empathize, and effectively communicate complex ideas. This
              collaborative approach enables me to align business goals with
              user needs, ultimately driving successful outcomes.
            </p>
            <p className="about__time__text__more">
              As a lifelong learner, I am always eager to stay up-to-date with
              the latest design and development trends. Whether it's attending
              conferences, participating in online courses, or engaging in
              professional communities, I continuously seek opportunities to
              expand my knowledge and skills. This dedication to growth allows
              me to adapt to evolving technologies and embrace new design
              methodologies, ensuring that my work remains at the forefront of
              industry standards. In conclusion,
            </p>
            <p className="about__time__text__more">
              I am passionate about creating meaningful experiences that make a
              positive impact on users' lives. With my combined expertise in UX
              design and full-stack development, along with my strong
              communication and collaboration skills, I am confident in my
              ability to contribute to any project or team. I am excited to take
              on new challenges, push boundaries, and continue crafting
              exceptional digital solutions that captivate and delight users.
            </p>
          </>
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
    </AboutMePageStyled>
  );
};

export default AboutMePage;
