export default function AboutUs() {
  return (
    <div className="max-w-5xl py-12 px-4 sm:px-6 lg:px-0 mx-auto">
      <div className="text-right space-y-3.5">
        <h2 className="text-2xl pb-3 font-bold text-orange-500 lg:text-4xl md:text-3xl">
          شرکت پیشتاز تأمین پاکزاد مهر
        </h2>
        <p className="mt-4 lg:text-lg md:text-base text-sm text-zinc-700 leading-9">
          شرکت پیشتاز تأمین پاکزاد مهر با تمرکز بر ارائه خدمات مهندسی خرید و تأمین تجهیزات تخصصی، در
          راستای پاسخ‌گویی به نیاز صنایع کشور مطابق با استانداردهای روز دنیا فعالیت می‌کند. این
          مجموعه با بهره‌گیری از نیروهای متخصص و مجرب و همکاری با برندهای معتبر بین‌المللی، توانسته
          است نقش مؤثری در تأمین تجهیزات مورد نیاز صنایع مختلف ایفا کند.
        </p>
        <p className="mt-4 lg:text-lg md:text-base text-sm text-zinc-700 leading-9">
          پیشتاز تأمین پاکزاد مهر با رویکردی حرفه‌ای، خدمات خود را از مرحله بررسی مشخصات فنی و
          مشاوره مهندسی تا تأمین و تحویل کالا به کارفرمایان ارائه می‌دهد و همواره تلاش دارد با کیفیت
          مطلوب، قیمت بهینه و حداقل زمان، رضایت مشتریان خود را جلب نماید.
        </p>
        <p className="mt-4 lg:text-lg md:text-base text-sm text-zinc-700 leading-9">
          این شرکت با پایبندی به اصول مشتری‌مداری، بهبود مستمر کیفیت خدمات و همگام‌سازی با
          استانداردهای جهانی، در مسیر توسعه پایدار و افزایش سهم مؤثر خود در صنعت گام برمی‌دارد و
          افتخار دارد با تأمین کالا و تجهیزات صنعتی، نقشی مؤثر در پیشرفت صنایع کشور داشته باشد.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base font-semibold text-orange-500">
              حوزه‌های فعالیت
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>۱. مهندسی خرید</li>
              <li>۲. تأمین تجهیزات داخلی و خارجی</li>
              <li>۳. مشارکت در پروژه‌های EPC</li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="lg:text-xl md:text-lg text-base font-semibold text-orange-500">
              صنایع هدف
            </h3>
            <ul className="mt-4 space-y-2 text-zinc-700">
              <li>۱. نفت و گاز</li>
              <li>۲. پتروشیمی</li>
              <li>۳. فولاد</li>
              <li>۴. نیروگاه‌ها</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
