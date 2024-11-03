import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Footer from "@/src/layout/footers/footer-geo";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function Doctors({
  yonetim,
  general,
  kalite,
  bashekim,
  mudur,
  isletme,
  saglik,
}) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"ჩვენი ადმინისტრაციული ერთეულები | İmperial Hastanesi Trabzon"}
        description={
          "ტრაპიზონის საიმპერატორო საავადმყოფოს ადმინისტრაციული ერთეულების გვერდზე შეგიძლიათ მიიღოთ ინფორმაცია ჩვენი საავადმყოფოს მენეჯმენტისა და დამხმარე სერვისების შესახებ. ჩვენ ვთავაზობთ საუკეთესო მომსახურებას პაციენტების კმაყოფილებისთვის ჩვენი ძლიერი და გამოცდილი პერსონალით."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="ჩვენი ადმინისტრაციული ერთეულები"
          page_title="ჩვენი ადმინისტრაციული ერთეულები"
        />
        <section className="tp-team-area p-relative pb-50 pt-50">
          <div className="container">
            <h3 className="tp-section-title">დირექტორთა საბჭო</h3>
            <div className="row">
              {yonetim.map((item, index) => (
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

            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            მთავარი ექიმის კაბინეტი
            </h3>
            <div className="row">
              {bashekim.map((item, index) => (
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

            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            გენერალური მენეჯერი
            </h3>
            <div className="row">
              {mudur.map((item, index) => (
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

            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            ბიზნეს მენეჯერი
            </h3>
            <div className="row">
              {isletme.map((item, index) => (
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

            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            ჯანდაცვის მომსახურება
            </h3>
            <div className="row">
              {saglik.map((item, index) => (
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

            <h3 style={{ marginTop: 40 }} className="tp-section-title">
            ხარისხის მართვის განყოფილება
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
            <Update data={yonetim[0].attributes.update} />
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

  const yonetim = response.data.data.filter(
    (item, index) => item.attributes.department == "yonetim"
  );
  const bashekim = response.data.data.filter(
    (item, index) => item.attributes.department == "bashekim"
  );
  const kalite = response.data.data.filter(
    (item, index) => item.attributes.department == "kalite"
  );
  const mudur = response.data.data.filter(
    (item, index) => item.attributes.department == "mudur"
  );
  const isletme = response.data.data.filter(
    (item, index) => item.attributes.department == "isletme"
  );
  const saglik = response.data.data.filter(
    (item, index) => item.attributes.department == "saglik"
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      yonetim: yonetim,
      bashekim: bashekim,
      kalite: kalite,
      mudur: mudur,
      isletme: isletme,
      saglik: saglik,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
