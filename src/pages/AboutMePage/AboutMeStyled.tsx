import { styled } from "styled-components";

const AboutMePageStyled = styled.section`
  position: relative;
  top: 0%;
  display: flex;
  background: #fff;
  background-image: url(/images/about_background.webp);
  background-position: center;
  flex-direction: column-reverse;
  background-size: cover;
  min-height: 100vh;
  padding: 30px;
  padding-top: 100px;
  gap: 50px;
  border-bottom: 20px solid ${(props) => props.theme.colors.lightPink};
  justify-content: flex-end;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column-reverse;
    gap: 40px;
  }

  .about {
    &__info {
      display: flex;
      gap: 40px;
      padding: 0 30px;
      flex-direction: row;
      justify-content: space-between;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        justify-content: center;
      }
    }

    &__title {
      display: flex;
      color: #41d7d9;
      text-align: left;
      font-size: 130px;
      font-family: ${(props) => props.theme.fonts.primary};
      font-style: normal;
      font-weight: 400;
      line-height: 100px;
      text-transform: uppercase;
      flex-direction: column;
      right: 40px;
      top: 80px;

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        font-size: 80px;
        line-height: 70px;
        text-align: center;
      }
    }

    &__time {
      display: flex;
      flex-direction: column;
      padding: 10px;
      transition: 0.5s linear;

      &__title {
        color: ${(props) => props.theme.colors.lightPink};
        text-align: left;
        font-family: ${(props) => props.theme.fonts.title};
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
        display: flex;
        align-items: center;
        gap: 20px;

        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }

      &__buttons {
        display: flex;
        padding: 20px 0;
        gap: 20px;

        @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          flex-direction: column;
          align-items: center;
        }
      }

      &__button {
        border-radius: 50px;
        background: #efefef;
        width: fit-content;
        height: fit-content;
        padding: 10px 20px;
        flex-shrink: 0;
        font-size: 18px;
        color: ${(props) => props.theme.colors.lightPink};
        font-family: ${(props) => props.theme.fonts.title};
        border: 1px solid ${(props) => props.theme.colors.lightPink};

        &:hover {
          background: ${(props) => props.theme.colors.lightPink};
          color: #efefef;
          border: 1px solid ${(props) => props.theme.colors.lightPink};
        }

        &:focus-visible {
          background: blue;
          color: #efefef;
          border: 1px solid ${(props) => props.theme.colors.lightPink};
        }
      }

      &__text {
        border-top: solid 1px ${(props) => props.theme.colors.lightPink};
        color: #505964;
        text-align: justify;
        font-family: ${(props) => props.theme.fonts.primary};
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;
        max-width: 100%;
        padding: 30px 0;
      }
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 15px;
      font-size: 1.5rem;
      justify-content: center;
      align-items: flex-end;

      &__item {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        display: none;
      }
    }

    &__check {
      width: 48px;
      height: 48px;
    }
  }
`;

export default AboutMePageStyled;
