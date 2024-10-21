import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import AboutArea from "@/src/components/homes/home-3/about-area";
import Footer from "@/src/layout/footers/footer";
import Update from "@/src/components/update";
import axios from "axios";

export default function About({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Hakkımızda | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da bulunan İmperial Hastanesi, uzman kadrosu ve ileri teknoloji ile her branşta kaliteli sağlık hizmetleri sunan, hasta memnuniyetini öncelik edinen bir sağlık merkezidir. Sağlığınız için güvenilir adres."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="HAKKIMIZDA" page_title="HAKKIMIZDA" />
        <AboutArea data={data.tr} about={true} />
        <div className="container">
          <img
            src={`${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <Update data={data.update} />
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hakkimizda?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
