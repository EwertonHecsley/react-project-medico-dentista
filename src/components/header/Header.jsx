import { useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.scss";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <header className={s.header}>
        <section className={s.headerBoxLeft}>
          <img src="./logo.png" alt="logo de coracao" />
          <Link to="/">
            <p>Médicos & Dentistas</p>
          </Link>
        </section>

        <button
          className={`${s.hamburger} ${isOpen ? s.hamburgerOpen : ""}`}
          onClick={handleToggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <section className={s.headerBoxRigth}>
          <nav className={isOpen ? s.navOpen : ""}>
            <Link to="/">
              <p>Home</p>
            </Link>
            <Link to="/voluntario">
              <button>Seja voluntário</button>
            </Link>
          </nav>
        </section>
      </header>
      <hr />
    </>
  );
};
