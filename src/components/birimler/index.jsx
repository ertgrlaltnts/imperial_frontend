import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import PortfolioArea from "./portfolio-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import Footer from "@/src/layout/footers/footer";

const Portfolio = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="TIBBİ BİRİMLERİMİZ"  page_title="TIBBİ BİRİMLERİMİZ" />
        <PortfolioArea />
      </main>
      <Footer />
    </>
  );
};

export default Portfolio;

