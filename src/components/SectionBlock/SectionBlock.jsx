import React from "react";
import Block from "./components/Block";
import style from "./SectionBlock.module.scss";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import DiamondIcon from "@mui/icons-material/Diamond";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import BusAlertIcon from "@mui/icons-material/BusAlert";

const SectionBlock = () => {
  const info = [
    {
      icon: <AutoStoriesIcon className={style.icon} />,
      title: "About Uzbekistan",
    },
    {
      icon: <DiamondIcon className={style.icon} />,
      title: "Applied Art",
    },
    {
      icon: <DarkModeIcon className={style.icon} />,
      title: "Nature and Climat",
    },
    {
      icon: <Diversity2Icon className={style.icon} />,
      title: "People",
    },
    {
      icon: <Brightness4Icon className={style.icon} />,
      title: "Culture and Tradition",
    },
    {
      icon: <AvTimerIcon className={style.icon} />,
      title: "Uzbekistan History",
    },
    {
      icon: <AssignmentIndIcon className={style.icon} />,
      title: "Visa",
    },
    {
      icon: <BusAlertIcon className={style.icon} />,
      title: "Travel Info",
    },
  ];
  return (
    <div className={style.wrapper}>
      <div className={style.sectionTitle}>
        <h1>Travel Guide</h1>
        <p>Travel to cities of the past that shape the present.</p>
      </div>
      <div className={style.body}>
        {info.map((item) => (
          <Block icon={item.icon} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default SectionBlock;
