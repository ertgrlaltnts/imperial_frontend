import React, { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Markdown from "markdown-to-jsx";

const AboutArea = ({ about, content }) => {
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
                <Markdown
                  style={{
                    position: "relative",
                    fontWeight: 400,
                    fontSize: 16,
                    color: "#535353",
                    marginLeft: 13,
                  }}
                >
                  {content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
