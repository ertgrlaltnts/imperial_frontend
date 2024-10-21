import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import axios from "axios";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-en";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Appointment from "@/src/svg/calendar";
import Update from "@/src/components/update/en";

export default function Bolum({ data, doctors, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={`${data.en.title} | Imperial Hospital Trabzon`}
        description={
          "Serving in Trabzon, Imperial Hospital offers expert healthcare services with a wide range of medical units from cardiology to orthopedics, gynecology to neurology. Reliable diagnostic and treatment solutions for your health."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={data.en.title} page_title={data.en.title} />
        <section className="tp-portfolio-details-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-portfolio-details-wrapper">
                  <h3 className="tp-portfolio-details-title">
                    {data.en.title}
                  </h3>
                  <Markdown>{data.en.text}</Markdown>
                </div>
              </div>
              {/* <BirimlerDoktor data={doctors} /> */}

              <div className="container">
                <div className="row">
                  {doctors.length > 0 && (
                    <h3
                      style={{ marginBottom: 40 }}
                      className="tp-portfolio-details-title"
                    >
                      Our Related Physicians
                    </h3>
                  )}

                  {doctors.map((item, index) => (
                    <div className="col-lg-3" key={index}>
                      <div
                        style={{ marginBottom: 25 }}
                        className="tp-team-wrapper p-relative"
                      >
                        <Link href={`/en/hekimlerimiz/${item.attributes.slug}`}>
                          <div className="tp-team-wrapper-thumb">
                            <img
                              src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                              alt="theme-pure"
                              width={510}
                              height={510}
                            />
                          </div>
                        </Link>
                        <div className="tp-team-wrapper-content p-0 align-items-center justify-content-center">
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
                              <Link
                                href={`/en/hekimlerimiz/${item.attributes.slug}`}
                              >
                                {item.attributes.name}
                              </Link>
                            </h3>
                            <p style={{ textAlign: "center", marginBottom: 0 }}>
                              {item.attributes.en.job}
                            </p>
                          </div>
                          {item.attributes.randevu_link && (
                            <Link href={item.attributes.randevu_link}>
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
                                  Online Appointment
                                </h3>

                                <Appointment />
                              </div>
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Update data={data.update} />
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
    `${process.env.NEXT_PUBLIC_IP}/api/birims?populate=deep&pagination[limit]=100`
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
    `${process.env.NEXT_PUBLIC_IP}/api/birims?filters[slug][$eq]=${params.slug}&populate=deep`
  );

  const response2 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?filters[categories][category][$eq]=${params.slug}&populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data[0].attributes,
      doctors: response2.data.data,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
