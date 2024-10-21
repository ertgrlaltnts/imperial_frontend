import React from "react";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import AboutArea from "./../homes/home-3/about-area";
import Footer from "@/src/layout/footers/footer";
import Update from "../update";
import axios from "axios";

export default function About({data}) {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title="HAKKIMIZDA" page_title="HAKKIMIZDA" />
        <AboutArea about={true} />
        <div className="container">
          <img
            src={
            `${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`
            }
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </div>
        <Update data={data.update} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/hakkimizda?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes,
    },
    revalidate: 10,
  };
}