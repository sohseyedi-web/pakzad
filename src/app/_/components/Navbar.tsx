'use client';
import { useResponsive } from '@/context/ResponsiveProvider';
import { Customlink } from '@/ui/Customlink';
import { FaLinesLeaning } from 'react-icons/fa6';
import { LuMail, LuPhone } from 'react-icons/lu';
import Image from 'next/image';

const Navbar = () => {
  const { active, setActive } = useResponsive();

  return (
    <nav className="md:px-7 px-3 flex items-center justify-between border-b-2 border-zinc-200 bg-[#fafafa] container mx-auto">
      <div className="flex items-center space-x-7">
        <Image
          src="/logo.webp"
          alt="پیشتاز تامین"
          width={90}
          height={90}
          className="object-cover"
        />
        <ul className="lg:flex hidden items-center space-x-7">
          <Customlink title="خانه" to="/" />
          <Customlink title="تجهیزات" to="/equipment" />
          <Customlink title="پروژه ها" to="/projects" />
          <Customlink title="درباره ما" to="/about-us" />
          <Customlink title="تماس با ما" to="/contact-us" />
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="bg-orange-500 flex items-center gap-4 px-5 py-2 rounded-lg">
          <a href="tel:09377930021" className="text-white">
            <LuPhone className="md:size-6 size-5" />
          </a>
          <a href="mailto:info@example.com" className="text-white">
            <LuMail className="md:size-6 size-5" />
          </a>
        </div>
        <FaLinesLeaning
          className="cursor-pointer size-6 lg:hidden block hover:text-orange-500 text-zinc-800 transition-all"
          onClick={() => setActive(!active)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
