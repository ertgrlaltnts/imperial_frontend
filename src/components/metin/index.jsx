import React from "react";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "./../homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer";
import CounterArea from "../homes/home-2/counter-area";
import FooterContact from "@/src/layout/footers/footer-contact";

const About = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb
          top_title="KALİTE POLİTİKAMIZ"
          page_title="KALİTE POLİTİKAMIZ"
        />
        <MetinIcerik about={true} />
      </main>
      <Footer />
    </>
  );
};

export default About;
