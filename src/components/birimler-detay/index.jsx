import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import Footer from "@/src/layout/footers/footer";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="DİYETİSYEN" page_title="DİYETİSYEN" />
        <PortfolioDetailsArea />
      </main>
      <Footer />
    </>
  );
};

export default PortfolioDetails;
