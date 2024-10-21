import React from "react";
import Link from "next/link";
import Image from "next/image";
import footer_logo from "@assets/img/logo/logo.png";
import { CopyRight } from "@/src/common/social-links";

const footer_content = {
  contact_us: (
    <>
      {" "}
      Mail adresimiz <span>info@imperialhastanesi.com </span>
    </>
  ),
  mail: "info@imperialhastanesi.com",
  contact_text: "İLETİŞİM HATTIMIZ",
  phone: "04624556425",
  map: "https://maps.app.goo.gl/Dp3XKBJbRsUDFpNZ7",
  address: <>Kemerkaya Mah. Devlet Sahil Yolu Cad. Ortahisar / Trabzon</>,
  mail_2: "info@imperialhastanesi.com",
  mail_phone: (
    <>
      {" "}
      info@imperialhastanesi.com <br />
      0462 455 64 64
    </>
  ),

  service_links: [
    "Anasayfa",
    "Hakkımızda",
    "Tıbbi Birimlerimiz",
    "Hekimlerimiz",
    "İletişim",
  ],
};
const { map, address, mail_2 } = footer_content;

const Footer = ({ data }) => {
  return (
    <>
      <footer className="tp-footer-area p-relative">
        <div
          className="tp-footer-bg"
          style={{ backgroundImage: `url(/assets/img/footer/footer-bg.png)` }}
        ></div>

        <div className="container container-large">
          <div className="tp-footer-main-area">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-1">
                  <div className="tp-footer-logo">
                    <a href="index.html">
                      {" "}
                      <img
                        src={`${process.env.NEXT_PUBLIC_IP}${data.logo_white.data.attributes.url}`}
                        alt="theme-pure"
                      />
                    </a>
                  </div>
                  <div className="tp-footer-widget-content">
                    <div className="tp-footer-info">
                      <div className="tp-footer-media">
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
                      <div className="tp-footer-main-location">
                        <a
                          target="_blank"
                          href={"https://maps.app.goo.gl/9A79YPfgniXgxM7K8"}
                        >
                          {" "}
                          <i className="fa-sharp fa-light fa-location-dot"></i>
                          {data.address}
                        </a>
                      </div>
                      <div className="tp-footer-main-mail">
                        <a href={`mailto:${data.email}`}>
                          <i className="fa-light fa-message-dots"></i>
                          {data.email}
                        </a>
                      </div>

                      <div
                        style={{ marginTop: 10 }}
                        className="tp-footer-main-mail"
                      >
                        <a href={`tel:${data.phone_1_call}`}>
                          <i className="fa-light fa-phone"></i>
                          {data.phone_1}
                        </a>
                      </div>

                      <div className="tp-footer-main-mail">
                        <a href={`tel:${data.phone_2_call}`}>
                          <i className="fa-light fa-phone"></i>
                          {data.phone_2}
                        </a>
                      </div>

                      <div className="tp-footer-main-mail">
                        <a href={`tel:${data.phone_3_call}`}>
                          <i className="fa-light fa-phone"></i>
                          {data.phone_3}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-2">
                  <h3 className="tp-footer-widget-title">Navigasyon</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/">Anasayfa</Link>
                      </li>

                      <li>
                        <Link href="/kurumsal/hakkimizda">Hakkımızda</Link>
                      </li>

                      <li>
                        <Link href="/tibbi-birimlerimiz">
                          Tıbbi Birimlerimiz
                        </Link>
                      </li>

                      <li>
                        <Link href="/hekimlerimiz">Hekimlerimiz</Link>
                      </li>

                      <li>
                        <Link href="/saglik-rehberi">Sağlık Rehberi</Link>
                      </li>

                      <li>
                        <Link href="/bilgilendirme/duyurular">Duyurular</Link>
                      </li>

                      <li>
                        <Link href="/iletisim">İletişim</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">Kurumsal</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/bilgilendirme/bashekimin-mesaji">
                          Başhekimin Mesajı
                        </Link>
                      </li>

                      <li>
                        <Link href="/bilgilendirme/genel-mudur">
                          Genel Müdür
                        </Link>
                      </li>
                      <li>
                        <Link href="/bilgilendirme/aydinlatma-metni">
                          Aydınlatma Metni
                        </Link>
                      </li>
                      <li>
                        <Link href="/bilgilendirme/calisan-adaylarina-aydinlatma-metni">
                          Ç. A. Aydınlatma Metni
                        </Link>
                      </li>
                      <li>
                        <Link href="/bilgilendirme/kvkk-belgeleri">
                          KVKK Belgeleri
                        </Link>
                      </li>
                      <li>
                        <Link href="/bilgilendirme/cctv-aydinlatma-metni">
                          CCTV Aydınlatma Metni
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">Online Hizmetler</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href={data.online_randevu}>Online Randevu</Link>
                      </li>
                      <li>
                        <Link href={data.online_sonuc}>Online Sonuç</Link>
                      </li>
                      <li>
                        <Link href={data.goruntulu_muayene}>
                          Görüntülü Muayene
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tp-footer-copyright-area p-relative">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner">
                  <p>
                    <CopyRight />{" "}
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="tp-footer-copyright-inner text-lg-end">
                  <Link href="https://wesoco.com/">
                    <img
                      style={{ width: 100, height: 20, objectFit: "contain" }}
                      src="https://wesoco.com/wp-content/uploads/2023/04/1-1-2048x507.png"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
