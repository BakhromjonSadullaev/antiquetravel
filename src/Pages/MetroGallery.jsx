import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
const MetroGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b33/d1b/thumb_431_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b33/f8a/thumb_432_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/40e/thumb_435_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/56c/thumb_436_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/21a/thumb_434_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/7b7/thumb_438_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/8d9/thumb_439_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b34/a1a/thumb_440_600_0_0_0_auto.jpg",
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

export default MetroGallery;
