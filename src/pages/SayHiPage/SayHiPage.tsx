import SayHiPagedStyled from "./SayHiPageStyled";

const SayHiPage = (): React.ReactElement => {
  return (
    <SayHiPagedStyled className="hi" id="hi">
      <section className="hi__title__container">
        <h3 className="hi__title hi__title__hand">👋 </h3>
        <h3 className="hi__title">
          Say <strong>Hi</strong>
        </h3>
      </section>
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
        <a
          className="hi__button"
          href="/documents/Fede Otalvares - CV - English.pdf"
          target="_blank"
        >
          <img src="/images/icons/cv.svg" alt="linkedin icon" />
          Curriculum
        </a>
      </div>
      <section className="hi__about">
        <h5 className="hi__about__subtitle">
          Check out this website <strong>code</strong> & <strong>design</strong>
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
          <a
            className="hi__button hi__about__button"
            href="https://www.figma.com/file/svQ6d3iwtaYJdv0XQIrvxM/My-Site?type=design&node-id=0%3A1&mode=design&t=GDsaRtk4d6rIfMXj-1"
          >
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
