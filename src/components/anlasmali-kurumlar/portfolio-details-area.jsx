import React from "react";
import Image from "next/image";

import portfolio_thumb from "@assets/img/portfolio/portfolio-details/img-1.jpg";
import portfolio_icon_1 from "@assets/img/portfolio/portfolio-details/icon-1.png";
import portfolio_icon_2 from "@assets/img/portfolio/portfolio-details/icon-2.png";
import portfolio_icon_3 from "@assets/img/portfolio/portfolio-details/icon-3.png";
import Link from "next/link";
import RightSymbol from "@/src/svg/right-symbol";
import ContactIcon from "@/src/svg/contact-icon";
import EmailIconTwo from "@/src/svg/email-icon-2";
import ClockIcon from "@/src/svg/clock-icon";
import SocialLinks from "@/src/common/social-links";

const PortfolioDetailsArea = () => {
  const list = [
    "https://data.cbonds.info/organisations_logos/15453/14933755491.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1702895069.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zurich-1686567098.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1706264553.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zilveren-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zh-1686567169.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/vakifbank-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/turkiyesig-1686567096.jpg",
    "https://data.cbonds.info/organisations_logos/15453/14933755491.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1702895069.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zurich-1686567098.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1706264553.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zilveren-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zh-1686567169.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/vakifbank-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/turkiyesig-1686567096.jpg",
    "https://data.cbonds.info/organisations_logos/15453/14933755491.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1702895069.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zurich-1686567098.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/Basliksiz-1-1706264553.png",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zilveren-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/zh-1686567169.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/vakifbank-1686567097.jpg",
    "https://www.imperialhastanesi.com/inc/dosyalar/page_771/img/turkiyesig-1686567096.jpg",
  ];

  return (
    <>
      <section className="tp-portfolio-details-area pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {list.map((item, index) => (
                  <div key={index} className="col-lg-2">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={item}
                        width={150}
                        height={100}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioDetailsArea;
