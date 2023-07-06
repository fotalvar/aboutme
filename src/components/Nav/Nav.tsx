import NavMobile from "./NavMobile";
import NavStyled from "./NavStyled";

const Nav = () => {
  return (
    <NavStyled className="nav">
      <NavMobile />
    </NavStyled>
  );
};

export default Nav;
