import promos from "../../helpers/promos";
import Promo from "../Promo/Promo";
import style from "./PromoList.module.css";

const PromoList = () => {
  return (
    <div className={style.contenedor}>
      {promos.map((promo) => (
        <Promo key={promo.id} promo={promo} />
      ))}
    </div>
  );
};

export default PromoList;
