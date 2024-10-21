import blog_data from "@/src/data/blog-data";
import RightArrow from "@/src/svg/right-arrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogArea = ({data, title}) => {
  return (
    <>
      <section className="tp-blog-area pt-80 pb-60">
        <div className="container container-large">
          <div className="row">
            <div className="col-lg-12">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="tp-blog-title-wrapper">
                    <h3 className="tp-section-title">
                      {title[0]} <span className="title-color">&</span> {title[1]}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {data.slice(0, 3).map((item, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="tp-blog-wrapper mb-30">
                  <div className="tp-blog-thumb">
                    <img src={`${process.env.NEXT_PUBLIC_IP}${item.attributes.image.data.attributes.url}`} alt="theme-pure" />

                    <div className="tp-blog-tag">
                      <p style={{ color: "#fff" }}>{title[2]}</p>
                    </div>
                  </div>
                  <div className="tp-blog-content">
                    <div className="tp-blog-details "></div>
                    <h3 className="tp-blog-title">
                      <Link href={`/en/bilgilendirme/duyurular/${item.attributes.slug}`}>{item.attributes.en.title}</Link>
                    </h3>
                    <div className="tp-blog-btn d-flex justify-content-between">
                      <div className="read-more p-relative">
                        <Link href={`/en/bilgilendirme/duyurular/${item.attributes.slug}`}>
                          {title[3]}{" "}
                          <span>
                            {" "}
                            <RightArrow />{" "}
                          </span>
                        </Link>
                      </div>
                    </div>
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

export default BlogArea;
