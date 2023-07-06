const NavMobile = () => {
  return (
    <>
      <div className="nav__mobile">
        <label>
          <input type="checkbox" />
          <span className="menu">
            {" "}
            <span className="hamburger"></span>{" "}
          </span>
          <ul>
            <li>
              {" "}
              <a href="#">About me</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#about">UX Designer</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Developer</a>{" "}
            </li>
            <li>
              {" "}
              <a href="#">Say Hi !</a>{" "}
            </li>
          </ul>
        </label>
      </div>
      ;
    </>
  );
};

export default NavMobile;
