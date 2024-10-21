import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-en";
import Update from "@/src/components/update/en";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";

export default function About({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"About Us | Imperial Hospital Trabzon"}
        description={
          "Located in Trabzon, Imperial Hospital is a health center that provides quality health services in every branch with its expert staff and advanced technology, and prioritizes patient satisfaction. A reliable address for your health."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="ABOUT US" page_title="ABOUT US" />
        <>
          <section
            className={`${"tp-about-breadcrumb pt-100 pb-90"} p-relative`}
          >
            <div className="container">
              <div className="row">
                <div style={{ marginBottom: 80 }} className="col-lg-12">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">
                        <span className="title-color">IMPERIAL</span> HOSPITAL
                      </h3>
                    </div>
                    <p className="text">{data.en.text_1}</p>

                    <p className="text">{data.en.text_2}</p>

                    <p className="text">{data.en.text_3}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">OUR VISION</h3>
                    </div>
                    <p className="text">{data.en.vizyon}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">OUR MISION</h3>
                    </div>
                    <p className="text">{data.en.misyon}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
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
