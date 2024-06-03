/* eslint-disable react/prop-types */

import Appoiment from "../Appoiment/Appoiment";
import style from "./AppoimentList.module.css";

const AppoimentList = ({ myTurns }) => {
  return (
    <div className={style.contenedor}>
      {myTurns.map((turn) => (
        <Appoiment key={turn.id} turn={turn} />
      ))}
    </div>
  );
};

export default AppoimentList;
