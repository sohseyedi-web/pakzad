import React from 'react';

type ServiceBoxProp = {
  icon: React.ReactNode;
  text: string;
};

const ServiceBox = ({ icon, text }: ServiceBoxProp) => {
  return (
    <div className="shadow h-[55px] rounded-xl border border-zinc-100 px-6 flex items-center gap-x-4">
      {icon}
      <span className="font-semibold text-lg text-zinc-700">{text}</span>
    </div>
  );
};

export default ServiceBox;
