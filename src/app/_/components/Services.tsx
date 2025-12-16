import ServiceBox from '@/ui/ServiceBox';
import { RiSettings3Fill, RiCoinsLine, RiTimerFlashFill } from 'react-icons/ri';
import { FaPeopleGroup, FaArrowTrendUp } from 'react-icons/fa6';
import { IoBuild } from 'react-icons/io5';

const services = [
  {
    icon: RiSettings3Fill,
    text: 'ایجاد زیرساخت مناسب',
  },
  {
    icon: RiCoinsLine,
    text: 'هماهنگ با منابع مالی شما',
  },
  {
    icon: FaPeopleGroup,
    text: 'تیم موفق و با سابقه',
  },
  {
    icon: FaArrowTrendUp,
    text: 'افزایش ظرفیت تولید',
  },
  {
    icon: RiTimerFlashFill,
    text: 'دقیق منظم و وقت شناس',
  },
  {
    icon: IoBuild,
    text: 'تجهیزات کامل و به روز',
  },
];

const Services = () => {
  return (
    <section className="py-10 flex flex-col lg:flex-row justify-between mx-auto gap-8  max-w-5xl">
      {/* Title */}
      <div>
        <h6 className="text-orange-500 font-semibold mb-2 text-3xl">گروه صنعتی پاکزاد</h6>
        <p className="text-gray-700 text-lg">ما همراه شما هستیم</p>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map(({ icon: Icon, text }, index) => (
          <ServiceBox
            key={index}
            icon={<Icon size={28} className="text-orange-500" />}
            text={text}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
