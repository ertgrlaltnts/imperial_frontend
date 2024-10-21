import Link from "next/link";
import { Navigation } from "swiper";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Appointment from "@/src/svg/calendar";

const setting = {
  slidesPerView: 5,
  spaceBetween: 25,
  navigation: {
    nextEl: ".team-button-next-1",
    prevEl: ".team-button-prev-1",
  },
  breakpoints: {
    1400: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 3,
    },
    576: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
};

const TeamArea = ({ data }) => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  return (
    <>
      <section className="tp-team-area p-relative pb-100 pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-team-title-wrapper">
                <Link href="/hekimlerimiz">
                  <h3 style={{ marginBottom: 0 }} className="tp-section-title">
                    Hekimlerimiz
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      marginBottom: 40,
                    }}
                  >
                    <h3
                      style={{
                        fontSize: 16,
                        color: "#022746",
                        marginBottom: 0,
                        marginRight: 15,
                      }}
                    >
                      Tüm hekimlerimizi gör
                    </h3>
                    <i className="fa-regular fa-arrow-right"></i>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-30">
                <button
                  type="button"
                  className="team-button-prev-1 tp-btn-hover-clear alt-color"
                  tabIndex="-1"
                  aria-label="Previous slide"
                >
                  <i className="fa-regular fa-arrow-left"></i>
                  <b></b>
                </button>
                <button
                  type="button"
                  className="team-button-next-1 tp-btn-hover-clear alt-color"
                  tabIndex="-1"
                  aria-label="Next slide"
                >
                  <i className="fa-regular fa-arrow-right"></i>
                  <b></b>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <Swiper
              {...setting}
              loop={isLoop}
              modules={[Navigation]}
              className="team-active swiper-container"
              style={{ overflow: "visible" }}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-team-wrapper p-relative">
                    <Link href={`hekimlerimiz/${item.attributes.slug}`}>
                      <div className="tp-team-wrapper-thumb">
                        <img
                          width={510}
                          height={510}
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                          alt="theme-pure"
                        />
                      </div>
                    </Link>
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
                          style={{ color: "#fff", fontSize: 16 }}
                          className="team-title text-center"
                        >
                          <Link href={`hekimlerimiz/${item.attributes.slug}`}>
                            {item.attributes.name}
                          </Link>
                        </h3>
                        <p style={{ textAlign: "center", marginBottom: 0 }}>
                          {item.attributes.tr.job}
                        </p>
                      </div>
                      {item.attributes.randevu_link && (
                        <Link href={item.attributes.randevu_link}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "space-evenly",
                              background: "#e10f21",
                              padding: "8px 0",
                            }}
                          >
                            <div style={{ opacity: 0 }}>
                              <Appointment />
                            </div>
                            <h3
                              style={{
                                fontSize: 18,
                                marginBottom: 0,
                                color: "#fff",
                              }}
                            >
                              Online Randevu
                            </h3>

                            <Appointment />
                          </div>
                        </Link>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
