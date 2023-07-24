import { styled } from "styled-components";

const PortfolioPageStyled = styled.section`
  position: relative;
  display: flex;
  gap: 30px;
  background: ${(props) => props.theme.colors.lightPink};
  background-image: url(/images/portfolio/portfolio_background.webp);
  background-position: top;
  flex-direction: column;
  background-size: cover;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  border-bottom: 20px solid ${(props) => props.theme.colors.darkPink};
  padding: 100px 40px;

  .portfolio {
    &__title {
      color: ${(props) => props.theme.colors.background};
      text-align: center;
      width: 100%;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 110px;
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 50px;
      }
    }

    &__image {
      width: 100%;
      min-width: 300px;
      height: 300px;
      border-radius: 20px;
      background-size: cover;
    }

    &__items {
      width: 100%;
      display: grid;
      justify-content: space-evenly;
      grid-template-columns: repeat(auto-fill, 300px);
      grid-template-rows: 1fr 1fr;
      gap: 40px;
    }

    &__item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;

      &__title {
        color: #fff;
      }
      &__tags {
        text-align: center;
        color: #fff;
        font-size: 12px;
      }
    }
  }
`;

export default PortfolioPageStyled;
