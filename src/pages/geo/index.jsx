import SEO from "../../common/seo";
import HeaderOne from "../../layout/headers-geo/header";
import Wrapper from "../../layout/wrapper";
import HeroSlider from "../../components/homes/home/hero-slider";
import FeatureArea from "../../components/homes/home/feature-area";
import ServiceArea from "../../components/homes/home/service-area";
import TeamArea from "../../common/team-area-geo";
import Paket from "../../components/homes/home/paket-geo";
import FaqArea from "../../components/homes/home/faq-area";
import DepartmentArea from "../../components/homes/home/department-area-geo";
import BlogArea from "../../components/homes/home/blog-area-geo";
import Footer from "../../layout/footers/footer-geo";
import axios from "axios";
import Update from "@/src/components/update/geo";

export default function Home({ data, doctors, birim, duyuru, yazi, general }) {
  return (
    <Wrapper>
      <SEO
        pageTitle={
          "Imperial Hospital Trabzon | სწორი მისამართი თქვენი ჯანმრთელობისთვის"
        }
        description={
          "ტრაპიზონში ხარისხიანი ჯანდაცვის სერვისის მიწოდება, Imperial Hospital არის ნდობის მისამართი ჯანდაცვაში თავისი ექსპერტი ექიმი პერსონალით და თანამედროვე ტექნოლოგიებით. გვერწმუნეთ თქვენი ჯანმრთელობა პროფესიონალური დიაგნოსტიკისა და მკურნალობის შესაძლებლობით ყველა ფილიალში."
        }
      />
      <HeaderOne data={general} />
      <main>
        <HeroSlider data={data.geo.slider} images={data.slider_images.data} />
        <FeatureArea title={["Imperial", "Hospital"]} data={data.geo.teams} />
        <ServiceArea
          title={["Imperial", "Hospital"]}
          more={"დაწვრილებით"}
          data={data.geo.about}
        />
        <TeamArea data={doctors} />
        <Paket data={yazi} />
        <FaqArea
          title={["ხშირად დასმული", "კითხვები ?"]}
          data={data.geo.faq}
        />
        <DepartmentArea data={birim} />
        <BlogArea
          title={["განცხადებები", "ბლოგი", "ბლოგი", "წაიკითხეთ ბლოგი"]}
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
