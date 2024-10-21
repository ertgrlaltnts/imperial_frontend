import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-en";
import axios from "axios";

export default function Sikayet({general}){
  return (
    <Wrapper>
       <SEO
        pageTitle={"Complaints and Suggestions | Imperial Hospital Trabzon"}
        description={
          "Providing quality health services in Trabzon, Imperial Hospital is the address of trust in health with its expert doctor staff and modern technology. Trust us with your health with professional diagnosis and treatment opportunities in every branch."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="COMPLAINT AND SUGGESTION FORM"
          page_title="COMPLAINT AND SUGGESTION FORM"
        />
        <div
          style={{
            width: "100%",
            height: "1900px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 80,
          }}
        >
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdMyUPFwlCNUHMUnsDgTReAg-8J4uR3zdmipz-CDUm9hSNGRA/viewform?embedded=true&pli=1"
            style={{ width: "100%", height: "100%" }}
          >
            Loading…
          </iframe>
        </div>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
};

export async function getStaticProps() {
  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}