import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer";
import axios from "axios";
import Update from "@/src/components/update";

export default function KalitePolitikasi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Bebek Dostu Hastane | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da yer alan İmperial Hastanesi, Bebek Dostu Hastane unvanı ile anne ve bebek sağlığını ön planda tutan, emzirmeyi destekleyen, güvenli doğum hizmetleri sunan bir sağlık merkezidir."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="BEBEK DOSTU HASTANE"
          page_title="BEBEK DOSTU HASTANE"
        />
        <MetinIcerik content={data.tr} about={true} />
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
