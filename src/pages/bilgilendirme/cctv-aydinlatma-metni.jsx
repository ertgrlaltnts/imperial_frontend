import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer";
import axios from "axios";
import UpdateDate from "../../components/update";

export default function Page({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"CCTV Aydınlatma Metni | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="CCTV AYDINLATMA METNİ"
          page_title="CCTV AYDINLATMA METNİ"
        />
        <MetinIcerik content={data.tr} about={true} />
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
