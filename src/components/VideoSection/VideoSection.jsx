import React from "react";
import style from "./VideoSection.module.scss";
import vid from "../../videos/vid.mp4";

const VideoSection = () => {
  return (
    <div className={style.body}>
      <video controls autoPlay>
        <source src={vid} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoSection;
