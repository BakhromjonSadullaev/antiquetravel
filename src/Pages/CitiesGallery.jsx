import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
import goroda1 from "../images/goroda1.jpg";
import goroda2 from "../images/goroda2.jpg";
import goroda3 from "../images/goroda3.jpg";
import goroda4 from "../images/goroda4.jpg";
import goroda5 from "../images/goroda5.jpg";
import goroda6 from "../images/goroda6.jpg";
import goroda7 from "../images/goroda7.jpg";
import goroda8 from "../images/goroda8.jpg";
import goroda9 from "../images/goroda9.jpg";
import goroda10 from "../images/goroda10.jpg";
import goroda11 from "../images/goroda11.jpg";
import goroda12 from "../images/goroda12.jpg";
import goroda13 from "../images/goroda13.jpg";
const CitiesGallery = () => {
  const photos = [
    {
      src: goroda1,
    },
    {
      src: goroda2,
    },
    {
      src: goroda3,
    },
    {
      src: goroda4,
    },
    {
      src: goroda5,
    },
    {
      src: goroda6,
    },
    {
      src: goroda7,
    },
    {
      src: goroda8,
    },
    {
      src: goroda9,
    },
    {
      src: goroda10,
    },
    {
      src: goroda11,
    },
    {
      src: goroda12,
    },
    {
      src: goroda13,
    },
  ];
  return (
    <div>
      <Header />
      <Nav1 />
      <GalleryViewer photos={photos} />
      <Footer />
    </div>
  );
};

export default CitiesGallery;
