import React from "react";
import Wrapper from "@/src/layout/wrapper";
import SEO from "@/src/common/seo";
import HeaderOne from "@/src/layout/headers-ar/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-ar";
import Markdown from "markdown-to-jsx";
import Tags from "@/src/components/blog/tags";
import UserProfile from "@/src/components/blog/user-profile-ar";
import axios from "axios";
import Update from "@/src/components/update/ar";

export default function Yazi({ data, general }) {
  return (
    <Wrapper>
      <SEO pageTitle={`${data.ar.title} | Imperial Hospital Trabzon`} description={data.ar.meta_description} />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={data.ar.title} page_title={data.ar.title} />
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
                    {data.ar.text}
                  </Markdown>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4">
                <div className="sidebar__wrapper">
                  <UserProfile />
                  <Tags data={data.ar.words} />
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

const fetchAllSlugs = async () => {
  const slugs = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/yazis?populate=deep`
  );

  return slugs.data.data.map((item) => item.attributes.slug);
};

export async function getStaticPaths() {
  const slugs = await fetchAllSlugs();

  const paths = slugs.map((slug) => ({
    params: { slug }, // Bu kısım, slug parametresini dinamik hale getirir
  }));

  return {
    paths,
    fallback: false, // slug bulunamazsa 404 verir
  };
}

export async function getStaticProps({ params }) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/yazis?filters[slug][$eq]=${params.slug}&populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data[0].attributes,
      general: general.data.data.attributes
    },
    revalidate: 10,
  };
}
