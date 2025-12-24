'use client';

import { Customlink } from '@/ui/Customlink';
import { RiInstagramLine, RiTelegramLine, RiWhatsappLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* ستون اول */}
        <div>
          <h3 className="text-xl font-bold mb-3">پیشتاز تامین پاکزاد مهر</h3>

          <p className="text-sm mb-4 leading-7">
            آدرس : استان تهران شهرستان تهران شهر تهران - مرکزی میدان امام خمینی (ره) کوچه بوشهری
            خیابان سعدی پلاک ۲۱۸ طبقه همکف
          </p>

          <div className="flex items-center gap-4 mt-4">
            <a href="#" className="hover:text-orange-400 transition">
              <RiInstagramLine size={28} />
            </a>

            <a href="#" className="hover:text-green-400 transition">
              <RiWhatsappLine size={28} />
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              <RiTelegramLine size={28} />
            </a>
          </div>
        </div>

        {/* ستون دوم */}
        <div>
          <h3 className="text-xl font-bold mb-3">دسترسی ها</h3>
          <ul className="space-y-3 text-sm flex-col flex">
            <Customlink title="خانه" to="/" />
            <Customlink title="تجهیزات" to="/equipment" />
            <Customlink title="پروژه ها" to="/projects" />
            <Customlink title="چارت سازمانی" to="/structure" />
            <Customlink title="درباره ما" to="/about-us" />
            <Customlink title="تماس با ما" to="/contact-us" />
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">ارتباط با ما</h3>
          <p className="text-sm mb-2">تلفن ۱: ۰۹۱۶۷۶۶۰۶۷۸</p>
          <p className="text-sm mb-2">تلفن ۲: ۰۹۱۶۵۹۵۰۶۹۷</p>
          <p className="text-sm mb-2">تلفن ۳: ۰۹۳۷۷۹۳۰۰۲۱</p>
          <p className="text-sm mt-4">ایمیل: info@example.com</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-400 mt-10 border-t border-white/20 pt-4">
        © 2025 پیشتاز تامین پاکزاد مهر - تمام حقوق محفوظ است
      </div>
    </footer>
  );
}
