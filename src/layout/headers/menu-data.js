import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    home_icon: <HomeIcon />,
    title: "Anasayfa",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: true,
    title: "Kurumsal",
    link: "",
    active: "",
    sub_menus: [
      { link: "/kurumsal/hakkimizda", title: "Hakkımızda" },
      { link: "/kurumsal/anlasmali-kurumlar", title: "Anlaşmalı Kurumlar" },
      { link: "/kurumsal/kalite-politikamiz", title: "Kalite Politikamız" },
      { link: "/kurumsal/isg-politikamiz", title: "İSG Politikamız" },
      { link: "/kurumsal/bebek-dostu-hastane", title: "Bebek Dostu Hastane" },
      { link: "/kurumsal/hasta-haklari", title: "Hasta Hakları" },
      { link: "/kurumsal/degerlerimiz", title: "Değerlerimiz" },
      { link: "/kurumsal/guvenlik-kulturu", title: "Güvenlik Kültürü" },
      { link: "/kurumsal/ziyaret-kurallari", title: "Ziyaret Kuralları" },
      { link: "/kurumsal/kurum-bilgileri", title: "Kurum Bilgileri" },
      { link: "/kurumsal/sikayet-oneri", title: "Şikayet & Öneri" },
    ],
  },

  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Hastanemiz",
    link: "",
    active: "",
    sub_menus: [
      { link: "/tibbi-birimlerimiz", title: "Tıbbi Birimlerimiz" },
      { link: "/hekimlerimiz", title: "Hekimlerimiz" },
      { link: "/idari-birimlerimiz", title: "İdari Birimlerimiz" },
    ],
  },

  {
    id: 4,
    mega_menu: false,
    has_dropdown: true,
    title: "Bilgilendirme",
    link: "",
    active: "",
    sub_menus: [
      { link: "/bilgilendirme/bashekimin-mesaji", title: "Başhekimin Mesajı" },
      { link: "/bilgilendirme/aydinlatma-metni", title: "Aydınlatma Metni" },
      {
        link: "/bilgilendirme/calisan-adaylarina-aydinlatma-metni",
        title: "Çalışan Adaylarına Aydınlatma Metni",
      },
      { link: "/bilgilendirme/kvkk-belgeleri", title: "KVKK Belgeleri" },
      {
        link: "/bilgilendirme/cctv-aydinlatma-metni",
        title: "CCTV Aydınlatma Metni",
      },
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Sağlık Rehberi",
    link: "/saglik-rehberi",
    active: "",
  },

  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Duyurular",
    link: "/bilgilendirme/duyurular",
    active: "",
  },

  {
    id: 7,
    mega_menu: false,
    has_dropdown: true,
    title: "Online Hizmetler",
    link: "",
    active: "",
    sub_menus: [
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/?hastane=6950&bolum=&dr=",
        title: "Online Randevu",
      },
      {
        link: "https://randevu.meddata.com.tr/imperialhastanesi/e-sonuc.php",
        title: "Online Sonuç",
      },
      { link: "https://imperial.meddatam.com", title: "Görüntülü Muayene" },
    ],
  },

  {
    id: 8,
    mega_menu: false,
    has_dropdown: false,
    title: "İletişim",
    link: "/iletisim",
    active: "",
  },
];
export default menu_data;
