import HeaderOne from "@/src/layout/headers/header";
import React from "react";
import HeroSlider from "./hero-slider";
import AboutArea from "./about-area";
import FeatureArea from "./feature-area";
import ServiceArea from "./service-area";
import BrandArea from "./brand-area";
import SupportArea from "./support-area";
import TestimonialArea from "./testimonial-area";
import SliderArea from "./slider-area";
import FaqArea from "./faq-area";
import BlogArea from "./blog-area";
import Footer from "@/src/layout/footers/footer";
import TeamArea from "@/src/common/team-area";
import VideoArea from '@/src/common/video-area';
import DepartmentArea from './department-area';
import Paket from './paket';

const HomeOne = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <HeroSlider />
        <FeatureArea />
        <ServiceArea />
        <TeamArea />
        <Paket />
        <FaqArea />
        <DepartmentArea />
        <BlogArea />
        <Footer />
      </main>
    </>
  );
};

export default HomeOne;
