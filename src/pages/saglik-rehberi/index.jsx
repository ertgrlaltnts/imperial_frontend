import React, { useState } from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import RightArrow from "@/src/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/src/layout/footers/footer";
import { add3Dots } from "@/src/hooks/add3Dots";
import axios from "axios";

export default function Saglik({ data, general }) {
  const [guides, setGuides] = useState(data);

  const filterGuides = (letter) => {
    const temp = data.filter(
      (item, index) => item.attributes.tr.letter === letter
    );

    setGuides(temp);
  };

  const getAllGuides = () => {
    setGuides(data);
  };

  return (
    <Wrapper>
      <SEO
        pageTitle={`İmperial Hastanesi Trabzon | Sağlık Rehberi`}
        description={
          "Trabzon'da bulunan İmperial Hastanesi'nin Sağlık Rehberi ile sağlık konularında güvenilir bilgiye ulaşın. Uzman doktorların önerileri, hastalıklar ve tedavi yöntemleri hakkında detaylı bilgilere erişin, sağlığınızı koruyun."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="SAĞLIK REHBERİ" page_title="SAĞLIK REHBERİ" />
        <>
          <section className="tp-blog-area pt-30 pb-60">
            <div className="container container-large">
              <div className="guide-letters-row">
                {[
                  "A",
                  "B",
                  "C",
                  "D",
                  "E",
                  "F",
                  "G",
                  "H",
                  "I",
                  "İ",
                  "J",
                  "K",
                  "L",
                  "M",
                  "N",
                  "O",
                  "Ö",
                  "P",
                  "R",
                  "S",
                  "Ş",
                  "T",
                  "U",
                  "Ü",
                  "V",
                  "Y",
                  "Z",
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => filterGuides(`${item}`)}
                    className="guide-letters-item"
                  >
                    {item}
                  </div>
                ))}
                <div
                  onClick={getAllGuides}
                  className="guide-letters-item"
                  style={{ width: 80, backgroundColor: "#022746" }}
                >
                  TÜMÜ
                </div>
              </div>

              <div className="row">
                {guides.map((item, i) => (
                  <div key={i} className="col-lg-3 col-md-4">
                    <div className="tp-blog-wrapper mb-30">
                      <div className="tp-blog-thumb">
                        <img
                          style={{ objectFit: "cover" }}
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                          alt="theme-pure"
                        />

                        <div className="tp-blog-tag">
                          <p style={{ color: "#fff" }}>Rehber</p>
                        </div>
                      </div>
                      <div className="tp-blog-content">
                        <div className="tp-blog-details "></div>
                        <h3 className="tp-blog-title">
                          <Link href={`saglik-rehberi/${item.attributes.slug}`}>
                            <>{add3Dots(item.attributes.tr.title, 40)}</>
                          </Link>
                        </h3>

                        <div>
                          <p
                            style={{
                              color: "#000",
                              lineHeight: "20px",
                              fontSize: 13,
                            }}
                          >
                            {add3Dots(item.attributes.tr.text, 90)}
                          </p>
                        </div>
                        <div className="tp-blog-btn d-flex justify-content-between">
                          <div className="read-more p-relative">
                            <Link
                              href={`saglik-rehberi/${item.attributes.slug}`}
                            >
                              Yazıyı Oku{" "}
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
    `${process.env.NEXT_PUBLIC_IP}/api/sagliks?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
