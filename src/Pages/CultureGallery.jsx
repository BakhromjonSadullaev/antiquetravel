import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";

const CultureGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/52c/ee3/thumb_876_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/c69/4eb/thumb_1118_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1f/56d/thumb_399_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b21/c7b/thumb_403_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1f/e87/thumb_400_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b22/414/thumb_404_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1e/9ea/thumb_398_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b20/9d9/thumb_402_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/3d6/c48/thumb_861_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b20/341/thumb_401_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/314/3d1/thumb_1053_600_0_0_0_auto.jpg",
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

export default CultureGallery;
