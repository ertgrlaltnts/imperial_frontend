import React, { useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import paket_data from "@/src/data/paket-data";

function CenterMode({data}) {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, i) => (
          <div key={i} className="col-lg-4 col-md-6">
            <div className="tp-blog-wrapper">
              <div className="tp-blog-thumb">
                <img
                  style={{ width: "100%", height: "70vh", objectFit: "cover" }}
                  src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                  alt="theme-pure"
                />
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    top: 0,
                    background: "#000",
                    opacity: 0.6,
                    cursor: "grab",
                  }}
                />
                <div className="tp-blog-paket">
                  <div
                    style={{
                      position: "absolute",
                      bottom: 100,
                      background: "transparent",
                      width: "50%",
                    }}
                    className="tp-blog-content"
                  >
                    <div className="tp-blog-details "></div>
                    <h3
                      style={{ color: "#fff", fontSize: 35 }}
                      className="tp-blog-title"
                    >
                      <Link href={`/en/yazilarimiz/${item.attributes.slug}`}>{item.attributes.en.title}</Link>
                    </h3>
                    <div className="tp-hero-btn">
                      <Link className="tp-btn cstm-btn" href={`/en/yazilarimiz/${item.attributes.slug}`}>
                      READ MORE
                        <i className={`fa-regular fa-arrow-right`}></i>
                      </Link>
                    </div>
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      right: 20,
                      bottom: 20,
                      zIndex: 5,
                    }}
                    className="tp-team-nav d-flex justify-content-flex-start align-items-flex-start mt-10 mb-20"
                  >
                    <button
                      style={{
                        color: "#fff",
                        borderColor: "#e10f21",
                        backgroundColor: "#e10f21",
                        width: 45,
                        height: 45,
                      }}
                      type="button"
                      className="team-button-prev-1 tp-btn-hover-clear alt-color"
                      tabIndex="-1"
                      aria-label="Previous slide"
                      onClick={() => sliderRef?.current?.slickPrev()}
                    >
                      <i className="fa-regular fa-arrow-left"></i>
                      <b></b>
                    </button>
                    <button
                      style={{
                        color: "#fff",
                        borderColor: "#e10f21",
                        backgroundColor: "#e10f21",
                        width: 45,
                        height: 45,
                      }}
                      type="button"
                      className="team-button-next-1 tp-btn-hover-clear alt-color"
                      tabIndex="-1"
                      aria-label="Next slide"
                      onClick={() => sliderRef?.current?.slickNext()}
                    >
                      <i className="fa-regular fa-arrow-right"></i>
                      <b></b>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CenterMode;
