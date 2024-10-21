import Link from "next/link";
import { Navigation } from "swiper";
import team_data from "@/src/data/department-data";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { add3Dots } from "@/src/hooks/add3Dots";

const setting = {
  slidesPerView: 6,
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
                <Link href="/tibbi-birimlerimiz">
                  <h3 style={{ marginBottom: 0 }} className="tp-section-title">
                    Tıbbi Birimlerimiz
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
                      Tüm birimleri gör
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
            >
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  <div
                    style={{
                      boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                      marginTop: 10,
                    }}
                    className="tp-team-wrapper p-relative"
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "20px 0",
                        boxShadow: "none",
                        background:"none"
                      }}
                      className="tp-team-wrapper-thumb"
                    >
                      <Link href={`tibbi-birimlerimiz/${item.attributes.slug}`}>
                        {/* <Image src={item.img} alt="theme-pure" /> */}
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            style={{
                              width: 150,
                              height: 150,
                              objectFit: "cover",
                              borderRadius: "50%",
                              boxShadow:
                                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
                            }}
                            src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                            width={510}
                            height={510}
                            alt="theme-pure"
                          />
                          <h3
                            style={{
                              textAlign: "center",
                              margin: "20px 0 10px 0",
                              fontSize: 20,
                            }}
                          >
                            {item.attributes.tr.title}
                          </h3>
                        </div>
                      </Link>
                      
                    </div>

                    <div style={{textAlign:"center", paddingRight:10, paddingLeft:10}}>
                    <p style={{color:"#000", fontSize:15}}>{add3Dots(item.attributes.tr.text , 100)}</p>
                    </div>
                    
                    <div className="tp-team-wrapper-content p-0 align-items-center justify-content-center">
                      
                      <Link href={`tibbi-birimlerimiz/${item.attributes.slug}`}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            background: "#e10f21",
                            padding: "10px 20px",
                            boxShadow:
                              "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: 16,
                              marginBottom: 0,
                              color: "#fff",
                            }}
                          >
                            Birimi İncele
                          </h3>

                          <i
                            style={{ color: "#fff", fontSize: 20 }}
                            className="fa-regular fa-arrow-right"
                          ></i>
                        </div>
                      </Link>
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
