import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import axios from "axios";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Link from "next/link";
import Update from "@/src/components/update";

export default function Bolumler({ data, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={`Tıbbi Birimlerimiz | İmperial Hastanesi Trabzon`}
        description={
          "Trabzon'da hizmet veren İmperial Hastanesi, kardiyolojiden ortopediye, kadın doğumdan nörolojiye kadar geniş bir yelpazede tıbbi birimlerle uzman sağlık hizmetleri sunuyor. Sağlığınız için güvenilir teşhis ve tedavi çözümleri."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb
          top_title="TIBBİ BİRİMLERİMİZ"
          page_title="TIBBİ BİRİMLERİMİZ"
        />
        <>
          <section className="tp-portfolio-area pt-120 pb-60">
            <div className="container">
              <div className="row">
                {data.map((item, index) => (
                  <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                    <div className="tp-portfolio-item-wrapper">
                      <div className="tp-portfolio-item-thumb">
                        <img
                          src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`}
                          alt="bolumler"
                        />
                      </div>
                      <div className="tp-portfolio-item-content">
                        <h3 className="tp-portfolio-item-title">
                          <Link
                            href={`/tibbi-birimlerimiz/${item.attributes.slug}`}
                          >
                            {item.attributes.tr.title}
                          </Link>
                        </h3>
                        <div className="tp-portfolio-item-content-btn">
                          <Link
                            href={`/tibbi-birimlerimiz/${item.attributes.slug}`}
                          >
                            Birime Göz At
                            <i className="fa-regular fa-arrow-right"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Update data={data[0].attributes.update} />
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
    `${process.env.NEXT_PUBLIC_IP}/api/birims?populate=deep&pagination[limit]=100`
  );

  const sortedData = response.data.data.sort((a, b) => {
    const titleA = a.attributes.tr.title.toLowerCase();
    const titleB = b.attributes.tr.title.toLowerCase();

    return titleA.localeCompare(titleB, "tr");
  });

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: sortedData,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}