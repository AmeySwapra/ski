import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import GallerySection from "../components/GallerySection";



function ImagePage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"IMAGES GALLERY"} />
      <GallerySection/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default ImagePage;
