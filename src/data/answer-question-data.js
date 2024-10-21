const answer_question_data = [
  {
    id: 1,
    question: <>Hastanenizde nasıl randevu alabilirim ?</>,
    answer: (
      <>
        Randevu almak için hastanemizin web sitesinden online randevu sistemini
        kullanabilir, çağrı merkezimizi arayabilir veya doğrudan hastanemize
        gelerek randevu oluşturabilirsiniz.
      </>
    ),
    accordion_id: "One",
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },
  {
    id: 2,
    question: <>Hastaneniz hangi sigorta şirketleriyle anlaşmalı ?</>,
    answer: (
      <>
        İmperial Hastanesi, birçok özel ve devlet sigortasıyla anlaşmalıdır.
        Anlaşmalı sigorta şirketleri hakkında detaylı bilgi almak için
        hastanemizin web sitesini ziyaret edebilir veya çağrı merkezimizden
        bilgi alabilirsiniz.
      </>
    ),
    accordion_id: "Two",
    collapsed: "",
    aria_expanded: true,
    show: true,
    active: "tp-faq-active",
  },
  {
    id: 3,
    question: <>Hastanede 7/24 acil servis hizmeti veriliyor mu ?</>,
    answer: (
      <>
        Evet, İmperial Hastanesi'nde 7/24 acil servis hizmeti verilmektedir.
        Acil durumlarda herhangi bir saat kısıtlaması olmaksızın hastanemize
        başvurabilirsiniz.
      </>
    ),
    accordion_id: "Three",
    collapsed: "collapsed",
    aria_expanded: false,
    active: "",
  },

];
export default answer_question_data;
