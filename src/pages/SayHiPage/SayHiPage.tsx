import SayHiPagedStyled from "./SayHiPageStyled";

const SayHiPage = (): React.ReactElement => {
  return (
    <SayHiPagedStyled className="hi" id="hi">
      <h3 className="hi__title">
        👋 Say <strong>Hi</strong>
      </h3>
      <h4 className="hi__subtitle">contact with me anytime</h4>
      <div className="hi__buttons">
        <a className="hi__button" href="mailto:fnotalvares@gmail.com">
          <img src="/images/icons/email.svg" alt="email icon" />
          Email
        </a>
        <a
          className="hi__button"
          href="https://www.linkedin.com/in/fedeotalvares-ux-dev/"
          target="_blank"
        >
          <img src="/images/icons/linkedin.svg" alt="linkedin icon" />
          LinkedIn
        </a>
      </div>
      <section className="hi__about">
        <h4 className="hi__about__title"> About this WebSite</h4>
        <h5 className="hi__about__subtitle">
          check out my <strong>code</strong> & <strong>design</strong>
        </h5>
        <div className="hi__buttons">
          <a
            className="hi__button hi__about__button"
            href="https://github.com/fotalvar/aboutme"
            target="_blank"
          >
            <img src="/images/icons/github.svg" alt="github icon" />
            GitHub
          </a>
          <a className="hi__button hi__about__button">
            <img src="/images/icons/figma.svg" alt="figma icon" />
            Figma
          </a>
        </div>
      </section>
      <div className="hi__separator"></div>
    </SayHiPagedStyled>
  );
};

export default SayHiPage;
