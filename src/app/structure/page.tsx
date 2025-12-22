'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Structure() {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full py-10 flex flex-col items-center gap-6">
      <h2 className="text-3xl text-orange-500 font-bold">چارت سازمانی</h2>

      <div
        className="cursor-pointer rounded-lg overflow-hidden shadow-sm"
        onClick={() => setOpen(true)}
      >
        <Image
          src="/structure.webp"
          alt="چارت سازمانی"
          width={400}
          height={250}
          className="object-cover"
        />
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="relative bg-white rounded-lg p-4 max-w-4xl w-full mx-4">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
            >
              ✕
            </button>

            <div className="w-full h-auto">
              <Image
                src="/structure.webp"
                alt="چارت سازمانی"
                width={1200}
                height={800}
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
