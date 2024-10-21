import Link from "next/link";
import Image from "next/image";
import Count from "@/src/common/count";
import React from "react";
import LineArrowTwo from "@/src/svg/line-arrow-2";
import fun_fact_shape_2 from "@assets/img/fun-fact/shape-2.png";
import fun_fact_shape_3 from "@assets/img/fun-fact/shape-3.png";
import fun_fact_shape_5 from "@assets/img/fun-fact/shadow.png";
import reload_img from "@assets/img/fun-fact/hearth.png";

const ServiceArea = ({ data , title, more }) => {
  return (
    <>
      <div className="tp-service-funfact-box">
        <section className="tp-fun-fact-area pt-80 pb-65 p-relative">
          <div className="container container-1400">
            <div className="tp-fun-fact-shape">
              <Image
                className="shape-2"
                src={fun_fact_shape_2}
                alt="theme-pure"
              />
              <Image
                className="shape-3"
                src={fun_fact_shape_3}
                alt="theme-pure"
              />

              <Image
                className="shadow"
                src={fun_fact_shape_5}
                alt="theme-pure"
              />
            </div>

            <div className="row">
              <div className="col-lg-2 col-md-4">
                <div className="tp-fun-fact-wrapper-box">
                  <div className="tp-fun-fact-wrapper">
                    <h3 className={`counter-title purecounter`}>
                      <span
                        data-purecounter-duration="4"
                        className="purecounter"
                      >
                        <Count number={data.c1_number} text={"+"} />
                      </span>
                    </h3>
                    <p>{data.c1_title}</p>
                  </div>

                  <div className="tp-fun-fact-wrapper">
                    <h3 className={`counter-title purecounter`}>
                      <span
                        data-purecounter-duration="4"
                        className="purecounter"
                      >
                        <Count number={data.c2_number} text={"+"} />
                      </span>
                    </h3>
                    <p>{data.c2_title}</p>
                  </div>

                  <div className="tp-fun-fact-wrapper">
                    <h3 className={`counter-title purecounter`}>
                      <span
                        data-purecounter-duration="4"
                        className="purecounter"
                      >
                        <Count number={data.c3_number} text={"+"} />
                      </span>
                    </h3>
                    <p>{data.c3_title}</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-8">
                <div className="tp-fun-fact-thumb p-relative">
                  <Image id="reload" src={reload_img} alt="scroll" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="tp-fun-fact-content">
                  <div className="tp-fun-fact-title-wrapper">
                    <h3 className="tp-section-title">
                      {title[0]} {title[1]}
                      <span className="title-left-shape">
                        <LineArrowTwo />
                      </span>
                    </h3>
                    <p style={{ color: "#9d9d9d" }}>{data.text}</p>

                    <div className="tp-fun-fact-btn">
                      <Link className="tp-btn" href={data.link}>
                        {more}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServiceArea;
