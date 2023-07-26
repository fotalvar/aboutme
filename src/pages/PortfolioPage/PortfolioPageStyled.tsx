import { styled } from "styled-components";

const PortfolioPageStyled = styled.section`
  position: relative;
  display: flex;
  gap: 30px;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  border-bottom: 20px solid ${(props) => props.theme.colors.darkPink};
  padding: 100px 30px 0px 30px;

  background: #f9f9f9;
  background-image: url(/images/portfolio/portfolio_background.webp);
  background-position: top;
  flex-direction: column;
  background-size: cover;

  .portfolio {
    &__title {
      color: ${(props) => props.theme.colors.lightPink};
      text-align: left;
      width: 100%;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 120px;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 50px;
      }
    }

    &__image {
      width: 60%;
      min-width: 300px;
      background-size: cover;
      object-fit: scale-down;
      border-right: 10px solid ${(props) => props.theme.colors.lightPink};

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 100%;
        border-right: none;
        border-bottom: 10px solid ${(props) => props.theme.colors.lightPink};
      }
    }

    &__info {
      max-width: 40%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 30px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        max-width: 100%;
      }
    }

    &__items {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 40px 0;
      gap: 80px;
    }

    &__item {
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 20px;
      background: #ffffff;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
        rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
      }

      &__title {
        color: ${(props) => props.theme.colors.lightPink};
        text-transform: uppercase;
        font-size: 35px;
      }

      &__tags {
        color: #2b2b2b;
        font-size: 12px;
      }
    }

    &__stack {
      background-color: #fff;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;

      &__image {
        max-width: 70%;
      }
    }
  }
`;

export default PortfolioPageStyled;
