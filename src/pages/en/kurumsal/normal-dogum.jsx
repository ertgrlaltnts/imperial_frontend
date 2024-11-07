import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Markdown from "markdown-to-jsx";
import Footer from "@/src/layout/footers/footer-en";
import axios from "axios";
import Update from "@/src/components/update/en";
import Link from "next/link";

export default function KalitePolitikasi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Normal Birth | Imperial Hospital Trabzon"}
        description={
          "As Imperial Hospital, we offer expectant mothers a safe and natural birth experience in Trabzon. With our expert team and modern equipment, we prioritize mother and baby health and encourage normal birth in a comfortable and supportive environment. We are with you for a healthy and peaceful start."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="NORMAL BIRTH" page_title="NORMAL BIRTH" />
        <section
          className={` tp-about-breadcrumb pt-100 pb-0
             p-relative`}
        >
          <div className="container">
            <div className="row">
              <div style={{ marginBottom: 30 }} className="col-lg-12">
                <div className="tp-about-3-wrapper">
                  <Markdown
                    style={{
                      position: "relative",
                      fontWeight: 400,
                      fontSize: 16,
                      color: "#535353",
                      marginLeft: 13,
                    }}
                  >
                    {data.en}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href={
                  "https://sggm.saglik.gov.tr/TR-106002/dogal-olan-normal-dogum.html#:~:text=Normal%20do%C4%9Fumdan%20sonra%20g%C3%BCnl%C3%BCk%20ya%C5%9Fama,do%C4%9Fumlar%C4%B1n%C4%B1%20da%20normal%20yolla%20yapabilir.&text=Normal%20do%C4%9Fum%2C%20do%C4%9Fum%20say%C4%B1s%C4%B1n%C4%B1%20s%C4%B1n%C4%B1rland%C4%B1rmaz.&text=%C4%B0leriki%20hayat%C4%B1nda%20ge%C3%A7irebilece%C4%9Fi%20kar%C4%B1n%20ameliyatlar%C4%B1%20i%C3%A7in%20bir%20risk%20ta%C5%9F%C4%B1maz"
                }
                className="pdf-block"
                style={{ marginBottom: 80 }}
              >
                <img
                  className="pdf-block-image"
                  alt="saglik-bakanligi"
                  src={"/assets/main/saglik-bakanligi.svg"}
                />
                <div>
                  <h3 className="pdf-block-title">
                    T.C. Sağlık Bakanlığı | Doğal Olan Normal Doğum
                  </h3>
                  <div className="pdf-block-title-2">
                  Click to view.
                  </div>
                </div>
                <div>
                  <img
                    className="pdf-block-click"
                    src="/assets/main/click.png"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
        <Update data={data.update} />
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/kurumsal?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes.normal_dogum,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
