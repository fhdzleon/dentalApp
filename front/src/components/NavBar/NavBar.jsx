import Categories from "../Categories/Categories";
import style from "./NavBar.module.css";
import LogInButton from "../LogInButton/LogInButton";
import LogoNav from "../LogoNav/LogoNav";
import Logged from "../Logged/Logged";
import { useSelector } from "react-redux";

// eslint-disable-next-line react/prop-types
const NavBar = ({ isLanding }) => {
  const isLogged = useSelector((state) => state.user.isLogged);

  return (
    <div className={isLanding ? style.contenedorAside : style.contenedorTop}>
      <LogoNav isLanding={isLanding} />
      <Categories isLanding={isLanding} />
      {!isLogged ? (
        <LogInButton isLanding={isLanding} />
      ) : (
        <Logged isLanding={isLanding} />
      )}
    </div>
  );
};

export default NavBar;
