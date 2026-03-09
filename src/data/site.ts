// ============================================================
// ÖZKAN CNC — Site Verileri (Orijinal siteden çekilmiş)
// ============================================================

export const site = {
  name: 'Özkan Kardeşler CNC Merkezi',
  shortName: 'Özkan CNC',
  tagline: 'Hassas Üretim, Güvenilir Mühendislik.',
  description:
    'CNC dik işleme, torna, freze ve kalıp üretiminde 30 yıla yakın sanayi deneyimi. AB standartlarında, mikron hassasiyetinde imalat.',
  established: 1995,
  url: 'https://www.ozkancnc.com',
  email: 'bilgi@ozkancnc.com',
  phone: '0 264 276 80 10',
  address: {
    street: 'Dörtyol Sanayi Sitesi 54. Sk. No: 55',
    district: 'Arifiye',
    city: 'Sakarya',
    country: 'Türkiye',
  },
  social: {
    instagram: 'https://www.instagram.com/ozkancnc/',
    linkedin: 'https://www.linkedin.com/company/%C3%B6zkan-karde%C5%9Fler',
  },
  workingHours: 'Pazartesi — Cumartesi · 08:00–18:00',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12093.335690794545!2d30.3908905!3d40.7326773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dd2bd594c72d97!2s%C3%96zkan+Karde%C5%9Fler+CNC+Merkezi!5e0!3m2!1str!2str!4v1566548663470!5m2!1str!2str',
};

export const nav = [
  { label: 'Kurumsal', href: '#kurumsal' },
  { label: 'Hizmetler', href: '#hizmetler' },
  { label: 'Makina Parkuru', href: '#makinalar' },
  { label: 'Galeri', href: '#galeri' },
  { label: 'Kalite', href: '#kalite' },
  { label: 'İletişim', href: '#iletisim', isCta: true },
];

export const stats = [
  { value: '1995', unit: "'ten", label: 'Bu yana hizmet veriyoruz' },
  { value: '50', unit: '+', label: 'CNC & Universal Tezgah' },
  { value: '±0.01', unit: 'mm', label: 'Tolerans hassasiyeti' },
  { value: 'ISO', unit: '', label: '9001:2015 Sertifikalı' },
];

export const services = [
  {
    num: '01',
    title: 'Talaşlı İmalat',
    description:
      'Talaş kaldırarak şekil verilen üretim yöntemidir. CNC dik işleme merkezlerimizle yüksek hassasiyetli 3 eksen dikey işleme operasyonları gerçekleştiriyoruz.',
    tag: 'CNC Machining',
    image: '/images/services/resim65.jpg',
  },
  {
    num: '02',
    title: 'Fason Üretim',
    description:
      'Üretici firmanın hammadde sağlayarak başka bir firmaya üretim yaptırmasıdır. Müşteri çizimlerine uygun seri ve tekil CNC talaşlı imalat hizmeti sunuyoruz.',
    tag: 'Subcontracting',
    image: '/images/services/resim67.jpg',
  },
  {
    num: '03',
    title: 'Universal Freze ve Torna',
    description:
      'Universal tezgah diğer frezelerden farklı olarak hem yatay hem de dikey olarak konumlanabilir. Çok yönlü geleneksel imalat kabiliyeti sunuyoruz.',
    tag: 'Conventional',
    image: '/images/services/resim68.jpg',
  },
  {
    num: '04',
    title: 'Kalıp Üretimi',
    description:
      'Üretim yapılacak malzemenin çeşitli kalıplara konularak şekil verilmesi yöntemidir. Plastik enjeksiyon, sac şekillendirme ve döküm kalıpları imalatı.',
    tag: 'Mold & Die',
    image: '/images/services/resim69.jpg',
  },
  {
    num: '05',
    title: 'Yedek Parça İmalatı',
    description:
      'CNC merkezimizde her türlü yedek parça imalatı son teknolojiye sahip makinalarla gerçekleştirilmektedir. Otomotiv yedek parça üretimi de yapılmaktadır.',
    tag: 'Spare Parts',
    image: '/images/services/resim71.jpg',
  },
  {
    num: '06',
    title: 'Kaynak & Makina İmalatı',
    description:
      'Merkezimizde metal alaşım karışımları kaynak makinesi ile kaynak yapıyoruz. Bilgisayar destekli üretim ile makina imalatı gerçekleştiriyoruz.',
    tag: 'Welding',
    image: '/images/services/resim72.jpg',
  },
];

export interface Machine {
  name: string;
  type: string;
  image: string;
}

export interface MachineGroup {
  title: string;
  machines: Machine[];
}

