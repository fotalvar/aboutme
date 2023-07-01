import { styled } from "styled-components";

const NavStyled = styled.nav`
  top: 80px;
  position: absolute;
  display: flex;
  width: 100vw;
  justify-content: center;

  .nav {
    &__developer,
    &__designer {
      width: 400px;
      height: 75px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      color: white;
    }

    &__designer {
      border-radius: 70px 0px 0px 50px;
      background: ${(props) => props.theme.colors.lightPink};
    }

    &__developer {
      border-radius: 0px 70px 50px 0px;
      background: ${(props) => props.theme.colors.darkPink};
    }
  }
`;

export default NavStyled;
