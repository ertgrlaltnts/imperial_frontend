import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-geo";
import Update from "@/src/components/update/geo";
import axios from "axios";
import "react-circular-progressbar/dist/styles.css";

export default function About({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"ჩვენს შესახებ | Imperial Hospital Trabzon"}
        description={
          "ტრაპიზონში მდებარე იმპერიული ჰოსპიტალი არის ჯანდაცვის ცენტრი, რომელიც უზრუნველყოფს ხარისხიან ჯანდაცვის სერვისებს ყველა ფილიალში თავისი ექსპერტი პერსონალით და მოწინავე ტექნოლოგიით და პრიორიტეტს ანიჭებს პაციენტების კმაყოფილებას. სანდო მისამართი თქვენი ჯანმრთელობისთვის."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="ჩვენს შესახებ" page_title="ჩვენს შესახებ" />
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
                    <p className="text">{data.geo.text_1}</p>

                    <p className="text">{data.geo.text_2}</p>

                    <p className="text">{data.geo.text_3}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">ჩვენი ხედვა</h3>
                    </div>
                    <p className="text">{data.geo.vizyon}</p>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="tp-about-3-wrapper">
                    <div className="tp-about-3-title-wrapper">
                      <h3 className="tp-section-title">ჩვენი მისია</h3>
                    </div>
                    <p className="text">{data.geo.misyon}</p>
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
