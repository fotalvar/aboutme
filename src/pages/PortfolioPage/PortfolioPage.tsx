import PortfolioPageStyled from "./PortfolioPageStyled";

const PortfolioPage = (): React.ReactElement => {
  return (
    <PortfolioPageStyled id="portfolio">
      <h2 className="portfolio__title">Portfolio</h2>
      <ul className="portfolio__items">
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
        <li className="portfolio__item">
          <img
            className="portfolio__image"
            src="/images/portfolio/portfolio_teams.webp"
          />
          <h3 className="portfolio__item__title">Teams Impact</h3>
          <span className="portfolio__item__tags">
            UI - UX - frontend - backend
          </span>
        </li>
      </ul>
    </PortfolioPageStyled>
  );
};

export default PortfolioPage;
