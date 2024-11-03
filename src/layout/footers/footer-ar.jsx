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
                    <a href="/ar">
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
                  <h3 className="tp-footer-widget-title">ملاحة</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/ar">الصفحة الرئيسية</Link>
                      </li>

                      <li>
                        <Link href="/ar/kurumsal/hakkimizda">معلومات عنا</Link>
                      </li>

                      <li>
                        <Link href="/ar/tibbi-birimlerimiz">
                        وحداتنا الطبية
                        </Link>
                      </li>

                      <li>
                        <Link href="/ar/hekimlerimiz">أطباؤنا</Link>
                      </li>

                      <li>
                        <Link href="/ar/idari-birimlerimiz">وحداتنا الإدارية</Link>
                      </li>

                      <li>
                        <Link href="/ar/saglik-rehberi">دليل الصحة</Link>
                      </li>

                      <li>
                        <Link href="/ar/bilgilendirme/duyurular">إعلانات</Link>
                      </li>

                      <li>
                        <Link href="/ar/iletisim">تواصل</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">المؤسسية</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href="/ar/bilgilendirme/bashekimin-mesaji">
                        رسالة من كبير الأطباء
                        </Link>
                      </li>
                      <li>
                        <Link href="/ar/bilgilendirme/aydinlatma-metni">
                        نص التوضيح
                        </Link>
                      </li>
                      <li>
                        <Link href="/ar/bilgilendirme/calisan-adaylarina-aydinlatma-metni">
                        ج. أ. نص المعلومات
                        </Link>
                      </li>
                      <li>
                        <Link href="/ar/bilgilendirme/kvkk-belgeleri">
                        وثائق KVKK
                        </Link>
                      </li>
                      <li>
                        <Link href="/ar/bilgilendirme/cctv-aydinlatma-metni">
                        نص توضيحي لكاميرات المراقبة
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="tp-footer-widget tp-footer-col-3">
                  <h3 className="tp-footer-widget-title">الخدمات عبر الإنترنت</h3>
                  <div className="tp-footer-widget-content">
                    <ul>
                      <li>
                        <Link href={data.online_randevu}>موعد عبر الإنترنت</Link>
                      </li>
                      <li>
                        <Link href={data.online_sonuc}>النتيجة على الانترنت</Link>
                      </li>
                      <li>
                        <Link href={data.goruntulu_muayene}>
                        فحص الفيديو
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
