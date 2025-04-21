import React from "react";
import Navbar from "../components/common/Navbar";
import PageHeader from "../components/common/PageHeader";
import Brochure from "../components/common/Brochure";
import Footer from "../components/common/Footer";
import CommonProducts from "../components/common/CommonProducts";
import ClientLogosGrid from "../components/ClientLogosGrid";

function ClientPage() {
  return (
    <>
      <Navbar />
      <PageHeader title={"CLIENTS"} />
      <ClientLogosGrid/>
      <Brochure />
      <CommonProducts/>
      <Footer />
    </>
  );
}

export default ClientPage;
