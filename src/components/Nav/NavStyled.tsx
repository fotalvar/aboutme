import { styled } from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  width: 100vw;
  justify-content: center;
  align-self: center;
  flex-wrap: wrap;
  height: 120px;
  align-content: center;

  label .menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80px;
    height: 75px;
    -webkit-transition: 0.5s ease-in-out;
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
    width: 100vw;
    height: 60vh;
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
  }

  label ul {
    z-index: 3;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 250px;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: 0.15s 0.2s ease-in-out;
  }

  label a {
    margin-bottom: 3rem;
    display: block;
    color: #fff;
    text-decoration: none;
    font-size: 30px;
  }
`;

export default NavStyled;
