import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import LandingPageStyled from "./LandingPageStyled";

const LandingPage = (): React.ReactElement => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <LandingPageStyled className="page__landing" id="intro">
        <Nav />
        <img src="/images/background.webp" className="intro__background" />
        <section className="intro">
          {isMobile ? (
            <>
              <span className="intro__greeting">Hi!</span>
              <h1 className="intro__title">I'm Fede</h1>
              <h2 className="intro__subtitle__mobile">a fullstack</h2>
              <h2 className="intro__subtitle__mobile">
                <strong>developer</strong> and
              </h2>
              <h2 className="intro__subtitle__mobile__light">UX Designer</h2>
            </>
          ) : (
            <>
              <span className="intro__greeting">Hi!</span>
              <h1 className="intro__title">I'm Fede</h1>
            </>
          )}
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
        <div className="intro__separator"></div>
      </LandingPageStyled>
    </>
  );
};

export default LandingPage;
