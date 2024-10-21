import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PortfolioDetailsArea from "./portfolio-details-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const PortfolioDetails = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="ANLAŞMALI KURUMLAR" page_title="ANLAŞMALI KURUMLAR" />
        <PortfolioDetailsArea />
      </main>
      <FooterThree />
    </>
  );
};

export default PortfolioDetails;
