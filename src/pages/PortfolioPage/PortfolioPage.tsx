import PortfolioPageStyled from "./PortfolioPageStyled";

const PortfolioPage = (): React.ReactElement => {
  return (
    <PortfolioPageStyled id="portfolio">
      <h2 className="portfolio__title">
        My <strong>Work</strong>
      </h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <section className="portfolio__info">
            <h3 className="portfolio__item__title">Teams Impact</h3>
            <span className="portfolio__item__tags">
              UI - UX - frontend - backend
            </span>
            <p className="portfolio__item__description">
              Teams Impact provides you an intuitive and user-friendly interface
              for managing your teams. Whether you are planning your next domain
              run or strategizing for an Abyss floor, this app will assist you
              in organizing your characters effectively.
            </p>
            <h3 className="portfolio__tags__title">Take a look</h3>
            <section className="portfolio__tags">
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Front Code
              </a>
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Back Code
              </a>
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Design
              </a>
            </section>
          </section>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_aboutme.webp"
          />
          <section className="portfolio__info">
            <h3 className="portfolio__item__title">Fede Otálvares</h3>
            <span className="portfolio__item__tags">UI - UX - frontend</span>
            <p className="portfolio__item__description">
              My website is a personal portfolio that showcases my work as a web
              developer and UX Designer. It was designed in Figma and developed
              in HTML, CSS, React, and TypeScript. The website is responsive and
              easy to use, and it features a variety of content, including my
              resume, portfolio and contact information.
            </p>
            <h3 className="portfolio__tags__title">Take a look</h3>
            <section className="portfolio__tags">
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Front Code
              </a>
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Design
              </a>
            </section>
          </section>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_pokemon.webp"
          />
          <section className="portfolio__info">
            <h3 className="portfolio__item__title">Pokemon DEX+</h3>
            <span className="portfolio__item__tags">UI - UX</span>
            <p className="portfolio__item__description">
              Pokémon Dex+ is an idea of a mobile app that allows users to
              collect, track, and trade Pokémon. The app features a sleek and
              modern design that is easy to use. Users can create their own
              profiles and add their friends, then trade Pokémon with each
              other. The app also has a built-in Pokédex that provides
              information on all Pokémon, including their stats, abilities, and
              moves. Pokémon Dex+ is a perfect app for any Pokémon fan.
            </p>
            <h3 className="portfolio__tags__title">Take a look</h3>
            <section className="portfolio__tags">
              <a
                href="http://www.google.es"
                className="portfolio__tags__button"
              >
                Design
              </a>
            </section>
          </section>
        </li>
      </ul>
      <section className="portfolio__stack">
        <h2 className="portfolio__stack__title">Stack</h2>
        <img
          className="portfolio__stack__image"
          src="/images/portfolio/portfolio_stack1.webp"
        />
        <img
          className="portfolio__stack__image"
          src="/images/portfolio/portfolio_stack2.webp"
        />
      </section>
    </PortfolioPageStyled>
  );
};

export default PortfolioPage;
