import React from "react";
import BirimlerDoktor from "../../common/birim-doktor";
import Markdown from "markdown-to-jsx";

const portfolio_detaisl_contact = {
  title_1: "DİYETİSYEN",
  description_1: (
    <>
      Beslenme ve diyet uzmanımız Ayca Yılmaz, obezite (şişmanlık) nedeniyle
      polikliniğe başvuran hastalarımızın beslenme alışkanlıkları ve genel
      durumlarını değerlendirerek, diyet tedavileri konusunda bireysel eğitim
      vermektedir. Diyet polikliniğimizde obezite tedavisinin yanı sıra beslenme
      ve diyet tedavisi gerektiren tüm durumlar için (gebelik, adölesan
      beslenmesi, çocuk beslenmesi, diyabet, kalp hastalıkları, karaciğer
      hastalıkları ve diğer metabolik hastalıklar gibi) bireysel eğitim
      verilmektedir. Yatan hastalarımızın tıbbi beslenme tedavileri planlanırken
      hekim ile beraber uygulanacak tedavi takip edilmektedir.
    </>
  ),
};
const { title_1, description_1 } = portfolio_detaisl_contact;

const PortfolioDetailsArea = () => {
  return (
    <>
      <section className="tp-portfolio-details-area pt-120 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-portfolio-details-wrapper">
                <h3 className="tp-portfolio-details-title">{title_1}</h3>
                {/*Markdown Yap !*/}
                <p>{description_1}</p>
              </div>
            </div>
            <BirimlerDoktor />
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsArea;
