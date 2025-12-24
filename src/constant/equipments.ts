export interface EquipmentItem {
  id: string;
  title: string;
  brands: string[];
  usage: string;
  activity: string;
}

export const equipmentsItems: EquipmentItem[] = [
  {
    id: '1',
    title: 'الکتروموتور',
    brands: ['ABB', 'VEM / آلمان', 'Valiadis / یونان', 'Helmke / آلمان'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی، آب و فاضلاب و...',
    activity: 'تأمین‌کننده',
  },
  {
    id: '2',
    title: 'کنترل ولو',
    brands: ['Fisher / آمریکا', 'Koso / ژاپن'],
    usage: 'صنایع نفت، گاز و پتروشیمی',
    activity: 'تأمین‌کننده',
  },
  {
    id: '3',
    title: 'شیرهای SRV',
    brands: ['Leser / آلمان'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی',
    activity: 'تأمین‌کننده',
  },
  {
    id: '4',
    title: 'اتصالات، فلنج و گسکت',
    brands: [
      'Galperti / ایتالیا',
      'Ulma / اسپانیا',
      'Melesi / ایتالیا',
      'Chero Piping / ایتالیا',
      'سایر سازندگان معتبر',
    ],
    usage: 'صنایع نفت، گاز، پتروشیمی و نیروگاهی',
    activity: 'تأمین‌کننده',
  },
  {
    id: '5',
    title: 'ممبران',
    brands: ['Filmtec / آمریکا'],
    usage: 'آب شیرین‌کن و سیستم‌های تصفیه آب (RO)',
    activity: 'عامل فروش',
  },
  {
    id: '6',
    title: 'بیرینگ',
    brands: ['SKF'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد و معدنی',
    activity: 'تأمین‌کننده',
  },
  {
    id: '7',
    title: 'گیربکس',
    brands: ['سازندگان معتبر اروپایی و آسیایی'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی، آب و فاضلاب و...',
    activity: 'تأمین‌کننده',
  },
  {
    id: '8',
    title: 'ترانسفورماتورهای قدرت',
    brands: ['ABB', 'Siemens', 'SGB'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی، آب و فاضلاب و...',
    activity: 'تأمین‌کننده',
  },
  {
    id: '9',
    title: 'آنالایزر',
    brands: ['E&H / آلمان', 'Hach / آلمان'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی، آب و فاضلاب و...',
    activity: 'تأمین‌کننده',
  },
  {
    id: '10',
    title: 'انواع گیج',
    brands: ['WIKA / آلمان', 'Nuova Fima / ایتالیا'],
    usage: 'صنایع نفت، گاز، پتروشیمی، فولاد، نیروگاهی، آب و فاضلاب و...',
    activity: 'تأمین‌کننده',
  },
  {
    id: '11',
    title: 'رگولاتورهای صنعتی',
    brands: ['Insert Deal / ایتالیا'],
    usage: 'صنایع نفت، گاز و پتروشیمی',
    activity: 'تأمین‌کننده',
  },
  {
    id: '12',
    title: 'شیرآلات مکانیکی',
    brands: ['سازندگان معتبر اروپایی', 'ژاپنی', 'کره‌ای', 'چینی'],
    usage: 'صنایع نفت، گاز، پتروشیمی، نیروگاهی',
    activity: 'تأمین‌کننده',
  },
];
