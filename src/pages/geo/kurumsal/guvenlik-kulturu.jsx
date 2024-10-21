import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer-geo";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function KalitePolitikasi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"უსაფრთხოების კულტურა | Imperial Hospital Trabzon"}
        description={
          "Located in Trabzon, Imperial Hospital provides services with a security culture that prioritizes patient and employee safety. We offer a safe healthcare environment with modern technology and protocols."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="უსაფრთხოების კულტურა"
          page_title="უსაფრთხოების კულტურა"
        />
        <MetinIcerik content={data.geo} about={true} />
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
      data: response.data.data.attributes.security_culture,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
