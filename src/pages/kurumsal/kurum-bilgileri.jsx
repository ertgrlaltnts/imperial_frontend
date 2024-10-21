import React from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import MetinIcerik from "../../components/homes/home-3/metin-icerik";
import Footer from "@/src/layout/footers/footer";
import axios from "axios";

export default function Kurum({general}) {
  return (
    <Wrapper>
      <SEO
        pageTitle={"Kurum Bilgileri | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />

      <main>
        <Breadcrumb top_title="KURUM BİLGİLERİ" page_title="KURUM BİLGİLERİ" />
        {/* <MetinIcerik about={true} /> */}
        <section className={`${"tp-about-3-area pt-65 pb-65"} p-relative`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <table style={{ width: "100%" }} class="tg">
                  <thead>
                    <tr>
                      <th class="tg-khj6">
                        <span>Şirket Adı</span>
                      </th>
                      <th class="tg-7crz">
                        ANADOLU ÖZEL SAĞLIK. HİZ.OTOMOTİV TUR. VE TİC. A.Ş.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="tg-jsbe">
                        <span>Şirket Türü</span>
                      </td>
                      <td class="tg-2oa3">: Anonim Şirket</td>
                    </tr>
                    <tr>
                      <td class="tg-khj6">
                        <span>MERSIS</span>
                      </td>
                      <td class="tg-7crz">: 0-0680 644 764 000 16</td>
                    </tr>

                    <tr>
                      <td class="tg-2oa3"></td>
                      <td class="tg-2oa3"></td>
                    </tr>

                    <tr>
                      <td class="tg-mh5v">
                        <span>Ticaret Sicil Numarası</span>
                      </td>
                      <td class="tg-jn0s">: 13545</td>
                    </tr>
                    <tr>
                      <td class="tg-w1dh">
                        <span>Adres</span>
                      </td>
                      <td class="tg-av16">
                        : Kemerkaya Mah. Devlet Sahil Yolu Cad. İmperial Hast.
                        No: 5 Ortahisar/ Trabzon
                      </td>
                    </tr>
                    <tr>
                      <td class="tg-mh5v">
                        <span>Sermaye</span>
                      </td>
                      <td class="tg-jn0s">:</td>
                    </tr>
                    <tr>
                      <td class="tg-w1dh">
                        <span>Şirket Tescil Tarihi</span>
                      </td>
                      <td class="tg-av16">:</td>
                    </tr>
                    <tr>
                      <td class="tg-mh5v">
                        <span>Vergi Dairesi</span>
                      </td>
                      <td class="tg-jn0s">: Karadeniz Vergi Dairesi</td>
                    </tr>
                    <tr>
                      <td class="tg-w1dh">
                        <span>Vergi Numarası</span>
                      </td>
                      <td class="tg-av16">: 0680644764</td>
                    </tr>
                    <tr>
                      <td class="tg-mh5v">
                        <span>Sektör</span>
                      </td>
                      <td class="tg-jn0s">: Sağlık, Turizm, İşletme</td>
                    </tr>
                    <tr>
                      <td class="tg-2oa3">İletişim</td>

                      <td class="tg-2oa3"></td>
                    </tr>
                    <tr>
                      <td class="tg-mh5v">
                        <span>Telefon</span>
                      </td>
                      <td class="tg-jn0s">: +90 462 444 44 61</td>
                    </tr>
                    <tr>
                      <td class="tg-w1dh">
                        <span>Faks</span>
                      </td>
                      <td class="tg-av16">: +90 462 321 36 30</td>
                    </tr>
                    <tr>
                      <td class="tg-mh5v">
                        <span>E-posta</span>
                      </td>
                      <td class="tg-jn0s">: info@imperialhastanesi.com</td>
                    </tr>

                    <tr>
                      <td class="tg-w1dh">
                        <span>İnternet Adresi</span>
                      </td>
                      <td class="tg-av16">: www.imperialhastanesi.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

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