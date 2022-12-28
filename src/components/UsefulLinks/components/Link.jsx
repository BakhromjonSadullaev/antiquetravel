import React from "react";
import style from "./Link.module.scss";

const Link = ({ icon, title, link }) => {
  return (
    <a href={link} className={style.body}>
      <div className={style.container}>
        {icon}
        <h3>{title}</h3>
      </div>
    </a>
  );
};

export default Link;
