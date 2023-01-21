import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import GalleryViewer from "../components/GalleryViewer/GalleryViewer";
import Nav1 from "../components/Nav1/Nav1";
const GreenGallery = () => {
  const photos = [
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/b5f/thumb_374_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/c88/thumb_375_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/c8f/52f/thumb_1495_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ec/4d9/027/thumb_866_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/dda/thumb_376_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5f1/154/96d/thumb_1190_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/896/5a8/thumb_1454_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/603/78d/ac1/thumb_1582_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b19/f82/thumb_377_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/0aa/thumb_378_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/1da/thumb_379_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e5/378/7f2/thumb_106_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5ee/9ac/ed0/thumb_1085_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/898/aed/thumb_1456_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fe/1ca/110/thumb_1499_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/388/thumb_380_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/8ad/295/thumb_1469_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5fd/8a3/0d1/thumb_1462_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/97c/thumb_384_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/b33/thumb_385_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e6/b1a/c8e/thumb_386_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e4/f70/b0d/thumb_49_600_0_0_0_auto.jpg",
    },
    {
      src: "https://uzbekistan.travel/storage/app/uploads/public/5e5/378/ebe/thumb_108_600_0_0_0_auto.jpg",
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

export default GreenGallery;
