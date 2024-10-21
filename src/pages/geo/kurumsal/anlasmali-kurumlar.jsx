import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers-geo/header";
import Footer from "@/src/layout/footers/footer-geo";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function Institutions({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"კონტრაქტი დაწესებულებები | Imperial Hospital Trabzon"}
        description={
          "Serving in Trabzon, Imperial Hospital offers comprehensive health services to insured patients with its wide network of contracted institutions. Secure your health with agreements made with private and public insurance institutions."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="კონტრაქტი დაწესებულებები"
          page_title="კონტრაქტი დაწესებულებები"
        />
        <section className="tp-portfolio-details-area pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  {data.contracted_institutions.data.map((item, index) => (
                    <div key={index} className="col-lg-1">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.url}`}
                          style={{ objectFit: "contain", margin: 15 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
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
      data: response.data.data.attributes,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
