import { styled } from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  height: 120px;
  align-content: center;
  border-top: 5px solid ${(props) => props.theme.colors.aqua};
  position: fixed;
  top: 0;

  .nav__item {
    text-shadow: 0px 3px 0px #00000012;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: 600;

    &:hover {
      color: #217778d9;
      transition: 0.2s linear;
    }
  }

  label .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80px;
    height: 75px;
    transition: 0.5s ease-in-out;
    box-shadow: 0 0 0 0 ${(props) => props.theme.colors.aqua},
      0 0 0 0 ${(props) => props.theme.colors.aqua};
    cursor: pointer;
    border-radius: 0px 0px 20px 20px;
    background: ${(props) => props.theme.colors.aqua};
  }

  label .hamburger {
    position: absolute;
    top: 35px;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 30px;
    height: 2px;
    background: #fff;
    display: block;
    transform-origin: center;
    transition: 0.5s ease-in-out;
  }

  label .hamburger:after,
  label .hamburger:before {
    transition: 0.5s ease-in-out;
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #fff;
  }

  label .hamburger:before {
    top: -10px;
  }

  label .hamburger:after {
    bottom: -10px;
  }

  label input {
    display: none;
  }

  label input:checked + .menu {
    border-radius: 0 0 30px 30px;
    backdrop-filter: blur(12.5px);
    background: rgba(65, 215, 217, 0.85);
    width: 450px;
    height: 350px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 100vw;
    }
  }

  label input:checked + .menu .hamburger {
    transform: rotate(45deg);
  }

  label input:checked + .menu .hamburger:after {
    transform: rotate(90deg);
    bottom: 0;
  }

  label input:checked + .menu .hamburger:before {
    transform: rotate(90deg);
    top: 0;
  }

  label input:checked + .menu + ul {
    opacity: 1;
    z-index: 3;
    visibility: visible;
  }

  label ul {
    z-index: 0;
    display: flex;
    flex-direction: column;
    position: fixed;
    width: 450px;
    top: 200px;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    visibility: hidden;
    transition: 0.15s 0.2s ease-in-out;
  }

  label a {
    margin-bottom: 20px;
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
  }
`;

export default NavStyled;
