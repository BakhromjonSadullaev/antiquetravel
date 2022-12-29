import React from "react";
import style from "./Link.module.scss";

const Link = ({ icon, title }) => {
  return (
    <div className={style.body}>
      <div className={style.container}>
        {icon}
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default Link;
