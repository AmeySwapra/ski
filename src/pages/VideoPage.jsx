import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import VideoGallery from "../components/VideoGallery";


function VideoPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"VIDEOS GALLERY"} />
      <VideoGallery/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default VideoPage;
