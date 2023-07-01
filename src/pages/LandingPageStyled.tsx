import { styled } from "styled-components";

const LandingPageStyled = styled.main`
  display: flex;

  .intro {
    position: absolute;
    display: flex;
    width: 100vw;
    align-items: center;
    flex-direction: column;
  }

  .designer {
    width: 50vw;
    height: 100vh;
    background-color: white;
  }

  .developer {
    width: 50vw;
    height: 100vh;
    background-color: #e1e1e1;
  }
`;

export default LandingPageStyled;
