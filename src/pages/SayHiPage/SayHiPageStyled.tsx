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
  background-image: url("/images/hi_background.webp");

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

      &__hand {
        cursor: pointer;
        &:hover {
          animation: wobble-hor-bottom 0.8s 0.2s both;
        }
      }

      &__container {
        display: flex;
        gap: 10px;
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
      align-items: center;
      justify-content: center;
      position: absolute;
      gap: 20px;
      bottom: 0px;
      width: 100%;
      border-radius: 30px 30px 0 0;

      background: rgba(255, 255, 255, 0.39);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(9px);
      border: 1px solid rgba(255, 255, 255, 0.23);

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        flex-direction: column;
        padding-top: 40px;
        gap: 10px;
      }

      &__subtitle {
        color: ${(props) => props.theme.colors.darkPink};
        font-size: 24px;
        font-weight: 200;
      }

      &__button {
        background: ${(props) => props.theme.colors.darkPink};
        color: #fff;

        &:hover {
          background: ${(props) => props.theme.colors.lightPink};
          transition: 0.4s;
        }
      }
    }
  }

  @keyframes wobble-hor-bottom {
    0%,
    100% {
      transform: translateX(0%);
      transform-origin: 50% 50%;
    }
    15% {
      transform: translateX(-30px) rotate(-6deg);
    }
    30% {
      transform: translateX(15px) rotate(6deg);
    }
    45% {
      transform: translateX(-15px) rotate(-3.6deg);
    }
    60% {
      transform: translateX(9px) rotate(2.4deg);
    }
    75% {
      transform: translateX(-6px) rotate(-1.2deg);
    }
  }
`;

export default SayHiPagedStyled;
