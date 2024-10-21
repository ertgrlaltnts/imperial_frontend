import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer-en";
import axios from "axios";
import Update from "@/src/components/update/en";

export default function KalitePolitikasi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Baby Friendly Hospital | Imperial Hospital Trabzon"}
        description={
          "Located in Trabzon, İmperial Hospital is a health center that prioritizes mother and baby health, supports breastfeeding, and provides safe birth services with its Baby-Friendly Hospital title."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="BABY-FRIENDLY HOSPITAL"
          page_title="BABY-FRIENDLY HOSPITAL"
        />
        <MetinIcerik content={data.en} about={true} />
        <Update data={data.update} />
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/kurumsal?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes.baby_hospital,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
