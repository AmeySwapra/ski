import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import ContactSection from "../components/ContactSection";


function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"CONTACT US"} />
      <ContactSection/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default ContactPage;
