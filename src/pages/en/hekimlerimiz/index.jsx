import React, { useEffect, useState, useMemo } from "react";
import Wrapper from "../../../layout/wrapper";
import SEO from "../../../common/seo";
import HeaderOne from "@/src/layout/headers-en/header";
import Footer from "@/src/layout/footers/footer-en";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import Appointment from "@/src/svg/calendar";
import Link from "next/link";
import axios from "axios";
import Select from "react-select";
import Update from "@/src/components/update/en";

const options = [
  { value: "", label: "All Doctors" },
  { value: "gogus-hastaliklari", label: "Chest Diseases" },
  { value: "agiz-ve-dis-sagligi", label: "Oral and Dental Health" },
  { value: "laboratuvar", label: "Lab" },
  { value: "radyoloji", label: "Radiological" },
  { value: "anestezi", label: "Anesthesia and Reanimation" },
  { value: "noroloji", label: "Neurology" },
  { value: "genel-cerrahi", label: "General Surgery" },
  { value: "cildiye", label: "Dermatology" },
  { value: "fizik-tedavi", label: "Physical Therapy and Rehabilitation" },
  { value: "kardiyoloji", label: "Cardiology" },
  { value: "beyin-cerrahisi", label: "Brain and Nerve Surgery" },
  { value: "ortopedi", label: "Orthopedics" },
  { value: "cocuk-cerrahisi", label: "Pediatric Surgery" },
  { value: "gastroenteroloji", label: "Gastroenterology" },
  { value: "kadin-hastaliklari", label: "Gynecology and Obstetrics" },
  { value: "cocuk-hastaliklari", label: "Childhood Diseases" },
  { value: "enfeksiyon-hastaliklari", label: "Infectious Diseases" },
  { value: "goz-poliklinigi", label: "Eye Clinic" },
  { value: "kulak-burun-bogaz", label: "Ear Nose Throat" },
  { value: "dahiliye", label: "Internal Medicine" },
  { value: "psikiyatri", label: "Psychiatry" },
  { value: "uroloji", label: "Urology" },
  { value: "acil", label: "Emergency Room" },
  {
    value: "endokrinoloji",
    label: "Endocrinology and Metabolic Diseases",
  },
  { value: "nefroloji", label: "Nephrology" },
  { value: "onkoloji", label: "Oncology" },
  {
    value: "cocuk-ergen-ruh-hastaliklari",
    label: "Child and Adolescent Mental Health and Diseases",
  },
  { value: "cocuk-norolojisi", label: "Child Neurology" },
  { value: "hematoloji", label: "Hematology" },
  { value: "evde-bakim", label: "Home Care" },
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
      <SEO
        pageTitle={"Our Doctors | Imperial Hospital Trabzon"}
        description={
          "Providing safe healthcare services in Trabzon, Imperial Hospital provides the best treatment opportunities to its patients with expert physicians in their fields. Meet our physicians."
        }
      />
      <HeaderOne data={general} />
      <main>
        <Breadcrumb top_title="OUR DOCTORS" page_title="OUR DOCTORS" />
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
                    placeholder="All Doctors"
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
                          placeholder="Search in Doctors"
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
                    No doctor found with the criteria you are looking for!
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
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
