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
        <video
          src="/images/background.webm"
          className="intro__background"
          autoPlay
          muted
          loop
        />
        <section className="intro">
          {isMobile ? (
            <>
              <img src="/images/greeting.svg" className="intro__greeting" />
              <h2 className="intro__subtitle__mobile">a fullstack</h2>
              <h2 className="intro__subtitle__mobile">
                <strong>Developer</strong> and
              </h2>
              <h2 className="intro__subtitle__mobile__light">UX Designer</h2>
            </>
          ) : (
            <>
              <img src="/images/greeting.svg" className="intro__greeting" />
            </>
          )}
        </section>
        <section className="designer">
          <article className="designer__container">
            <img src="/images/ux.svg" width={300} />
            <ul className="designer__list">
              <li>Figma</li>
              <li>Certified by Google</li>
              <li>Sketch</li>
              <li>Adobe XD</li>
              <li>Accesibility</li>
              <li>...</li>
            </ul>
          </article>
          <img className="picture picture__left" src="/images/left.webp"></img>
        </section>
        <section className="developer">
          <article className="developer__container">
            <h3 className="developer__title">{"<coder/>"}</h3>
            <ul className="developer__list">
              <li>Javascript</li>
              <li>Typescript</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>...</li>
            </ul>
          </article>
          <img
            className="picture picture__right"
            src="/images/right.webp"
          ></img>
        </section>
        <div className="intro__separator"></div>
      </LandingPageStyled>
    </>
  );
};

export default LandingPage;
