import { styled } from "styled-components";

const LandingPageStyled = styled.main`
  background-image: url("/images/background.webp");
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "nav nav"
    "intro intro"
    "designer developer"
    "designer developer";

  .nav {
    grid-area: nav;
  }

  .designer {
    grid-area: designer;
  }

  .developer {
    grid-area: developer;
  }

  .intro {
    display: flex;
    grid-area: intro;
    width: 100vw;
    top: 180px;
    align-items: center;
    flex-direction: column;

    &__greeting {
      color: ${(props) => props.theme.colors.lightPink};
      font-size: 50px;
      font-family: ${(props) => props.theme.fonts.titleStyled};
      font-weight: 400;
      margin-bottom: -20px;
    }

    &__title {
      color: ${(props) => props.theme.colors.darkPink};
      font-size: 80px;
      font-family: ${(props) => props.theme.fonts.title};
      font-weight: 400;
    }

    &__subtitle {
      color: ${(props) => props.theme.colors.lightGrey};
      font-size: 20px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-weight: 400;
    }
  }

  .designer__container,
  .developer__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .designer {
    width: 50vw;
    background-size: cover;

    &__title {
      color: ${(props) => props.theme.colors.lightPink};
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
      color: ${(props) => props.theme.colors.lightPink};
      padding: 10px;
    }
  }

  .developer {
    width: 50vw;
    background-size: cover;

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
    }
  }

  .separator {
    position: absolute;
    bottom: 0;
    width: 100vw;
    height: 20px;
    background-color: ${(props) => props.theme.colors.aqua};
  }

  .picture {
    width: 30vw;
    bottom: 0;
    position: absolute;

    &__right {
      right: 0;
    }

    &__left {
      left: 0;
    }
  }
`;

export default LandingPageStyled;
