import Link from "next/link";
import Image from "next/image";
import team_data from "@/src/data/team-data";
import React, { useEffect, useState } from "react";
import Select from "react-select";
import Appointment from "@/src/svg/calendar";


const options = [
  { value: "all", label: "Tüm Hekimlerimiz" },
  { value: "diyetisyen", label: "Diyetisyen" },
  { value: "psikiyatri", label: "Psikiyatri" },
  { value: "dahiliye", label: "Dahiliye" },
];

const TeamArea = () => {
  const [selectedOption, setSelectedOption] = useState();
  useEffect(() => {
    setSelectedOption(options[0]);
  }, []);

  return (
    <>
      <section className="tp-team-area p-relative pb-50 pt-50">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div
                style={{ padding: "20px 20px" }}
                className="sidebar__widget mb-30"
              >
                <Select
                components={{
                    DropdownIndicator: () => <i className="far fa-chevron-down"></i>
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
                        height: '60px',
                        color: state.isFocused ? "#022746" : "#022746"
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
                      primary:"#e10f21",
                      neutral80:"#6c757d"
   
                    },
                  })}
                  value={selectedOption}
                  isSearchable={false}
                  onChange={setSelectedOption}
                  options={options}
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
                    <form onClick={(e) => e.preventDefault()}>
                      <div className="sidebar__search-input-2">
                        <input type="text" placeholder="Hekimlerde Ara" />
                        <button type="submit">
                          <i className="far fa-search"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            {team_data.map((item, i) => (
              <div className="col-lg-3" key={i}>
                <div
                  style={{ marginBottom: 25 }}
                  className="tp-team-wrapper p-relative"
                >
                    <Link href="/hekimlerimiz/doktor-1">
                  <div className="tp-team-wrapper-thumb">
                      <Image src={item.img} alt="theme-pure" width={510} height={510} />
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
                        <Link href="/hekimlerimiz/doktor-1">{item.name}</Link>
                      </h3>
                      <p style={{ textAlign: "center", marginBottom: 0 }}>
                        {item.job_title}
                      </p>
                    </div>
                    <Link href="/hekimlerimiz/doktor-1">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TeamArea;
