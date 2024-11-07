import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Footer from "@/src/layout/footers/footer-geo";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function KaliteYonetim({ general, kalite }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"ჩვენი ხარისხის მართვის განყოფილება | Imperial Hospital Trabzon"}
        description={
          "საიმპერატორო ჰოსპიტალის ხარისხის მართვის განყოფილება ტრაპიზონში მომსახურების მიწოდებით მიჰყვება ხარისხის სტანდარტებს, რათა უზრუნველყოს ჩვენი ჯანდაცვის სერვისები უმაღლეს დონეზე და პრიორიტეტულად ენიჭება პაციენტების უსაფრთხოებასა და კმაყოფილებას. ჩვენი უწყვეტი განვითარების მიზნით, ჩვენ ვამატებთ ღირებულებას საზოგადოებას სანდო და გამჭვირვალე ჯანდაცვის სერვისების მიწოდებით."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="ჩვენი ხარისხის მართვის განყოფილება"
          page_title="ჩვენი ხარისხის მართვის განყოფილება"
        />
        <section className="tp-team-area p-relative pb-50 pt-50">
          <div className="container">
            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            ჩვენი ხარისხის მართვის განყოფილება
            </h3>
            <div className="row">
              {kalite.map((item, index) => (
                <div className="col-lg-3" key={index}>
                  <div
                    style={{ marginBottom: 25 }}
                    className="tp-team-wrapper p-relative"
                  >
                    <div className="tp-team-wrapper-thumb">
                      <img
                        src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                        alt="theme-pure"
                        width={510}
                        height={510}
                        className="tp-team-wrapper-thumb-image"
                      />
                    </div>

                    <div className="tp-team-wrapper-content p-0 align-items-center justify-content-center">
                      <div
                        style={{
                          width: "100%",
                          backgroundColor: "#022746",
                          padding: "6px 0",
                        }}
                        className="tp-team-wrapper-content-text"
                      >
                        <h3
                          style={{ color: "#fff" }}
                          className="team-title text-center"
                        >
                          {item.attributes.name}
                        </h3>
                        <p style={{ textAlign: "center", marginBottom: 0 }}>
                          {item.attributes.job_geo}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Update data={kalite[0].attributes.update} />
          </div>
        </section>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/idaris?populate=deep&pagination[limit]=100`
  );
  const kalite = response.data.data.filter(
    (item, index) => item.attributes.department == "kalite"
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      kalite: kalite,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
