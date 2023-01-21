import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Nav1 from "../components/Nav1/Nav1";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
const ArchitectureGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/89f/2bd/thumb_1461_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/a3d/ede/thumb_361_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/603/78e/1b6/thumb_1583_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b18/ac9/thumb_366_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b18/d3a/thumb_367_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/1e1/4c0/thumb_1044_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b18/e5e/thumb_368_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/8ac/be9/thumb_1468_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/627/ef6/thumb_899_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/8a7/738/thumb_1467_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/036/thumb_369_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/ca2/373/thumb_1124_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b18/5c2/thumb_364_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/4ab/thumb_372_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/5fd/thumb_373_600_0_0_0_auto.jpg",
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

export default ArchitectureGallery;
