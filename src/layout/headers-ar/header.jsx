import Link from "next/link";
import Image from "next/image";
import NavMenu from "./nav-menu";
import LangLogo from "@assets/main/ar.png";
import useSticky from "@/src/hooks/use-sticky";
import HamburgerBtn from "@/src/svg/hamburger-btn";
import React, { useEffect, useRef, useState } from "react";
import HomeIcon from "@/src/svg/home-icon";
import SearchPopup from "@/src/modals/search-popup";
import Sidebar from "@/src/modals/sidebar-ar";
import Logo from "@assets/img/logo/logo.png";

const HeaderOne = ({data}) => {
  const { sticky } = useSticky();
  const langToggleRef = useRef(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [isLangListOpen, setIsLangListOpen] = useState(false);
  useEffect(() => {
    if (langToggleRef.current) {
      const handleClickOutside = (e) => {
        if (langToggleRef.current.contains(e.target)) {
          setIsLangListOpen(!isLangListOpen);
        } else {
          setIsLangListOpen(false);
        }
      };
      window.addEventListener("click", handleClickOutside);
      return () => {
        window.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isLangListOpen, langToggleRef]);

  return (
    <>
      <header className="tp-header-area tp-header-height p-relative">
        <div className="tp-header-top tp-header-space d-none d-xl-block">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-6 col-xl-8">
                <div className="tp-header-top-info">
                  <ul>
                    <li>
                      <a
                        href="https://maps.app.goo.gl/9A79YPfgniXgxM7K8"
                        target="_blank"
                      >
                        <span>
                          <i className="fa-sharp fa-solid fa-location-dot"></i>
                        </span>
                        Ortahisar / Trabzon
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${data.email}`}>
                        <span>
                          <i className="fa-solid fa-envelope"></i>
                        </span>
                        {data.email}
                      </a>
                    </li>
                    <li>
                      <div className="tp-header-lang-wrapper d-flex align-items-center">
                        <div className="tp-header-lang-img">
                          <Image width={20} height={20} src={LangLogo} alt="theme-pure" />
                        </div>
                        <div className="tp-header-lang">
                          <span
                            className="tp-header-lang-selected-lang tp-lang-toggle"
                            id="tp-header-lang-toggle"
                            ref={langToggleRef}
                          >
                            عربي
                          </span>

                          <ul
                            className={`tp-header-lang-list tp-lang-list ${
                              isLangListOpen ? "tp-lang-list-open" : ""
                            }`}
                          >
                            <li><Link href={"/"}>Türkçe</Link></li>
                            <li><Link href={"/en"}>English</Link></li>
                            <li><Link href={"/ar"}>عربي</Link></li>
                            <li><Link href={"/geo"}>ქართული</Link></li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-4">
                <div className="tp-header-top-right d-flex justify-content-end align-items-center">
                  <div className="header-call">
                    <a href={`tel:${data.phone_1_call}`}>
                      <i className="fa-solid fa-phone"></i>{data.phone_1}
                    </a>
                  </div>

                  <div className="header-call">
                    <a href={`tel:${data.phone_2_call}`}>
                      <i className="fa-solid fa-phone"></i>{data.phone_2}
                    </a>
                  </div>
                  <div className="header-social d-xxl-block d-none">
                    <Link href={data.facebook}>
                      <i className="fa-brands fa-facebook"></i>
                    </Link>
                    <Link href={data.twitter}>
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                    <Link href={data.instagram}>
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                    <Link href={data.youtube}>
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                    <Link href={data.linkedin}>
                      <i className="fa-brands fa-linkedin"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="header-sticky"
          className={`tp-header-bottom header__sticky p-relative ${
            sticky && "tp-header-sticky"
          }`}
        >
          <div className="tp-header-bottom-space p-relative">
            <div className="container-fluid gx-0">
              <div className="row gx-0 align-items-center">
                <div className="col-xxl-3 col-xl-3">
                  <div className="tp-header-main-left d-flex align-items-center p-relative">
                    <div
                      className="tp-header-hamburger-btn offcanvas-open-btn"
                      style={{
                        backgroundImage: `url(/assets/img/icon/header-hamburger-shape.png)`,
                      }}
                      onClick={() => setSidebarOpen(true)}
                    >
                      <button className="hamburger-btn">
                        <span>
                          {" "}
                          <HamburgerBtn />
                        </span>
                      </button>
                    </div>
                    <div className="tp-header-logo">
                      <Link href="/ar">
                        <img src={`${process.env.NEXT_PUBLIC_IP}${data.logo.data.attributes.url}`} alt="theme-pure" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-9 col-xl-9 d-none d-xl-block">
                  <div className="tp-main-menu-area counter d-flex align-items-center">
                    <div className="tp-main-menu menu-icon">
                      <span className="header-icon">
                        <HomeIcon />
                      </span>
                      <nav id="tp-mobile-menu">
                        <NavMenu />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} /> */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} data={data} />
    </>
  );
};

export default HeaderOne;
