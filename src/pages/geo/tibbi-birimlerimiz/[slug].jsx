import React from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-geo/header";
import axios from "axios";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer-geo";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Appointment from "@/src/svg/calendar";
import Update from "@/src/components/update/geo";

export default function Bolum({ data, doctors, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={`${data.geo.title} | Imperial Hospital Trabzon`}
        description={
          "საიმპერატორო ჰოსპიტალი, რომელიც მსახურობს ტრაპიზონში, გთავაზობთ ექსპერტთა ჯანდაცვის სერვისებს სამედიცინო განყოფილებების ფართო სპექტრით, კარდიოლოგიიდან ორთოპედიამდე, გინეკოლოგიიდან ნევროლოგიამდე. საიმედო დიაგნოსტიკური და სამკურნალო გადაწყვეტილებები თქვენი ჯანმრთელობისთვის."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title={data.geo.title} page_title={data.geo.title} />
        <section className="tp-portfolio-details-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-portfolio-details-wrapper">
                  <h3 className="tp-portfolio-details-title">
                    {data.geo.title}
                  </h3>
                  <Markdown>{data.geo.text}</Markdown>
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
                      ჩვენი დაკავშირებული ექიმები
                    </h3>
                  )}

                  {doctors.map((item, index) => (
                    <div className="col-lg-3" key={index}>
                      <div
                        style={{ marginBottom: 25 }}
                        className="tp-team-wrapper p-relative"
                      >
                        <Link href={`/geo/hekimlerimiz/${item.attributes.slug}`}>
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
                                href={`/geo/hekimlerimiz/${item.attributes.slug}`}
                              >
                                {item.attributes.name}
                              </Link>
                            </h3>
                            <p style={{ textAlign: "center", marginBottom: 0 }}>
                              {item.attributes.geo.job}
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
                                  ონლაინ დანიშვნა
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
