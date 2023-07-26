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
            <p className="portfolio__item__description">
              Teams Impact provides you an intuitive and user-friendly interface
              for managing your teams. Whether you are planning your next domain
              run or strategizing for an Abyss floor, this app will assist you
              in organizing your characters effectively.
            </p>
            <span className="portfolio__item__tags">
              UI - UX - frontend - backend
            </span>
          </section>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_aboutme.webp"
          />
          <section className="portfolio__info">
            <h3 className="portfolio__item__title">About Me</h3>
            <p className="portfolio__item__description">
              Teams Impact provides you an intuitive and user-friendly interface
              for managing your teams. Whether you are planning your next domain
              run or strategizing for an Abyss floor, this app will assist you
              in organizing your characters effectively.
            </p>
            <span className="portfolio__item__tags">
              UI - UX - frontend - backend
            </span>
          </section>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_pokemon.webp"
          />
          <section className="portfolio__info">
            <h3 className="portfolio__item__title">Pokemon DEX+</h3>
            <p className="portfolio__item__description">
              Teams Impact provides you an intuitive and user-friendly interface
              for managing your teams. Whether you are planning your next domain
              run or strategizing for an Abyss floor, this app will assist you
              in organizing your characters effectively.
            </p>
            <span className="portfolio__item__tags">
              UI - UX - frontend - backend
            </span>
          </section>
        </li>
      </ul>
      <section className="portfolio__stack">
        <h2>Stack</h2>
        <img
          className="portfolio__stack__image"
          src="/images/portfolio/portfolio_stack.webp"
        />
      </section>
    </PortfolioPageStyled>
  );
};

export default PortfolioPage;