export const machineGroups: MachineGroup[] = [
  {
    title: 'CNC Dik İşlem Grubu',
    machines: [
      { name: 'Baofeng BF-V8', type: 'Dikey İşleme Merkezi', image: '/images/machines/resim194.jpg' },
      { name: 'Victor VCenter-102E', type: 'CNC İşleme Merkezi', image: '/images/machines/resim139.jpg' },
      { name: 'Victor VCenter-P106', type: 'CNC İşleme Merkezi', image: '/images/machines/resim138.jpg' },
      { name: 'Victor VCenter-70', type: 'CNC İşleme Merkezi', image: '/images/machines/resim169.jpg' },
      { name: 'Awea BM-1200', type: 'CNC İşleme Merkezi', image: '/images/machines/resim137.jpg' },
      { name: 'Awea BM-1020', type: 'CNC İşleme Merkezi', image: '/images/machines/resim171.jpg' },
    ],
  },
  {
    title: 'CNC Torna Grubu',
    machines: [
      { name: 'TAKISAWA EX-110', type: 'CNC Torna', image: '/images/machines/resim143.jpg' },
      { name: 'Victor V-Turn P20', type: 'CNC Torna', image: '/images/machines/resim144.jpg' },
      { name: 'Victor V-Turn 26HD', type: 'CNC Torna', image: '/images/machines/resim145.jpg' },
      { name: 'HWACHEON CUTEX 160', type: 'CNC Torna', image: '/images/machines/resim192.jpg' },
      { name: 'KAMSAN 42-3200', type: 'CNC Torna + Çubuk Sürücü', image: '/images/machines/resim193.jpg' },
    ],
  },
  {
    title: 'Kaynak & Universal Tezgah Grubu',
    machines: [
      { name: '450 Amper Kaynak Makinası', type: 'Kaynak', image: '/images/machines/resim146.jpg' },
      { name: 'MM452', type: 'Kaynak Makinası', image: '/images/machines/resim147.jpg' },
      { name: 'TAKSAN Universal Freze', type: 'Universal Freze', image: '/images/machines/resim148.jpg' },
      { name: 'DMTG Universal Torna', type: 'Universal Torna', image: '/images/machines/resim150.jpg' },
      { name: 'Toss Torna', type: 'Universal Torna', image: '/images/machines/resim151.jpg' },
      { name: 'Kesmak Otomatik Testere', type: 'Çelik Kesme', image: '/images/machines/resim184.jpg' },
    ],
  },
];

export const qualityPolicies = [
  'AB standartlarında ürünler sunarak, kaliteli üretim yaparak müşteri memnuniyetini en üst seviyede tutmak',
  'Tedarikçilerimize yaptırdığımız işlerle ilgili gereklilikleri sürekli olarak, açık ve anlaşılır şekilde paylaşarak iletişimi güçlendirmek',
  'Tüm çalışanlarımıza verilen eğitimlerle sürekli gelişimlerini sağlamak',
  'Müşterilerimize daha iyi hizmet sunmak adına günden güne kalite artışı sağlamak',
  'Etkin bir sistemle bütün iş süreçlerimizi sürekli geliştirerek memnun bir müşteri ağı oluşturmak',
];

export const certifications = [
  { name: 'ISO 9001', desc: 'Kalite Yönetimi' },
  { name: 'ISO 14001', desc: 'Çevre Yönetimi' },
  { name: 'IATF 16949', desc: 'Otomotiv Kalite' },
];

export const about = {
  text: [
    "1995 yılında talaşlı imalat sektöründe hizmet vermek amacıyla Dörtyol Sanayi Sitesi'nde kuruldu. Günün ihtiyaçlarına paralel olarak üniversal tezgahlarla imalat yapan firmamız, gelişmekte olan teknolojiyi yakından takip ederek günümüzün ileri teknoloji ürünleri olan CNC işleme merkezleri ile mevcut teknolojiyi yakından takip etmektedir.",
  ],
  mission:
    'Müşteri güveni ve memnuniyeti odaklı hizmet anlayışımızla müşterilerimize yenilikçi ürünler sunmak ve ülkemiz sanayisine değer katmaktır.',
  vision:
    'Ürün çeşitlerimiz, yüksek üretim kapasitemiz ve kaliteli ürünlerimizle müşterilerimizin ilk tercihi olmaktır.',
  specs: [
    { label: 'Kuruluş', value: '1995 — Arifiye, Sakarya' },
    { label: 'Faaliyet', value: 'CNC Talaşlı İmalat' },
    { label: 'Kapasite', value: '50+ CNC & Universal Tezgah' },
    { label: 'Standart', value: 'ISO 9001:2015' },
    { label: 'Konum', value: 'Dörtyol San. Sit. 54. Sk. No: 55' },
  ],
};

export const sliderImages = [
  { src: '/images/slider/manset1.jpg', alt: 'Özkan Kardeşler CNC - Üretim Tesisi' },
  { src: '/images/slider/manset2.jpg', alt: 'Özkan Kardeşler CNC - CNC İşleme' },
  { src: '/images/slider/manset3.jpg', alt: 'Özkan Kardeşler CNC - Makina Parkuru' },
];

export const referansLogos = [
  { src: '/images/refs/r1.jpg', alt: 'Referans 1' },
  { src: '/images/refs/r2.jpg', alt: 'Referans 2' },
  { src: '/images/refs/r3.jpg', alt: 'Referans 3' },
  { src: '/images/refs/r4.jpg', alt: 'Referans 4' },
  { src: '/images/refs/r5.jpg', alt: 'Referans 5' },
];
