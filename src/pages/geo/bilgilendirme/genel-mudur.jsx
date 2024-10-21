import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-geo";
import Markdown from "markdown-to-jsx";
import UserProfile from "@/src/components/blog/user-profile-geo";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function Yazi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"გენერალური მენეჯერი | Imperial Hospital Trabzon"}
        description={
          "Providing quality health services in Trabzon, Imperial Hospital is the address of trust in health with its expert doctor staff and modern technology. Trust us with your health with professional diagnosis and treatment opportunities in every branch."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={"გენერალური მენეჯერი"} page_title={"გენერალური მენეჯერი"} />
        <section className={`${"tp-about-breadcrumb pt-60 pb-60"} p-relative`}>
          <div className="container">
            <div className="row">
              <div style={{ marginBottom: 80 }} className="col-lg-8">
                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    className="blog_main_img"
                    src={`${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`}
                    alt="theme-pure"
                  />
                </div>

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
                    {data.geo.text}
                  </Markdown>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <UserProfile />
                </div>
              </div>
              <Update data={data.update} />
            </div>
          </div>
        </section>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/bilgilendirme?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes.mudur,
      general: general.data.data.attributes
    },
    revalidate: 10,
  };
}
