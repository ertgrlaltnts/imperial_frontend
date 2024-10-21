import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../layout/footers/footer";
import SEO from "../common/seo";
import HeaderOne from "../layout/headers/header";
import error_shape from "@assets/img/error/error-shape.png";
import error_img from "@assets/img/error/404.png";
import axios from "axios";

export default function NotFound ({general}){
  return (
    <>
      <SEO
        pageTitle={"Sayfa bulunamadı | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="tp-error-area tp-error-ptb p-relative">
              <div className="tp-error-left-shape">
                <Image src={error_shape} alt="theme-pure" />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-content-box text-center">
                      <Image src={error_img} alt="theme-pure" />
                    </div>
                    <div className="tp-error-text-box text-center">
                      <h4 className="error-title-sm">Sayfa Bulunamadı !</h4>

                      <Link className="tp-btn-inner alt-color-black" href="/">
                        <span className="tp-btn"> Anasayfaya Dön</span>
                        <b></b>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer data={general} />
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}