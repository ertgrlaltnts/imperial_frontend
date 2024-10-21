import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import Markdown from "markdown-to-jsx";
import Tags from "@/src/components/blog/tags";
import UserProfile from "@/src/components/blog/user-profile";
import axios from "axios";
import Update from "@/src/components/update";

export default function Yazi({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Genel Müdür | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={"Genel Müdür"} page_title={"Genel Müdür"} />
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
                    {data.tr.text}
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
