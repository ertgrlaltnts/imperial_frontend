import React from "react";
import Image from "next/image";
import Link from "next/link";
import Appointment from "@/src/svg/calendar";
import Markdown from "markdown-to-jsx";

const team_details_contact = {
  name: "Op. Dr. Kırhan GENÇOSMANOĞLU",
  job_title: "Kadın Hastalıkları ve Doğum Uzmanı",
  description: `#### Eğitim

İstanbul Tıp Fakültesi

#### Mesleki Kariyer

1997-2006 Rize Ardeşen Devlet Hastanesi

2006-2008 Akçaabat Devlet Hastanesi

2008-2010 Trabzon Doğum Hastanesi

1968 yılında Trabzon'da doğdu. İlk,orta ve lise tahsilini Trabzon'da tamamladı. 1997 yılında İstanbul Üniversitesi Tıp Fakültesi'nden mezun oldu.İstanbul Zeynep Kamil Kadın Doğum ve Çocuk Hastalıkları Eğitim ve Araştırma Hastanesi'nde kadın hastalıkları ve doğum ihtisasını tamamladı. 1997-2006 yılları arası Rize Ardeşen Devlet Hastanesi, 2006-2008 yılları Akçaabat Devlet Hastanesi, 2008-2010 yıllarında Trabzon Doğum Hastanesi'nde kadın hastalıkları ve doğum uzmanı olarak görev yaptı. .Şu anda Özel Imperial Hastanemizde Kadın Hastalıkları ve Doğum Uzmanı olarak görevine devam etmektedir. Evli ve 3 çocuk sahibidir.

**ÜYELİKLER:** Trabzon Tabip Odası

**YABANCI DİL:** İngilizce
  `,
  list_title: <>World best education site - (Computer engeenering)</>,
  lists: [
    <>Research beyond the business plan</>,
    <>Marketing options and rates</>,
    <>The ability to turnaround consulting</>,
    <>The ability to turnaround consulting</>,
  ],
};
const { name, job_title, member_info, description, list_title, lists } =
  team_details_contact;

const TeamDetailsArea = () => {
  return (
    <>
      <section className="tp-team-details-area p-relative pt-60 pb-90">
        <div className="tp-team-details-shape"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="tp-team-details-thumb p-relative text-center fadeLeft">
                <Image
                  src={
                    "https://www.imperialhastanesi.com/cropped/?src=dosyalar/page_583/img_11678176167.png&w=510&h=510"
                  }
                  alt="theme-pure"
                  width={290}
                  height={400}
                />
                <Link href="https://www.imperialhastanesi.com/online-rndevu-TR.html?d=IjQxMC1724528543w4MDUi">
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
                      Online Randevu
                    </h3>

                    <Appointment />
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="tp-team-details-wrapper fadeRight">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="tp-team-detials-designation-wrapper">
                      <div className="tp-team-details-designation-content">
                        <h4 className="tp-team-details-designation-title">
                          {name}
                        </h4>
                        <p className="tp-team-details-designation">
                          {job_title}
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
                    {description}
                  </Markdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamDetailsArea;
