import React from "react";
import "react-circular-progressbar/dist/styles.css";

const AboutArea = ({ about, data }) => {
  return (
    <>
      <section
        className={`${
          about
            ? "tp-about-breadcrumb pt-100 pb-90"
            : "tp-about-3-area pt-185 pb-170"
        } p-relative`}
      >
        <div className="container">
          <div className="row">
            <div style={{ marginBottom: 80 }} className="col-lg-12">
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">
                    <span className="title-color">İMPERİAL</span> HASTANESİ
                  </h3>
                </div>
                <p className="text">{data.text_1}</p>

                <p className="text">{data.text_2}</p>

                <p className="text">{data.text_3}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">VİZYONUMUZ</h3>
                </div>
                <p className="text">{data.vizyon}</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-about-3-wrapper">
                <div className="tp-about-3-title-wrapper">
                  <h3 className="tp-section-title">MİSYONUMUZ</h3>
                </div>
                <p className="text">{data.misyon}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
