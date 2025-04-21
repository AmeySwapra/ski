import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import SupportSection from "../components/common/SupportSection";


function ServicePage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"OUR SERVICES"} />
      <SupportSection/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default ServicePage;
