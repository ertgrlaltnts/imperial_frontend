import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import Footer from "@/src/layout/footers/footer-geo";
import Link from "next/link";
import axios from "axios";
import Appointment from "@/src/svg/calendar";
import Markdown from "markdown-to-jsx";
import Update from "@/src/components/update/geo";

export default function Doctor({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={`${data.name} | ჩვენი ექიმები | Imperial Hospital Trabzon`}
        description={
          "Providing safe healthcare services in Trabzon, Imperial Hospital provides the best treatment opportunities to its patients with expert physicians in their fields. Meet our physicians."
        }
      />
      <HeaderOne data={general} />
      <main>
        <section className="tp-team-details-area p-relative pt-60 pb-90">
          <div className="tp-team-details-shape"></div>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                  className="tp-team-details-thumb p-relative text-center fadeLeft"
                >
                  <div className="tp-team-details-thumb-photo">
                    <img
                      src={`${process.env.NEXT_PUBLIC_IP}${data.image.data.attributes.url}`}
                      alt="theme-pure"
                      style={{ width: 350, objectFit: "contain" }}
                    />
                  </div>
                  <div
                    style={{
                      width: "100%",
                      backgroundColor: "#022746",
                      padding: "6px 0",
                    }}
                    className="tp-team-wrapper-content-text"
                  >
                    <h3
                      style={{ color: "#fff" }}
                      className="team-title text-center"
                    >
                      {data.name}
                    </h3>
                    <p style={{ textAlign: "center", marginBottom: 0 }}>
                      {data.geo.job}
                    </p>
                  </div>

                  {data.randevu_link && (
                    <Link style={{ width: "100%" }} href={data.randevu_link}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          background: "#e10f21",
                          padding: "8px 0",
                        }}
                      >
                        <div style={{ opacity: 0 }}>
                          <Appointment />
                        </div>
                        <h3
                          style={{
                            fontSize: 18,
                            marginBottom: 0,
                            color: "#fff",
                          }}
                        >
                          ონლაინ დანიშვნა
                        </h3>

                        <Appointment />
                      </div>
                    </Link>
                  )}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="tp-team-details-wrapper fadeRight">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="tp-team-detials-designation-wrapper">
                        <div className="tp-team-details-designation-content">
                          <h4 className="tp-team-details-designation-title">
                            {data.name}
                          </h4>
                          <p className="tp-team-details-designation">
                            {data.geo.job}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tp-team-details-info">
                    <Markdown
                      style={{
                        position: "relative",
                        fontWeight: 400,
                        fontSize: 16,
                        color: "#535353",
                      }}
                    >
                      {data.geo.text}
                    </Markdown>
                  </div>
                  <div className="row">
                    {data.hafta_ici && (
                      <div className="col-lg-6">
                        <div
                          style={{
                            background: "#022746",
                            color: "#fff",
                            padding: "10px 0",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 8,
                          }}
                        >
                          შუა კვირა: {data.hafta_ici}
                        </div>
                      </div>
                    )}

                    {data.hafta_sonu && (
                      <div className="col-lg-6">
                        <div
                          style={{
                            background: "#022746",
                            color: "#fff",
                            padding: "10px 0",
                            textAlign: "center",
                            fontWeight: "bold",
                            marginTop: 8,
                          }}
                        >
                          შაბათი: {data.hafta_sonu}
                        </div>
                      </div>
                    )}
                  </div>
                  <Update data={data.update} />
                </div>
              </div>
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
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep&pagination[limit]=100`
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
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?filters[slug][$eq]=${params.slug}&populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data[0].attributes,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
