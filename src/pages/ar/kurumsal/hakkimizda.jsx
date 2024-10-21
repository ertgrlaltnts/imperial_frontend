import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-ar/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-ar";
import Update from "@/src/components/update/ar";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";

export default function About({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"معلومات عنا | Imperial Hospital Trabzon"}
        description={
          "Located in Trabzon, Imperial Hospital is a health center that provides quality health services in every branch with its expert staff and advanced technology, and prioritizes patient satisfaction. A reliable address for your health."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="معلومات عنا" page_title="معلومات عنا" />
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
                    <p className="text">{data.ar.text_1}</p>

                    <p className="text">{data.ar.text_2}</p>

                    <p className="text">{data.ar.text_3}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">رؤيتنا</h3>
                    </div>
                    <p className="text">{data.ar.vizyon}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">مهمتنا</h3>
                    </div>
                    <p className="text">{data.ar.misyon}</p>
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
