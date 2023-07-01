import React from "react";
import Nav from "../components/Nav/Nav";
import LandingPageStyled from "./LandingPageStyled";

const LandingPage = (): React.ReactElement => {
  return (
    <>
      <LandingPageStyled className="page">
        <Nav />
        <section className="intro">
          <span>Hi!</span>
          <h1>I'm Fede</h1>
          <h2>and here's what I do</h2>
        </section>
        <section className="designer">
          <h3>UX Designer</h3>
        </section>
        <section className="developer">
          <h3>{"<coder/>"}</h3>
        </section>
      </LandingPageStyled>
    </>
  );
};

export default LandingPage;
