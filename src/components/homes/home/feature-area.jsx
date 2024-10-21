import React from "react";
import Link from "next/link";
import Image from "next/image";
import feature_img_1 from "@assets/img/feature/1.png";
import feature_img_2 from "@assets/img/feature/2.png";
import shape_1 from "@assets/img/feature/shape-1.png";
import shape_2 from "@assets/img/feature/shape-2.png";


const FeatureArea = ({ about, data, title }) => {
  return (
    <>
      <section
        className={`tp-feature-area ${
          about ? "feature-breadcrumb pb-100" : ""
        }`}
      >
        {about ? null : (
          <div className="tp-feature-shape">
            <Image src={shape_1} alt="theme-pure" />
          </div>
        )}
        <div className="container container-large">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="tp-feature-title-wrapper">
                <h3 className="tp-section-title">
                  {title[0]}
                  <span className="title-color"> {title[1]}</span>
                  <span className="title-right-shape">
                    
                  </span>
                </h3>
              </div>
            </div>
 
          </div>
          <div className="row">
            {data.map((item, i) => (
              <div key={i} className="col-lg-6 col-md-6">
                <div
                  className="tp-feature-item-box p-relative wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay=".3s"
                >
                  <div className="tp-feature-item p-relative mb-30">
                    <div className="tp-feature-item-shape">
                      <Image src={shape_2} alt="theme-pure" />
                    </div>
                    <div className="tp-feature-item-wrapper">
                      <div className="tp-feature-item-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.image.data.attributes.url}`}
                          className="thumb"
                          alt="birim"
                        />
                      </div>
                      <div className="tp-feature-item-content">
                        <h3 className="feature-title">
                          <Link href={item.link}>{item.title}</Link>
                          <span></span>
                        </h3>
                        <p>{item.text}</p>
                      </div>
                    </div>
                  </div>
                  <div className="tp-feature-item-btn">
                    <Link href={item.link}>
                      <i className="fa-regular fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FeatureArea;
