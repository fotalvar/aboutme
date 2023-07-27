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
  padding: 100px 40px 0px 40px;

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
      max-height: 100%;
      object-fit: cover;
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
      justify-content: center;
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
        color: #9098a2;
        font-size: 12px;
        font-style: italic;
      }
    }

    &__tags {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;

      &__title {
        width: 100%;
        margin-top: 20px;
        text-align: left;
      }

      &__button {
        padding: 10px 20px;
        border-radius: 20px;
        background-color: ${(props) => props.theme.colors.lightPink};
        color: #fff;
        font-size: 14px;

        &:hover {
          transition: 1s;
          background-color: ${(props) => props.theme.colors.darkPink};
        }
      }
    }

    &__stack {
      background-color: #fff;
      width: 100vw;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px 0;

      &__title {
        padding: 0 30px;
        text-transform: uppercase;
      }

      &__image {
        max-width: 30%;
        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          max-width: 80%;
        }
      }

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
        gap: 20px;
      }
    }
  }
`;

export default PortfolioPageStyled;
