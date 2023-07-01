import NavStyled from "./NavStyled";

const Nav = () => {
  return (
    <NavStyled className="nav">
      <div className="nav__designer">
        <a>About me</a>
        <a>UX Designer</a>
      </div>
      <div className="nav__developer">
        <a>Developer</a>
        <a>Say Hi!</a>
      </div>
    </NavStyled>
  );
};

export default Nav;
