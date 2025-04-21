import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import RelationshipSection from "../components/RelationshipSection";
import CertificateSection from "../components/CertificateSection";
import VissionMissionGoal from "../components/common/VissionMissionGoal";
import AboutVacuumLifter from "../components/AboutVacuumLifter";
import SupportSection from "../components/common/SupportSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";




function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"ABOUT US"} />
      <RelationshipSection/>
      <CertificateSection/>
      <VissionMissionGoal/>
      <AboutVacuumLifter/>
      <SupportSection/>
      <WhyChooseUsSection/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default AboutPage;
