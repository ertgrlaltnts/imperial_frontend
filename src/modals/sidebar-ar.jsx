import Link from "next/link";
import Image from "next/image";
import ImagePopup from "./ImagePopup";
import React, { useState } from "react";
import sidebar_img_1 from "@assets/img/portfolio/1.jpg";
import sidebar_img_2 from "@assets/img/portfolio/2.jpg";
import sidebar_img_3 from "@assets/img/portfolio/3.jpg";
import sidebar_img_4 from "@assets/img/portfolio/4.jpg";
import sidebar_img_5 from "@assets/img/portfolio/5.jpg";
import sidebar_img_6 from "@assets/img/portfolio/6.jpg";
import MobileMenus from "../layout/headers/mobile-menus";

const images = [
  { id: 1, img: sidebar_img_1 },
  { id: 2, img: sidebar_img_2 },
  { id: 3, img: sidebar_img_3 },
  { id: 4, img: sidebar_img_4 },
  { id: 5, img: sidebar_img_5 },
  { id: 6, img: sidebar_img_6 },
];

const Sidebar = ({ sidebarOpen, setSidebarOpen, home_three, data }) => {
  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const img = images.map((item) => item.img.src);

  return (
    <>
      <div
        className={`offcanvas__area ${sidebarOpen ? "offcanvas-opened" : ""} ${
          home_three ? "home-3-pos" : ""
        }`}
      >
        <div className="offcanvas__wrapper">
          <div className="offcanvas__close">
            <button
              className="offcanvas__close-btn offcanvas-close-btn"
              onClick={() => setSidebarOpen(false)}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 1L1 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L11 11"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="offcanvas__content">
            <div className="offcanvas__top mb-50 d-flex justify-content-between align-items-center">
              <div className="offcanvas__logo logo">
                <Link href="/ar">
                  <img
                    src={`${process.env.NEXT_PUBLIC_IP}${data.logo.data.attributes.url}`}
                    alt="logo"
                  />
                </Link>
              </div>
            </div>
            <div className="mobile-menu fix d-lg-none"></div>
            <div className="tp-mobile-menu-pos mean-container d-lg-none">
              <MobileMenus />
            </div>
            <div className="offcanvas__popup">
              {data.sidebar_text_ar}
              <div
                style={{ marginTop: 20 }}
                className="offcanvas__popup-gallery"
              >
                <h4 className="offcanvas__title">معرض</h4>
                {images.map((item, i) => (
                  <a
                    key={i}
                    style={{ cursor: "pointer" }}
                    href={data.instagram}
                    className="popup-image"
                  >
                    <Image src={item.img} alt="theme-pure" />
                  </a>
                ))}
              </div>
            </div>
            <div className="offcanvas__contact">
              <h4 className="offcanvas__title">تواصل</h4>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href="https://maps.app.goo.gl/Dp3XKBJbRsUDFpNZ7">
                    Ortahisar / Trabzon
                  </a>
                </div>
              </div>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href={`mailto:${data.email}`}>{data.email} </a>
                </div>
              </div>
              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href={`tel:${data.phone_1_call}`}>{data.phone_1}</a>
                </div>
              </div>

              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href={`tel:${data.phone_2_call}`}>{data.phone_2}</a>
                </div>
              </div>

              <div className="offcanvas__contact-content d-flex">
                <div className="offcanvas__contact-content-icon">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="offcanvas__contact-content-content">
                  <a href={`tel:${data.phone_3_call}`}>{data.phone_3}</a>
                </div>
              </div>
            </div>
            <div className="offcanvas__social">
              <a className="icon facebook" href={data.facebook}>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="icon twitter" href={data.twitter}>
                <i className="fab fa-twitter"></i>
              </a>

              <a
                style={{ backgroundColor: "#FCAF45" }}
                className="icon"
                href={data.instagram}
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a className="icon youtube" href={data.youtube}>
                <i className="fab fa-youtube"></i>
              </a>
              <a className="icon linkedin" href={data.linkedin}>
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`body-overlay ${sidebarOpen && "opened"}`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={img}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}
    </>
  );
};

export default Sidebar;
