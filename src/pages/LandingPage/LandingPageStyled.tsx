import { styled } from "styled-components";

const LandingPageStyled = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr 1fr;
  gap: 0px 0px;
  border-bottom: 20px solid ${(props) => props.theme.colors.aqua};
  grid-template-areas:
    "nav nav"
    "intro intro"
    "designer developer"
    "designer developer";

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-rows: 0.5fr 1.5fr 1fr;
  }

  .nav {
    grid-area: nav;
    z-index: 3;
    animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s both;
  }

  .designer {
    grid-area: designer;
    z-index: 1;
    animation: swing-in-left-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s
      both;
  }

  .developer {
    grid-area: developer;
    z-index: 1;
    animation: swing-in-right-fwd 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 1s
      both;
  }

  .intro {
    display: flex;
    grid-area: intro;
    width: 100vw;
    top: 180px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
    animation: flip-in-hor-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

    &__background {
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__greeting {
      max-width: 400px;
      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        max-width: 300px;
        padding-bottom: 50px;
      }
    }

    &__title {
      color: ${(props) => props.theme.colors.aqua};
      font-size: 100px;
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: 400;
      margin-bottom: 20px;
    }

    &__subtitle {
      color: ${(props) => props.theme.colors.lightGrey};
      font-size: 20px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 400;

      &__mobile {
        color: ${(props) => props.theme.colors.darkPink};
        font-size: 30px;
        font-weight: 200;
        font-family: ${(props) => props.theme.fonts.primary};

        &__light {
          font-size: 30px;
          color: ${(props) => props.theme.colors.lightPink};
        }
      }
    }

    &__background {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
      opacity: 30%;
    }
  }

  .designer__container,
  .developer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      display: none;
    }
  }

  .designer {
    width: 50vw;
    background-size: cover;

    &__container {
      margin-left: 20%;
    }

    &__title {
      color: ${(props) => props.theme.colors.lightPink};
      text-align: center;
      font-size: 50px;
      font-family: Outfit;
      font-weight: 500;
      bottom: 40vh;
      width: 80%;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 40px;
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 60%;
      gap: 10px;
      justify-content: center;
    }

    &__list li {
      border-radius: 50px;
      background: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      color: #d088a6;
      border: 1px solid #eedee8;
      padding: 10px;
      font-size: 14px;
    }
  }

  .developer {
    width: 50vw;
    background-size: cover;

    &__container {
      margin-right: 20%;
    }

    &__title {
      color: ${(props) => props.theme.colors.darkPink};
      text-align: center;
      font-size: 60px;
      font-family: Outfit;
      font-weight: 500;
      bottom: 40vh;
      width: 80%;
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 70%;
      gap: 10px;
      justify-content: center;
    }

    &__list li {
      border-radius: 50px;
      background: #fff;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
      padding: 10px;
      color: #aea6aa;
      border: 1px solid #e9e9e9;
      font-size: 14px;
    }
  }

  .picture {
    width: 20vw;
    bottom: 0;
    position: absolute;

    &__right {
      right: 0;
    }

    &__left {
      left: 0;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 30vw;
    }
  }

  @keyframes swing-in-left-fwd {
    0% {
      transform: rotateY(100deg);
      transform-origin: left;
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      transform-origin: left;
      opacity: 1;
    }
  }

  @keyframes swing-in-right-fwd {
    0% {
      transform: rotateY(-100deg);
      transform-origin: right;
      opacity: 0;
    }
    100% {
      transform: rotateY(0);
      transform-origin: right;
      opacity: 1;
    }
  }

  @keyframes flip-in-hor-top {
    0% {
      transform: rotateX(-80deg);
      opacity: 0;
    }
    100% {
      transform: rotateX(0);
      opacity: 1;
    }
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export default LandingPageStyled;
