'use client';
import { useResponsive } from '@/context/ResponsiveProvider';
import Back from '@/ui/Back';

const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  const { active } = useResponsive();

  return (
    <>
      <Back />
      <aside
        className={`${
          active ? ' right-0 top-0' : '-right-80 top-0'
        } fixed z-10 w-[280px] bg-zinc-50 h-screen lg:h-auto border-l-2 border-[#e6e7ee] space-y-3 transition-all duration-300`}
      >
        {children}
      </aside>
    </>
  );
};

export default SidebarWrapper;
