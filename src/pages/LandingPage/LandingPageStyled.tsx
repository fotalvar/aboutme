import { styled } from "styled-components";

const LandingPageStyled = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 0.5fr 1.5fr 1fr 1fr;
  gap: 0px 0px;
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
  }

  .designer {
    grid-area: designer;
    z-index: 1;
  }

  .developer {
    grid-area: developer;
    z-index: 1;
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

    &__background {
      z-index: 0;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    &__greeting {
      color: ${(props) => props.theme.colors.darkPink};
      font-size: 60px;
      font-family: ${(props) => props.theme.fonts.titleStyled};
      font-weight: 400;
      margin-bottom: -20px;
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

    &__separator {
      position: absolute;
      bottom: 0;
      width: 100vw;
      height: 20px;
      background-color: ${(props) => props.theme.colors.aqua};
      z-index: 2;
    }

    &__background {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100vh;
      object-fit: cover;
      z-index: 0;
      opacity: 60%;
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
      color: ${(props) => props.theme.colors.lightPink};
      padding: 10px;
      border: 1px solid ${(props) => props.theme.colors.lightPink};
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
      color: ${(props) => props.theme.colors.darkPink};
      padding: 10px;
      border: 1px solid ${(props) => props.theme.colors.darkPink};
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
`;

export default LandingPageStyled;
