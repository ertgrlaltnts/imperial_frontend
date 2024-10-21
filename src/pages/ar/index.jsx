import SEO from "../../common/seo";
import HeaderOne from "../../layout/headers-ar/header";
import Wrapper from "../../layout/wrapper";
import HeroSlider from "../../components/homes/home/hero-slider";
import FeatureArea from "../../components/homes/home/feature-area";
import ServiceArea from "../../components/homes/home/service-area";
import TeamArea from "../../common/team-area-ar";
import Paket from "../../components/homes/home/paket-ar";
import FaqArea from "../../components/homes/home/faq-area";
import DepartmentArea from "../../components/homes/home/department-area-ar";
import BlogArea from "../../components/homes/home/blog-area-ar";
import Footer from "../../layout/footers/footer-ar";
import axios from "axios";
import Update from "@/src/components/update/ar";

export default function Home({ data, doctors, birim, duyuru, yazi, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Imperial Hospital Trabzon | العنوان المناسب لصحتك"
        }
        description={
          "يقدم المستشفى الإمبراطوري خدمات صحية عالية الجودة في طرابزون، وهو عنوان الثقة في الصحة بطاقمه من الأطباء الخبراء والتكنولوجيا الحديثة. ثق بنا فيما يتعلق بصحتك من خلال التشخيص المهني وفرص العلاج في كل فرع."
        }
      />
      <HeaderOne data={general} />
      <main>
        <HeroSlider data={data.ar.slider} images={data.slider_images.data} />
        <FeatureArea title={["Imperial", "Hospital"]} data={data.ar.teams} />
        <ServiceArea
          title={["Imperial", "Hospital"]}
          more={"اقرأ المزيد"}
          data={data.ar.about}
        />
        <TeamArea data={doctors} />
        <Paket data={yazi} />
        <FaqArea
          title={["الأسئلة الشائعة", "أسئلة ؟"]}
          data={data.ar.faq}
        />
        <DepartmentArea data={birim} />
        <BlogArea
          title={["الإعلانات", "مدونة", "مدونة", "اقرأ المدونة"]}
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
