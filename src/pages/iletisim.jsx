import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import Breadcrumb from "../common/breadcrumb/breadcrumb";
import GoogleMap from "../components/contact/google-map";
import Footer from "../layout/footers/footer";
import ContactForm from "@/src/forms/contact-form";
import Update from "../components/update";
import axios from "axios";

export default function Contact({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"İletişim | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <>
        <HeaderOne data={general} />
        <main>
          <Breadcrumb top_title="İLETİŞİM" page_title="İLETİŞİM" />
          <>
            <section className="tp-contact-area pt-120 pb-90">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tp-contact-wrapper">
                      <div className="tp-contact-title-wrapper">
                        <h3 className="tp-contact-title">
                          BİZİMLE İLETİŞİME GEÇ
                        </h3>
                        <p>
                          Her türlü soru ve görüşünüz için bizimle iletişime
                          geçebilirsiniz.
                        </p>
                      </div>
                      <div className="tp-contact-content">
                        <div className="tp-contact-content-mail d-flex align-items-center">
                          <div
                            style={{ marginRight: 20 }}
                            className="tp-contact-content-mail-icon"
                          >
                            <span>
                              <i
                                style={{ fontSize: 25 }}
                                className="fa-regular fa-envelope"
                              ></i>
                            </span>
                          </div>
                          <h3
                            style={{ fontSize: 18 }}
                            className="tp-contact-item-title"
                          >
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                          </h3>
                        </div>
                        <div
                          style={{ marginBottom: 10 }}
                          className="tp-contact-content-phone d-flex align-items-center"
                        >
                          <div
                            style={{ marginRight: 20 }}
                            className="tp-contact-content-phone-icon"
                          >
                            <span>
                              <i
                                style={{ fontSize: 25 }}
                                className="fa-regular fa-phone"
                              ></i>
                            </span>
                          </div>
                          <h3
                            style={{ fontSize: 18 }}
                            className="tp-contact-item-title"
                          >
                            <a href={`tel:${data.phone_1_call}`}>
                              {data.phone_1}
                            </a>
                          </h3>
                        </div>

                        <div
                          style={{ marginBottom: 10 }}
                          className=" d-flex align-items-center"
                        >
                          <div
                            style={{ marginRight: 20 }}
                            className="tp-contact-content-phone-icon"
                          >
                            <span>
                              <i
                                style={{ fontSize: 25 }}
                                className="fa-light fa-calendar-lines-pen"
                              ></i>
                            </span>
                          </div>

                          <h3
                            style={{ fontSize: 18, marginRight: 10 }}
                            className="tp-contact-item-title"
                          >
                            Randevu İçin:
                          </h3>

                          <h3
                            style={{ fontSize: 18 }}
                            className="tp-contact-item-title"
                          >
                            <a href={`tel:${data.phone_1_call}`}>
                              {data.phone_1}
                            </a>
                          </h3>

                          <h3
                            style={{
                              fontSize: 18,
                              marginRight: 5,
                              marginLeft: 5,
                              border: "none",
                            }}
                            className="tp-contact-item-title"
                          >
                            ,
                          </h3>

                          <h3
                            style={{ fontSize: 18 }}
                            className="tp-contact-item-title"
                          >
                            <a href={`tel:${data.phone_2_call}`}>
                              {data.phone_2}
                            </a>
                          </h3>
                        </div>

                        <div className="tp-contact-content-phone d-flex align-items-center">
                          <div
                            style={{ marginRight: 20 }}
                            className="tp-contact-content-phone-icon"
                          >
                            <span>
                              <i
                                style={{ fontSize: 25 }}
                                className="fa-regular fa-pen-to-square"
                              ></i>
                            </span>
                          </div>
                          <h3
                            style={{ fontSize: 18 }}
                            className="tp-contact-item-title"
                          >
                            <a href={`tel:${data.phone_3_call}`}>
                              {data.phone_3}
                            </a>
                          </h3>
                        </div>

                        <div className="tp-contact-location-wrapper d-flex">
                          <div className="tp-contact-location">
                            <h3 className="tp-contact-location-title">
                              <i
                                style={{
                                  fontSize: 25,
                                  color: "#e10f21",
                                  marginRight: 10,
                                }}
                                className="fa-light fa-map-pin"
                              ></i>
                              Adresimiz
                            </h3>
                            <p style={{ fontSize: 22 }}>{data.address}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-contact-form">
                      <h3
                        style={{ marginBottom: 30 }}
                        className="tp-contact-form-title"
                      >
                        İletişime Geç
                      </h3>
                      <ContactForm />
                      <p className="ajax-response"></p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
          <Update data={general.update} />
          <GoogleMap data={data.google_maps} />
        </main>
        <Footer data={general} />
      </>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
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