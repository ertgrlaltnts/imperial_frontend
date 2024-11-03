import Image from "next/image";
import LineArrow from "@/src/svg/line-arrow";
import Link from "next/link";
import { EffectFade, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopup from "@/src/modals/video-popup";
import React, { useState, useEffect } from "react";
import shape_4 from "@assets/img/hero/shape-4.png";

// slider setting
const setting = {
  slidesPerView: 1,
  spaceBetween: 0,
  effect: "fade",
  autoplay: {
    delay: 4000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".hero-button-next-1",
    prevEl: ".hero-button-prev-1",
  },
};
// slider data
const slider_data = [
  {
    id: 1,
    bg_img: "/assets/img/hero/3.png",
    hero_title_1: "Hastalıkta ve",
    hero_support: "Sağlıkta",
    button_1: "Online Sonuç",
    button_1_icon: "hospital-user",
    button_1_link:
      "https://randevu.meddata.com.tr/imperialhastanesi/e-sonuc.php",
    button_2: "Online Randevu",
    button_2_icon: "calendar-lines-pen",
    button_2_link: "https://randevu.meddata.com.tr/imperialhastanesi/",
  },
  {
    id: 2,
    bg_img: "/assets/img/hero/4.png",
    hero_title_1: "Minik Kalplere",
    hero_support: "İmperial Şefkati",
    button_1: "Bebek Dostu Hastane",
    button_1_icon: "baby",
    button_1_link: "/kurumsal/bebek-dostu-hastane",
    button_2: "",
    button_2_icon: "",
    button_2_link: "",
  },
];
// shapes
const shapes = [{ id_cls: 4, img: shape_4 }];

const HeroSlider = ({ data, images }) => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section
        style={{ paddingLeft: 0 }}
        className="tp-hero-area tp-hero-space"
      >
        <div className="tp-hero-wrapper p-relative">
          <div className="hero-active-1 swiper-container">
            <Swiper
              {...setting}
              loop={isLoop}
              modules={[Navigation, EffectFade, Autoplay]}
            >
              {images.map((item, i) => (
                <SwiperSlide key={i}>
                  <div className="tp-hero-inner-1">
                    <div className="container">
                      <div className="tp-hero-shape">
                        {shapes.map((shape, index) => (
                          <Image
                            key={index}
                            className={`shape-${shape.id_cls}`}
                            src={shape.img}
                            alt="theme-pure"
                          />
                        ))}
                      </div>
                      <div className="tp-hero-1">
                        <div
                          className="tp-hero-bg tp-hero-overlay p-relative"
                          style={{
                            backgroundImage: `url(${process.env.NEXT_PUBLIC_IP}${item.attributes.url})`,
                          }}
                        ></div>
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="tp-hero-content p-relative">
                              <div className="tp-hero-title-wrapper">
                                <span className="tp-section-title__pre p-relative">
                                  <img src={"/assets/img/logo/logo.png"} />
                                </span>
                                <h3 className="tp-hero-title">
                                  {data[i].title_1}
                                  <br />{" "}
                                  <span className="title-color">
                                    {data[i].title_2}
                                  </span>{" "}
                                </h3>
                                <div className="tp-hero-btn">
                                  <Link
                                    className="tp-btn"
                                    href={data[i].button_1_link}
                                  >
                                    {data[i].button_1}{" "}
                                    <img
                                      src={`${process.env.NEXT_PUBLIC_IP}${data[i].button_1_icon.data.attributes.url}`}
                                      style={{ width: 25, height: 25 }}
                                    />
                                  </Link>
                                </div>

                                <div className="tp-hero-btn">
                                  <Link
                                    className="tp-btn"
                                    href={data[i].button_2_link}
                                  >
                                    {data[i].button_2}{" "}
                                    <img
                                      src={`${process.env.NEXT_PUBLIC_IP}${data[i].button_2_icon.data.attributes.url}`}
                                      style={{ width: 25, height: 25 }}
                                    />
                                  </Link>
                                </div>
                              </div>
                              {/* <div className="tp-hero-shape-animation">
                                <span></span>
                              </div> */}
                            </div>
                          </div>
                          <div className="col-lg-5"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="tp-hero-nav d-none d-xxl-block">
            <button
              type="button"
              className="hero-button-prev-1 tp-btn-hover-clear alt-color"
            >
              <i className="fa-regular fa-arrow-left"></i>
              <b></b>
            </button>
            <button
              type="button"
              className="hero-button-next-1 tp-btn-hover-clear alt-color"
            >
              <i className="fa-regular fa-arrow-right"></i>
              <b></b>
            </button>
          </div>

          {/* <div className="tp-hero-bottom">
            <div className="tp-hero-experince">
              <span className="year">
                {" "}
                17
                <br /> <i className="experince">Yıllık Tecrübe</i>
              </span>
            </div>
          </div>  */}
        </div>
      </section>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"dGcsHMXbSOA"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroSlider;
