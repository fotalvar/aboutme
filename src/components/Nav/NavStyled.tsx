import { styled } from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  height: 120px;
  align-content: center;

  .nav {
    &__developer,
    &__designer {
      width: 350px;
      height: 65px;
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
