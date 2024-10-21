import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer-en";
import axios from "axios";
import UpdateDate from "../../../components/update/en";

export default function Page({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"CCTV Disclosure Text | Imperial Hospital Trabzon"}
        description={
          "Providing quality health services in Trabzon, Imperial Hospital is the address of trust in health with its expert doctor staff and modern technology. Trust us with your health with professional diagnosis and treatment opportunities in every branch."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="CCTV CLARIFICATION TEXT"
          page_title="CCTV CLARIFICATION TEXT"
        />
        <MetinIcerik content={data.en} about={true} />
        <UpdateDate data={data.update} />
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/bilgilendirme?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes.cctv,
      general: general.data.data.attributes
    },
    revalidate: 10,
  };
}
