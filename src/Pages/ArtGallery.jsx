import React from "react";
import Footer from "../components/Footer/Footer";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Header from "../components/Header/Header";
import Nav1 from "../components/Nav1/Nav1";
const ArtGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/625/32c/thumb_897_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/c82/99c/thumb_1493_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/4c7/thumb_446_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/c67/f24/thumb_1116_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ef/0a8/b9a/thumb_1133_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/c82/d40/thumb_1494_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b48/a14/thumb_462_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/bb0/thumb_450_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/9c4/thumb_449_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/4d2/0de/thumb_863_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/cc7/thumb_451_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/f93/thumb_453_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/35b/12c/thumb_1063_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/7bf/677/thumb_911_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3e/521/thumb_455_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/797/c27/thumb_909_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b3b/262/thumb_445_600_0_0_0_auto.jpg",
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

export default ArtGallery;
