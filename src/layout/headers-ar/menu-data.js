import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    home_icon: <HomeIcon />,
    title: "الصفحة الرئيسية",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "المؤسسية",
    link: "",
    active: "",
    sub_menus: [
      { link: "/ar/kurumsal/hakkimizda", title: "معلومات عنا" },
      { link: "/ar/kurumsal/anlasmali-kurumlar", title: "المؤسسات المتعاقدة" },
      { link: "/ar/kurumsal/kalite-politikamiz", title: "سياسة الجودة لدينا" },
      { link: "/ar/kurumsal/isg-politikamiz", title: "سياسة الصحة والسلامة المهنية لدينا" },
      { link: "/ar/kurumsal/bebek-dostu-hastane", title: "مستشفى صديق للطفل" },
      { link: "/ar/kurumsal/hasta-haklari", title: "حقوق المريض" },
      { link: "/ar/kurumsal/degerlerimiz", title: "قيمنا" },
      { link: "/ar/kurumsal/guvenlik-kulturu", title: "الثقافة الأمنية" },
      { link: "/ar/kurumsal/ziyaret-kurallari", title: "قواعد الزيارة" },
      { link: "/ar/kurumsal/kurum-bilgileri", title: "معلومات المؤسسة" },
      { link: "/ar/kurumsal/sikayet-oneri", title: "شكوى واقتراح" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "مستشفانا",
    link: "",
    active: "",
    sub_menus: [
      { link: "/ar/tibbi-birimlerimiz", title: "وحداتنا الطبية" },
      { link: "/ar/hekimlerimiz", title: "أطباؤنا" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "لإبلاغ",
    link: "",
    active: "",
    sub_menus: [
      { link: "/ar/bilgilendirme/bashekimin-mesaji", title: "رسالة من كبير الأطباء" },
      { link: "/ar/bilgilendirme/aydinlatma-metni", title: "نص التوضيح" },
      {
        link: "/ar/bilgilendirme/calisan-adaylarina-aydinlatma-metni",
        title: "نص المعلومات للمرشحين الموظفين",
      },
      { link: "/ar/bilgilendirme/kvkk-belgeleri", title: "وثائق KVKK" },
      {
        link: "/ar/bilgilendirme/cctv-aydinlatma-metni",
        title: "نص توضيحي لكاميرات المراقبة",
      },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "إعلانات",
    link: "/ar/bilgilendirme/duyurular",
    active: "",
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: true,
    title: "الخدمات عبر الإنترنت",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/?hastane=6950&bolum=&dr=",
        title: "موعد عبر الإنترنت",
      },
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/e-sonuc.php",
        title: "النتيجة على الانترنت",
      },
      { link: "https://imperial.meddatam.com", title: "فحص الفيديو" },
    ],
  },

  {
    id: 7,
    mega_menu: false,
    has_dropdown: false,
    title: "تواصل",
    link: "/ar/iletisim",
    active: "",
  },
];
export default menu_data;
