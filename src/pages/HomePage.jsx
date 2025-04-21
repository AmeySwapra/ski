import React from "react";
import Footer from "../components/common/Footer";
import Brochure from "../components/common/Brochure";
import ClientsSlider from "../components/ClientsSlider";
import TestimonialsSection from "../components/TestimonialsSection";
import ContentSection from "../components/ContentSection";
import ProductSection from "../components/common/ProductSection";
import AboutUs from "../components/AboutUs";
import VisionMissionGoal from "../components/common/VissionMissionGoal";
import VacuumLifterNote from "../components/VacuumLifterNote";
import Navbar from "../components/common/Navbar";
import CommonProducts from "../components/common/CommonProducts";


function HomePage() {
  return (
    <>
       <Navbar/>
      <VacuumLifterNote />
      <VisionMissionGoal />
      <AboutUs />
      <ProductSection />
      <ContentSection />
      <TestimonialsSection />
      <ClientsSlider />
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default HomePage;
