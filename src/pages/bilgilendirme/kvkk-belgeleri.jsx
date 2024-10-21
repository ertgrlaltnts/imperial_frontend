import React, { useState } from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Footer from "@/src/layout/footers/footer";
import PdfIcon from "@assets/main/pdf.png";
import Modal from "react-modal";
import axios from "axios";

Modal.setAppElement("#__next");

export default function Kvkk({general}){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pdfSelect, setPdfSelect] = useState("");

  const openModal = (pdf) => {
    setModalIsOpen(true);
    setPdfSelect(pdf);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setPdfSelect("");
  };

  return (
    <Wrapper>
      <SEO
        pageTitle={"KVKK Belgeleri | İmperial Hastanesi Trabzon"}
        description={
          "Trabzon'da kaliteli sağlık hizmetleri sunan İmperial Hastanesi, uzman doktor kadrosu ve modern teknolojisiyle sağlıkta güvenin adresi. Her branşta profesyonel tanı ve tedavi imkanıyla sağlığınızı güvenle bize emanet edin."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="KVKK BELGELERİ" page_title="KVKK BELGELERİ" />

        <div style={{ marginTop: 50, marginBottom: 50 }} className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                onClick={() => openModal("/kvk-ve-gizlilik-politikasi.pdf")}
                className="pdf-block"
              >
                <img className="pdf-block-image" src={"/assets/main/pdf.png"} />
                <div>
                  <h3 className="pdf-block-title">
                    Kvkk ve Gizlilik Politikası
                  </h3>
                  <div className="pdf-block-title-2">
                    Görüntülemek için tıklayınız. (385 Kb)
                  </div>
                  <div className="pdf-block-title-3">
                    İndirmek için tıklayınız. (385 Kb)
                  </div>
                </div>
                <div>
                  <img
                    className="pdf-block-click"
                    src="/assets/main/click.png"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {" "}
              <div
                onClick={() =>
                  openModal(
                    "/ozel-nitelikli-kisisel-verilerin-k-111-runmasi.pdf"
                  )
                }
                className="pdf-block"
              >
                <img className="pdf-block-image" src={"/assets/main/pdf.png"} />
                <div>
                  <h3 className="pdf-block-title">Özel Nitelikli KVKK</h3>
                  <div className="pdf-block-title-2">
                    Görüntülemek için tıklayınız. (354 Kb)
                  </div>
                  <div className="pdf-block-title-3">
                    İndirmek için tıklayınız. (354 Kb)
                  </div>
                </div>
                <div>
                  <img
                    className="pdf-block-click"
                    src="/assets/main/click.png"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              {" "}
              <div
                style={{ marginTop: 0 }}
                onClick={() =>
                  openModal("/veri-saklama-ve-imha-politikasi.pdf")
                }
                className="pdf-block"
              >
                <img className="pdf-block-image" src={"/assets/main/pdf.png"} />
                <div>
                  <h3 className="pdf-block-title">Veri Saklama ve İmha</h3>
                  <div className="pdf-block-title-2">
                    Görüntülemek için tıklayınız. (385 Kb)
                  </div>
                  <div className="pdf-block-title-3">
                    İndirmek için tıklayınız. (385 Kb)
                  </div>
                </div>
                <div>
                  <img
                    className="pdf-block-click"
                    src="/assets/main/click.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
              width: "90%",
              height: "90%",
              padding: 0,
              margin: 0,
              border: "none",
              zIndex: "1000", // Z-index değerini yükseltiyoruz
              background: "transparent",
            },
            overlay: {
              zIndex: "999", // Overlay arka plan için de z-index ayarı
              background: "rgba(0, 0, 0, 0.7)",
            },
          }}
        >
          <iframe src={pdfSelect} style={{ width: "100%", height: "100%" }} />
        </Modal>
      </main>
      <Footer data={general} />
    </Wrapper>
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