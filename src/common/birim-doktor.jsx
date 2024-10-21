import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper";
import team_data from "@/src/data/team-data";
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
  return (
    <>
      <section className="tp-team-area p-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tp-team-title-wrapper">
                <h3 style={{ marginBottom: 30 }} className="tp-section-title">
                  Hekimlerimiz
                </h3>
              </div>
            </div>

            <div className="col-lg-6"></div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <Swiper
              {...setting}
              loop={false}
              modules={[Navigation]}
              className="team-active swiper-container"
              style={{ overflow: "visible" }}
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="tp-team-wrapper p-relative">
                    <Link href={`/hekimlerimiz/${item.attributes.slug}`}>
                      <div className="tp-team-wrapper-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
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
                          style={{ color: "#fff" }}
                          className="team-title text-center"
                        >
                          <Link href={`/hekimlerimiz/${item.attributes.slug}`}>
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
