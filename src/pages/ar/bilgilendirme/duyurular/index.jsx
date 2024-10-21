import React from "react";
import Wrapper from "../../../../layout/wrapper";
import SEO from "../../../../common/seo";
import HeaderOne from "@/src/layout/headers-ar/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import RightArrow from "@/src/svg/right-arrow";
import Link from "next/link";
import Footer from "@/src/layout/footers/footer-ar";
import axios from "axios";
import { add3Dots } from "@/src/hooks/add3Dots";
import Update from "@/src/components/update/ar";

export default function Duyuru({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"إعلانات | Imperial Hospital Trabzon"}
        description={
          "تابع الإعلانات الحالية لمستشفى إمبريال الذي يتميز بخدماته الصحية في طرابزون. أخبار ومعلومات مهمة من مستشفانا هنا."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="الإعلانات" page_title="الإعلانات" />
        <>
          <section className="tp-blog-area pt-80 pb-60">
            <div className="container container-large">
              <div className="row">
                {data.map((item, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="tp-blog-wrapper mb-30">
                      <div className="tp-blog-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                          alt="theme-pure"
                        />

                        <div className="tp-blog-tag">
                          <p style={{ color: "#fff" }}>إعلان</p>
                        </div>
                      </div>
                      <div className="tp-blog-content">
                        <div className="tp-blog-details "></div>
                        <h3 className="tp-blog-title">
                          <Link
                            href={`/ar/bilgilendirme/duyurular/${item.attributes.slug}`}
                          >
                            {add3Dots(item.attributes.ar.title, 30)}
                          </Link>
                        </h3>
                        <div className="tp-blog-btn d-flex justify-content-between">
                          <div className="read-more p-relative">
                            <Link
                              href={`/ar/bilgilendirme/duyurular/${item.attributes.slug}`}
                            >
                              إقرأ الإعلان{" "}
                              <span>
                                {" "}
                                <RightArrow />{" "}
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Update data={"14.10.2024"} />
              </div>
            </div>
          </section>
        </>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/duyurus?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.reverse(),
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
