'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Customlink = {
  title: string;
  to: string;
};

export const Customlink = ({ title, to }: Customlink) => {
  const pathname = usePathname();
  const navlinkClass = 'lg:text-base transition-all duration-300 hover:text-orange-600';

  return (
    <Link
      href={to}
      className={
        pathname === to
          ? `${navlinkClass} lg:font-semibold font-medium text-orange-400`
          : `${navlinkClass}`
      }
    >
      {title}
    </Link>
  );
};
