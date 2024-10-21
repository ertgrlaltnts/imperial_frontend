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
        pageTitle={"Güvenlik Kültürü | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da yer alan İmperial Hastanesi, hasta ve çalışan güvenliğini ön planda tutan bir güvenlik kültürü ile hizmet vermektedir. Modern teknoloji ve protokollerle güvenli bir sağlık ortamı sunuyoruz."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="GÜVENLİK KÜLTÜRÜ"
          page_title="GÜVENLİK KÜLTÜRÜ"
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
      data: response.data.data.attributes.security_culture,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
