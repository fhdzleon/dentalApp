import logoSkull from "../../assets/logo.png";
import style from "./LogoNav.module.css";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const LogoNav = ({ isLanding }) => {
  return (
    <Link to="/">
      <img
        className={isLanding ? style.logoAside : style.logoTop}
        src={logoSkull}
        alt="logo"
      />
    </Link>
  );
};

export default LogoNav;
