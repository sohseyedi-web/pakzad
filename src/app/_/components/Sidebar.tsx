import { Customlink } from '@/ui/Customlink';
import SidebarWrapper from '@/components/SidebarWrapper';

const Sidebar = () => {
  return (
    <SidebarWrapper>
      <section className="flex flex-col w-full h-screen py-3 px-8">
        <div className=" text-right">
          <h2 className="text-3xl font-bold text-[#292a35]">تامین پاکزاد مهر</h2>
        </div>
        <ul className="flex-1 my-8 flex flex-col space-y-7">
          <Customlink title="خانه" to="/" />
          <Customlink title="تجهیزات" to="/equipment" />
          <Customlink title="پروژه ها" to="/projects" />
          <Customlink title="درباره ما" to="/about-us" />
          <Customlink title="تماس با ما" to="/contact-us" />
        </ul>
      </section>
    </SidebarWrapper>
  );
};

export default Sidebar;
