import { styled } from "styled-components";

const SayHiPagedStyled = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #fff;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
  padding-bottom: 100px;
  border-bottom: 20px solid ${(props) => props.theme.colors.darkPink};

  .hi {
    &__title {
      color: ${(props) => props.theme.colors.aqua};
      text-align: center;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 110px;
      font-style: normal;
      font-weight: 400;
      text-transform: uppercase;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 75px;
      }
    }

    &__subtitle {
      color: ${(props) => props.theme.colors.aqua};
      text-align: center;
      font-family: ${(props) => props.theme.fonts.primary};
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      text-transform: uppercase;
    }

    &__buttons {
      display: flex;
      gap: 20px;
      padding: 30px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-wrap: wrap;
        justify-content: center;
      }
    }

    &__button {
      display: inline-flex;
      min-width: 100px;
      padding: 15px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border-radius: 10px;
      border: none;
      background: ${(props) => props.theme.colors.lightPink};
      color: #fff;
      text-transform: uppercase;

      &:hover {
        background-color: ${(props) => props.theme.colors.darkPink};
        transition: 0.2s ease-in-out;
      }
    }

    &__about {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 0px;
      background-color: #f3f3f3;
      border-radius: 10px 10px 0 0;
      box-shadow: rgb(0 0 0 / 26%) 0px -25px 20px -20px;
      border: 1px solid ${(props) => props.theme.colors.darkPink};

      &__title {
        padding-top: 30px;
        color: ${(props) => props.theme.colors.darkPink};
        font-size: 25px;
      }

      &__subtitle {
        color: ${(props) => props.theme.colors.darkPink};
        font-size: 18px;
        font-weight: 200;
      }

      &__button {
        background: ${(props) => props.theme.colors.darkPink};
        color: #fff;
      }
    }
  }
`;

export default SayHiPagedStyled;
