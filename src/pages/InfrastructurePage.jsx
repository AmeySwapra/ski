import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import MachineGrid from "../components/MachineGrid";


function InfrastructurePage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"INFRASTRUCTURE"} />
      <MachineGrid/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default InfrastructurePage;
