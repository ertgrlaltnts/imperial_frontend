import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "../../layout/headers-en/header";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import GoogleMap from "../../components/contact/google-map";
import Footer from "../../layout/footers/footer-en";
import ContactForm from "@/src/forms/contact-form-en";
import axios from "axios";
import Update from "@/src/components/update/en";

export default function Contact({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Contact | Imperial Hospital Trabzon"}
        description={
          "Providing quality health services in Trabzon, Imperial Hospital is the address of trust in health with its expert doctor staff and modern technology. Trust us with your health with professional diagnosis and treatment opportunities in every branch."
        }
      />
      <>
        <HeaderOne data={general} />
        <main>
          <Breadcrumb top_title="CONTACT" page_title="CONTACT" />
          <>
            <section className="tp-contact-area pt-120 pb-90">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tp-contact-wrapper">
                      <div className="tp-contact-title-wrapper">
                        <h3 className="tp-contact-title">
                        CONTACT US
                        </h3>
                        <p>
                        You can contact us for any questions and comments you may have.
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
                                className="fa-light fa-envelope"
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
                                className="fa-light fa-phone"
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
                            For Appointment:
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
                                className="fa-light fa-pen-to-square"
                              ></i>
                            </span>
                          </div>

                          <h3
                            style={{ fontSize: 18, marginRight: 10 }}
                            className="tp-contact-item-title"
                          >
                            Editor Phone:
                          </h3>

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
                              Our Address
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
                        Contact Us
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
