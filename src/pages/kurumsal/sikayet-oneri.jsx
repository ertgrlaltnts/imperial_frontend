import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer";
import axios from "axios";

export default function Sikayet({general}){
  return (
    <Wrapper>
       <SEO
        pageTitle={"Şikayet & Öneri | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="ŞİKAYET & ÖNERİ FORMU"
          page_title="ŞİKAYET & ÖNERİ FORMU"
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