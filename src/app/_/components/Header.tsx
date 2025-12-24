import Image from 'next/image';

export default function Header() {
  return (
    <section className="relative h-[90vh] sm:h-[85vh] w-full overflow-hidden">
      <Image src="/bg.webp" alt="Pishtaz" fill priority className="object-cover" />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative flex h-full items-center justify-center px-4">
        <div className="max-w-4xl text-center text-orange-500 space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">شرکت پیشتاز تأمین مهر</h1>

          <p className="text-sm lg:text-base text-zinc-200 leading-relaxed">
            تأمین تجهیزات و قطعات برقی، مکانیکی و هیدرولیکی
          </p>
        </div>
      </div>
    </section>
  );
}
