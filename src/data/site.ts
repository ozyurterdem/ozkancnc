// ============================================================
// ÖZKAN CNC — Site Verileri
// Tüm içerik burada. Component'ler buradan okur.
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
  address: {
    street: 'Dörtyol Sanayi Sitesi 54. Sk. No: 55',
    district: 'Arifiye',
    city: 'Sakarya',
    country: 'Türkiye',
  },
  social: {
    instagram: 'https://www.instagram.com/ozkancnc/',
    linkedin:
      'https://www.linkedin.com/company/%C3%B6zkan-karde%C5%9Fler',
  },
  workingHours: 'Pazartesi — Cumartesi · 08:00–18:00',
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
    title: 'CNC Dik İşleme',
    description:
      'Victor VCenter, Awea BM serisi tezgahlarla yüksek hassasiyetli 3 eksen dikey işleme operasyonları.',
    tag: '3-Axis VMC',
  },
  {
    num: '02',
    title: 'CNC Torna',
    description:
      'Takisawa, Victor, Hwacheon marka CNC tornalarla silindirik parça imalatında mikron hassasiyet.',
    tag: 'CNC Lathe',
  },
  {
    num: '03',
    title: 'Fason İmalat',
    description:
      'Müşteri çizim ve teknik resimlerine uygun seri ve tekil CNC talaşlı imalat. Prototipten seri üretime.',
    tag: 'Subcontracting',
  },
  {
    num: '04',
    title: 'Kalıp Üretimi',
    description:
      'Plastik enjeksiyon, sac şekillendirme ve döküm kalıplarının hassas CNC işleme ile imalatı.',
    tag: 'Mold & Die',
  },
  {
    num: '05',
    title: 'Universal Freze & Torna',
    description:
      'Hem yatay hem dikey konumlanabilen universal tezgahlarla çok yönlü geleneksel imalat kabiliyeti.',
    tag: 'Conventional',
  },
  {
    num: '06',
    title: 'Kaynak & Montaj',
    description:
      'TIG, MIG/MAG kaynak teknikleriyle makina imalatı, çelik konstrüksiyon ve montaj operasyonları.',
    tag: 'Welding',
  },
];

export interface Machine {
  name: string;
  type: string;
}

export interface MachineGroup {
  title: string;
  machines: Machine[];
}

export const machineGroups: MachineGroup[] = [
  {
    title: 'CNC Dik İşlem Grubu',
    machines: [
      { name: 'Victor VCenter-102E', type: 'Dikey İşleme Merkezi' },
      { name: 'Victor VCenter-P106', type: 'Dikey İşleme Merkezi' },
      { name: 'Victor VCenter-70', type: 'Dikey İşleme Merkezi' },
      { name: 'Awea BM-1200', type: 'Dikey İşleme Merkezi' },
      { name: 'Awea BM-1020', type: 'Dikey İşleme Merkezi' },
      { name: 'Baofeng BF-V8', type: 'Dikey İşleme Merkezi' },
    ],
  },
  {
    title: 'CNC Torna Grubu',
    machines: [
      { name: 'TAKISAWA EX-110', type: 'CNC Torna' },
      { name: 'Victor V-Turn P20', type: 'CNC Torna' },
      { name: 'Victor V-Turn 26HD', type: 'CNC Torna' },
      { name: 'HWACHEON CUTEX 160', type: 'CNC Torna' },
      { name: 'KAMSAN 42-3200', type: 'CNC Torna + Çubuk Sürücü' },
    ],
  },
];

export const qualityPolicies = [
  'AB standartlarında ürünler sunarak müşteri memnuniyetini en üst seviyede tutmak',
  'Tedarikçilerle açık ve anlaşılır iletişim kurarak iş birliğini güçlendirmek',
  'Sürekli eğitimlerle tüm çalışanların mesleki gelişimini sağlamak',
  'Etkin kalite yönetim sistemiyle tüm süreçleri sürekli geliştirmek',
];

export const certifications = [
  { name: 'ISO 9001', desc: 'Kalite Yönetimi' },
  { name: 'ISO 14001', desc: 'Çevre Yönetimi' },
  { name: 'IATF 16949', desc: 'Otomotiv Kalite' },
];

export const about = {
  text: [
    "1995 yılında Dörtyol Sanayi Sitesi'nde universal tezgahlarla başlayan yolculuğumuz, bugün 50'yi aşkın CNC tezgahla Sakarya'nın en kapsamlı talaşlı imalat merkezlerinden biri haline geldi.",
    'Gelişen teknolojiyi yakından takip ederek CNC dik işleme merkezleri ve CNC torna tezgahları ile AB standartlarında, mikron hassasiyetinde üretim gerçekleştiriyoruz.',
  ],
  specs: [
    { label: 'Kuruluş', value: '1995 — Arifiye, Sakarya' },
    { label: 'Faaliyet', value: 'CNC Talaşlı İmalat' },
    { label: 'Kapasite', value: '50+ CNC & Universal Tezgah' },
    { label: 'Standart', value: 'ISO 9001:2015' },
    { label: 'Konum', value: 'Dörtyol San. Sit. 54. Sk. No: 55' },
  ],
};
