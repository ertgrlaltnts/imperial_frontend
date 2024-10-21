import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import GoogleMap from "./google-map";
import Footer from "@/src/layout/footers/footer";
import ContactForm from "@/src/forms/contact-form";

export default function Contact() {
  return (
    <>
      <HeaderOne />
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
                          <a href="mailto:@themepure.gmail.com">
                            info@imperialhastanesi.com
                          </a>
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
                          <a href="tel:9266688000">0462 455 64 25</a>
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
                          <a href="tel:9266688000">0462 455 64 25</a>
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
                          <a href="tel:9266688000">0462 455 64 25</a>
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
                          <p style={{ fontSize: 22 }}>
                            Kemerkaya Mah. Devlet Sahil Yolu Cad. İmperial Hast.
                            No: 5 Ortahisar/ Trabzon
                          </p>
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
        <GoogleMap />
      </main>
      <Footer />
    </>
  );
}
