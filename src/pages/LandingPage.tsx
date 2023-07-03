import React from "react";
import Nav from "../components/Nav/Nav";
import LandingPageStyled from "./LandingPageStyled";

const LandingPage = (): React.ReactElement => {
  return (
    <>
      <LandingPageStyled className="page">
        <Nav />
        <section className="intro">
          <span className="intro__greeting">Hi!</span>
          <h1 className="intro__title">I'm Fede</h1>
          <h2 className="intro__subtitle">and here's what I do</h2>
        </section>
        <section className="designer">
          <article className="designer__container">
            <h3 className="designer__title">UX Designer</h3>
            <ul className="designer__list">
              <li>Figma</li>
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Certified by Google</li>
              <li>Accesibility</li>
              <li>...</li>
            </ul>
          </article>
          <img className="picture picture__left" src="/images/left.png"></img>
        </section>
        <section className="developer">
          <article className="developer__container">
            <h3 className="developer__title">{"<coder/>"}</h3>
            <ul className="developer__list">
              <li>Typescript</li>
              <li>React</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>Styled Components</li>
              <li>...</li>
            </ul>
          </article>
          <img className="picture picture__right" src="/images/right.png"></img>
        </section>
        <div className="separator"></div>
      </LandingPageStyled>
    </>
  );
};

export default LandingPage;
