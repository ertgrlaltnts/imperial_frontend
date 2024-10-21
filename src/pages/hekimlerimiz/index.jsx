import React, { useEffect, useState, useMemo } from "react";
import Wrapper from "../../layout/wrapper";
import SEO from "../../common/seo";
import HeaderOne from "@/src/layout/headers/header";
import Footer from "@/src/layout/footers/footer";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Appointment from "@/src/svg/calendar";
import Link from "next/link";
import axios from "axios";
import Select from "react-select";
import Update from "@/src/components/update";

const options = [
  { value: "", label: "Tüm Hekimler" },
  { value: "gogus-hastaliklari", label: "Göğüs Hastalıkları" },
  { value: "agiz-ve-dis-sagligi", label: "Ağız ve Diş Sağlığı" },
  { value: "laboratuvar", label: "Laboratuvar" },
  { value: "radyoloji", label: "Radyoloji" },
  { value: "anestezi", label: "Anestezi ve Reanimasyon" },
  { value: "noroloji", label: "Nöroloji" },
  { value: "genel-cerrahi", label: "Genel Cerrahi" },
  { value: "cildiye", label: "Cildiye" },
  { value: "fizik-tedavi", label: "Fizik Tedavi ve Rehabilitasyon" },
  { value: "kardiyoloji", label: "Kardiyoloji" },
  { value: "beyin-cerrahisi", label: "Beyin ve Sinir Cerrahisi" },
  { value: "ortopedi", label: "Ortopedi" },
  { value: "cocuk-cerrahisi", label: "Çocuk Cerrahisi" },
  { value: "gastroenteroloji", label: "Gastroenteroloji" },
  { value: "kadin-hastaliklari", label: "Kadın Hastalıkları" },
  { value: "cocuk-hastaliklari", label: "Çocuk Hastalıkları" },
  { value: "enfeksiyon-hastaliklari", label: "Enfeksiyon Hastalıkları" },
  { value: "goz-poliklinigi", label: "Göz Polikliniği" },
  { value: "kulak-burun-bogaz", label: "Kulak Burun Boğaz" },
  { value: "dahiliye", label: "Dahiliye" },
  { value: "psikiyatri", label: "Psikiyatri" },
  { value: "uroloji", label: "Üroloji" },
  { value: "acil", label: "Acil Servis" },
  {
    value: "endokrinoloji",
    label: "Endokrinoloji ve Metabolizma Hastalıkları",
  },
  { value: "nefroloji", label: "Nefroloji" },
  { value: "onkoloji", label: "Onkoloji" },
  {
    value: "cocuk-ergen-ruh-hastaliklari",
    label: "Çocuk, Ergen Ruh Sağlığı ve Hastalıkları",
  },
  { value: "cocuk-norolojisi", label: "Çocuk Nörolojisi" },
  { value: "hematoloji", label: "Hematoloji" },
  { value: "evde-bakim", label: "Evde Bakım" },
];

export default function Doctors({ data, general }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // 300ms bekleme süresi (değer isteğe bağlı olarak değiştirilebilir)

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  const filteredDoctors = useMemo(() => {
    return data.filter((doctor) => {
      const nameMatches = doctor.attributes.name
        .toLowerCase()
        .includes(debouncedSearchTerm.toLowerCase());

      // categories listesinde ilgili kategoriyi arıyoruz
      const categoryMatches =
        selectedOption === "" ||
        doctor.attributes.categories.some(
          (cat) => cat.category.toLowerCase() === selectedOption.toLowerCase()
        );

      return nameMatches && categoryMatches;
    });
  }, [debouncedSearchTerm, selectedOption, data]);

  return (
    <Wrapper>
      <SEO pageTitle={"Hekimlerimiz | İmperial Hastanesi Trabzon"} description={"Trabzon'da güvenilir sağlık hizmeti sunan İmperial Hastanesi, alanında uzman hekimleriyle hastalarına en iyi tedavi olanaklarını sağlamaktadır. Hekimlerimizle tanışın."} />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="HEKİMLERİMİZ" page_title="HEKİMLERİMİZ" />
        <section className="tp-team-area p-relative pb-50 pt-50">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <div
                  style={{ padding: "20px 20px" }}
                  className="sidebar__widget mb-30"
                >
                  <Select
                    instanceId={"select"}
                    components={{
                      DropdownIndicator: () => (
                        <i className="far fa-chevron-down"></i>
                      ),
                    }}
                    styles={{
                      control: (baseStyles, state) => ({
                        ...baseStyles,
                        borderColor: "transparent !important",
                        borderRadius: 0,
                        boxShadow: "none",
                        padding: "0 15px",
                        minHeight: "60px",
                        height: "60px",
                      }),

                      indicatorSeparator: (state) => ({
                        display: "none",
                      }),

                      indicatorsContainer: (provided, state) => ({
                        ...provided,
                        height: "60px",
                        color: state.isFocused ? "#022746" : "#022746",
                      }),
                    }}
                    theme={(theme) => ({
                      ...theme,
                      height: 60,
                      lineHeight: 60,
                      borderRadius: 0,
                      colors: {
                        ...theme.colors,
                        neutral30: "transparent",
                        primary: "#e10f21",
                        neutral80: "#6c757d",
                      },
                    })}
                    classNamePrefix="select"
                    onChange={(selectedOptions) =>
                      setSelectedOption(selectedOptions.value)
                    }
                    options={options}
                    placeholder="Tüm Hekimler"
                  />
                </div>
              </div>

              <div className="col-lg-5">
                <div
                  style={{ padding: "20px 20px" }}
                  className="sidebar__widget mb-30"
                >
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <div className="sidebar__search-input-2">
                        <input
                          onChange={(e) => setSearchTerm(e.target.value)}
                          type="text"
                          placeholder="Hekimlerde Ara"
                          value={searchTerm}
                        />

                        {/* <i className="far fa-search"></i> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((item, index) => (
                  <div className="col-lg-3" key={index}>
                    <div
                      style={{ marginBottom: 25 }}
                      className="tp-team-wrapper p-relative"
                    >
                      <Link href={`hekimlerimiz/${item.attributes.slug}`}>
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
                            <Link href={`hekimlerimiz/${item.attributes.slug}`}>
                              {item.attributes.name}
                            </Link>
                          </h3>
                          <p style={{ textAlign: "center", marginBottom: 0 }}>
                            {item.attributes.tr.job}
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
                                Online Randevu
                              </h3>

                              <Appointment />
                            </div>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={"/assets/main/error.png"}
                    style={{ width: "300px", objectFit: "contain" }}
                  />

                  <div
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                      color: "#000",
                      marginTop: 20,
                    }}
                  >
                    Aradığınız kriterde doktor bulunamadı !
                  </div>
                </div>
              )}
            </div>
            <Update data={data[0].attributes.update} />
          </div>
        </section>
      </main>
      <Footer data={general} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep&pagination[limit]=100`
  );
  

  const doctorData = response.data.data.sort(() => Math.random() - 0.5);

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: doctorData,
      general: general.data.data.attributes
    },
    revalidate: 10,
  };
}
