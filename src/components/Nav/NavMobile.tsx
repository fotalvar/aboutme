import { useState } from "react";

const NavMobile = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleItemClick = () => {
    setIsChecked(false);
  };

  return (
    <div className="nav__mobile">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <span className="menu">
          <span className="hamburger"></span>
        </span>
        <ul>
          <li>
            <a className="nav__item" href="#intro" onClick={handleItemClick}>
              Home
            </a>
          </li>
          <li>
            <a className="nav__item" href="#about" onClick={handleItemClick}>
              About Me
            </a>
          </li>
          <li>
            <a
              className="nav__item"
              href="#portfolio"
              onClick={handleItemClick}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a className="nav__item" href="#hi" onClick={handleItemClick}>
              Say Hi !
            </a>
          </li>
        </ul>
      </label>
    </div>
  );
};

export default NavMobile;
