import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import Markdown from "markdown-to-jsx";
import Tags from "../../../components/blog/tags";
import UserProfile from "../../../components/blog/user-profile";
import axios from "axios";
import Update from "@/src/components/update";

export default function Duyuru({data, general}) {
  return (
    <Wrapper>
      <SEO pageTitle={`${data.tr.title} | Duyurular | İmperial Hastanesi Trabzon`} />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={data.tr.title} page_title={data.tr.title} />
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
                  <Tags data={data.tr.words} />
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
    `${process.env.NEXT_PUBLIC_IP}/api/duyurus?populate=deep`
  );
  
  return slugs.data.data.map(item => item.attributes.slug);
}


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


export async function getStaticProps({params}) {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/duyurus?filters[slug][$eq]=${params.slug}&populate=deep`
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