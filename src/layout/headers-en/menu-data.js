import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/en",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Institutional",
    link: "",
    active: "",
    sub_menus: [
      { link: "/en/kurumsal/hakkimizda", title: "About Us" },
      { link: "/en/kurumsal/anlasmali-kurumlar", title: "Contracted Institutions" },
      { link: "/en/kurumsal/kalite-politikamiz", title: "Our Quality Policy" },
      { link: "/en/kurumsal/isg-politikamiz", title: "ISG Policy" },
      { link: "/en/kurumsal/bebek-dostu-hastane", title: "Baby Friendly Hospital" },
      { link: "/en/kurumsal/hasta-haklari", title: "Patient Rights" },
      { link: "/en/kurumsal/degerlerimiz", title: "Our Values" },
      { link: "/en/kurumsal/guvenlik-kulturu", title: "Security Culture" },
      { link: "/en/kurumsal/ziyaret-kurallari", title: "Visiting Rules" },
      { link: "/en/kurumsal/kurum-bilgileri", title: "Institution Information" },
      { link: "/en/kurumsal/sikayet-oneri", title: "Complaints and Suggestions" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Our Hospital",
    link: "",
    active: "",
    sub_menus: [
      { link: "/en/tibbi-birimlerimiz", title: "Our Medical Units" },
      { link: "/en/hekimlerimiz", title: "Our Doctors" },
      { link: "/en/idari-birimlerimiz", title: "Our Administrative Units" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Information",
    link: "",
    active: "",
    sub_menus: [
      { link: "/en/bilgilendirme/bashekimin-mesaji", title: "Chief Physician's Message" },
      { link: "/en/bilgilendirme/aydinlatma-metni", title: "Clarification Text" },
      {
        link: "/en/bilgilendirme/calisan-adaylarina-aydinlatma-metni",
        title: "Information Text for Job Candidates",
      },
      { link: "/en/bilgilendirme/kvkk-belgeleri", title: "KVKK Documents" },
      {
        link: "/en/bilgilendirme/cctv-aydinlatma-metni",
        title: "CCTV Disclosure Text",
      },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Announcements",
    link: "/en/bilgilendirme/duyurular",
    active: "",
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "Online Services",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/?hastane=6950&bolum=&dr=",
        title: "Online Appointment",
      },
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/e-sonuc.php",
        title: "Online Result",
      },
      { link: "https://imperial.meddatam.com", title: "Video Inspection" },
    ],
  },

  {
    id: 8,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/en/iletisim",
    active: "",
  },
];
export default menu_data;
