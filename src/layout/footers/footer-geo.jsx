import React from "react";
import Link from "next/link";
import { CopyRight } from "@/src/common/social-links";


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
                    <a href="/geo">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-2">
                  <h3 className="tp-footer-widget-title">ნავიგაცია</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/geo">საწყისი გვერდი</Link>
                      </li>

                      <li>
                        <Link href="/geo/kurumsal/hakkimizda">ჩვენს შესახებ</Link>
                      </li>

                      <li>
                        <Link href="/geo/tibbi-birimlerimiz">
                        ჩვენი სამედიცინო განყოფილებები
                        </Link>
                      </li>

                      <li>
                        <Link href="/geo/hekimlerimiz">ჩვენი ექიმები</Link>
                      </li>

                      <li>
                        <Link href="/geo/idari-birimlerimiz">ჩვენი ადმინისტრაციული ერთეულები</Link>
                      </li>

                      <li>
                        <Link href="/geo/saglik-rehberi">ჯანმრთელობის გზამკვლევი</Link>
                      </li>

                      <li>
                        <Link href="/geo/bilgilendirme/duyurular">განცხადებები</Link>
                      </li>

                      <li>
                        <Link href="/geo/iletisim">კომუნიკაცია</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">ინსტიტუციონალური</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/geo/bilgilendirme/bashekimin-mesaji">
                        მესიჯი მთავარი ექიმისგან
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/bilgilendirme/aydinlatma-metni">
                        განმარტებითი ტექსტი
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/bilgilendirme/calisan-adaylarina-aydinlatma-metni">
                        C. ა. საინფორმაციო ტექსტი
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/bilgilendirme/kvkk-belgeleri">
                        KVKK დოკუმენტები
                        </Link>
                      </li>
                      <li>
                        <Link href="/geo/bilgilendirme/cctv-aydinlatma-metni">
                        CCTV განმარტებითი ტექსტი
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">ონლაინ სერვისები</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href={data.online_randevu}>ონლაინ დანიშვნა</Link>
                      </li>
                      <li>
                        <Link href={data.online_sonuc}>ონლაინ შედეგი</Link>
                      </li>
                      <li>
                        <Link href={data.goruntulu_muayene}>
                        ვიდეო ინსპექტირება
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
