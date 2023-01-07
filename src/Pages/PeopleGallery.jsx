import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";

const PeopleGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/351/1ed/thumb_1061_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b24/ec5/thumb_408_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/4d6/thumb_413_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/c69/4eb/thumb_1118_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5f2/28d/1b2/thumb_1226_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b24/d6c/thumb_407_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/60a/232/f78/thumb_1698_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/c6b/b5e/thumb_1120_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b24/ffe/thumb_409_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5f1/97a/904/thumb_1216_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/62c/f59/thumb_901_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/26b/thumb_411_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/26b/thumb_411_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b25/3be/thumb_412_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/f56/f24/thumb_925_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/c67/f24/thumb_1116_600_0_0_0_auto.jpg",
    },
  ];
  return (
    <div>
      <div>
        <Header />
        <Nav1 />
        <GalleryViewer photos={photos} />
        <Footer />
      </div>
    </div>
  );
};

export default PeopleGallery;
