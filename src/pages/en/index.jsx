import SEO from "../../common/seo";
import HeaderOne from "../../layout/headers-en/header";
import Wrapper from "../../layout/wrapper";
import HeroSlider from "../../components/homes/home/hero-slider";
import FeatureArea from "../../components/homes/home/feature-area";
import ServiceArea from "../../components/homes/home/service-area";
import TeamArea from "../../common/team-area-en";
import Paket from "../../components/homes/home/paket-en";
import FaqArea from "../../components/homes/home/faq-area";
import DepartmentArea from "../../components/homes/home/department-area-en";
import BlogArea from "../../components/homes/home/blog-area-en";
import Footer from "../../layout/footers/footer-en";
import axios from "axios";
import Update from "@/src/components/update/en";

export default function Home({ data, doctors, birim, duyuru, yazi, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Imperial Hospital Trabzon | The Right Address for Your Health"
        }
        description={
          "Providing quality health services in Trabzon, Imperial Hospital is the address of trust in health with its expert doctor staff and modern technology. Trust us with your health with professional diagnosis and treatment opportunities in every branch."
        }
      />
      <HeaderOne data={general} />
      <main>
        <HeroSlider data={data.en.slider} images={data.slider_images.data} />
        <FeatureArea title={["Imperial", "Hospital"]} data={data.en.teams} />
        <ServiceArea
          title={["Imperial", "Hospital"]}
          more={"Read More"}
          data={data.en.about}
        />
        <TeamArea data={doctors} />
        <Paket data={yazi} />
        <FaqArea
          title={["Frequently Asked", "Questions ?"]}
          data={data.en.faq}
        />
        <DepartmentArea data={birim} />
        <BlogArea
          title={["Announcements", "Blog", "Blog", "Read Blog"]}
          data={duyuru}
        />
        <Update data={data.update} />
        <Footer data={general} />
      </main>
    </Wrapper>
  );
}

export async function getStaticProps() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/home?populate=deep`
  );

  const response2 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/doctors?populate=deep&pagination[limit]=100`
  );

  const temp = response2.data.data.sort(() => Math.random() - 0.5);
  const doctorData = [
    temp[0],
    temp[1],
    temp[2],
    temp[3],
    temp[4],
    temp[5],
    temp[6],
    temp[7],
    temp[8],
  ];

  const response3 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/birims?populate=deep&pagination[limit]=100`
  );

  const response4 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/duyurus?populate=deep`
  );

  const temp2 = response3.data.data.sort(() => Math.random() - 0.5);
  const birimData = [
    temp2[0],
    temp2[1],
    temp2[2],
    temp2[3],
    temp2[4],
    temp2[5],
    temp2[6],
    temp2[7],
    temp2[8],
  ];

  const response5 = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/yazis?populate=deep`
  );

  const general = await axios.get(
    `${process.env.NEXT_PUBLIC_IP}/api/general?populate=deep`
  );

  return {
    props: {
      data: response.data.data.attributes,
      doctors: doctorData,
      birim: birimData,
      duyuru: response4.data.data.reverse(),
      yazi: response5.data.data,
      general: general.data.data.attributes,
    },
    revalidate: 10,
  };
}
