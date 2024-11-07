import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    home_icon: <HomeIcon />,
    title: "მთავარი",
    link: "/geo",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "ორგანიზაცია",
    link: "",
    active: "",
    sub_menus: [
      { link: "/geo/kurumsal/hakkimizda", title: "ჩვენს შესახებ" },
      {
        link: "/geo/kurumsal/anlasmali-kurumlar",
        title: "კონტრაქტი დაწესებულებები",
      },
      {
        link: "/geo/kurumsal/kalite-politikamiz",
        title: "ჩვენი ხარისხის პოლიტიკა",
      },
      { link: "/geo/kurumsal/isg-politikamiz", title: "ISG ჩვენი პოლიტიკა" },
      {
        link: "/geo/kurumsal/bebek-dostu-hastane",
        title: "ბავშვის მეგობრული საავადმყოფო",
      },
      { link: "/geo/kurumsal/normal-dogum", title: "ნორმალური დაბადება" },
      { link: "/geo/kurumsal/hasta-haklari", title: "პაციენტის უფლებები" },
      { link: "/geo/kurumsal/degerlerimiz", title: "ჩვენი ღირებულებები" },
      { link: "/geo/kurumsal/guvenlik-kulturu", title: "უსაფრთხოების კულტურა" },
      { link: "/geo/kurumsal/ziyaret-kurallari", title: "სტუმრობის წესები" },
      {
        link: "/geo/kurumsal/kurum-bilgileri",
        title: "დაწესებულების ინფორმაცია",
      },
      { link: "/geo/kurumsal/sikayet-oneri", title: "საჩივარი და წინადადება" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "საავადმყოფო",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "/geo/tibbi-birimlerimiz",
        title: "ჩვენი სამედიცინო განყოფილებები",
      },
      { link: "/geo/hekimlerimiz", title: "ჩვენი ექიმები" },
      {
        link: "/geo/idari-birimlerimiz",
        title: "ჩვენი ადმინისტრაციული ერთეულები",
      },
      {
        link: "/geo/kalite-yonetim-birimimiz",
        title: "ჩვენი ხარისხის მართვის განყოფილება",
      },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "ინფორმაცია",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "/geo/bilgilendirme/bashekimin-mesaji",
        title: "მესიჯი მთავარი ექიმისგან",
      },
      {
        link: "/geo/bilgilendirme/aydinlatma-metni",
        title: "განმარტებითი ტექსტი",
      },
      {
        link: "/geo/bilgilendirme/calisan-adaylarina-aydinlatma-metni",
        title: "საინფორმაციო ტექსტი თანამშრომლობის კანდიდატებისთვის",
      },
      { link: "/geo/bilgilendirme/kvkk-belgeleri", title: "KVKK დოკუმენტები" },
      {
        link: "/geo/bilgilendirme/cctv-aydinlatma-metni",
        title: "CCTV განმარტებითი ტექსტი",
      },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "ანონსი",
    link: "/geo/bilgilendirme/duyurular",
    active: "",
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "ონლაინ",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/?hastane=6950&bolum=&dr=",
        title: "ონლაინ დანიშვნა",
      },
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/e-sonuc.php",
        title: "ონლაინ შედეგი",
      },
      { link: "https://imperial.meddatam.com", title: "ვიდეო ინსპექტირება" },
    ],
  },

  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "კონტაქტი",
    link: "/geo/iletisim",
    active: "",
  },
];
export default menu_data;
