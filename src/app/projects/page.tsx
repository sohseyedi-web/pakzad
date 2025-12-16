'use client';

import { useState, useMemo } from 'react';
import { projectsItems } from '@/constant/projects';

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(() => {
    return projectsItems.filter(project =>
      project.employer.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section className="max-w-5xl mx-auto py-10 px-4 space-y-6">
      {/* Search */}
      <div className="max-w-md">
        <input
          type="text"
          placeholder="جست و جو پروژه ها"
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full rounded-xl border border-zinc-300 px-4 py-3 text-sm focus:outline-none transition-all focus:ring-2 focus:ring-orange-400"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6">
        {filteredProjects.map(project => {
          const isOpen = openId === project.id;

          return (
            <div
              key={project.id}
              className="border border-zinc-200 shadow-sm rounded-2xl bg-white overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggle(project.id)}
                className="w-full flex items-center justify-between p-4 bg-white cursor-pointer hover:bg-gray-100 transition"
              >
                <h3 className="text-sm sm:text-base font-semibold text-zinc-800 text-right leading-6">
                  {project.employer}
                </h3>

                <span
                  className={`text-orange-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                >
                  ▼
                </span>
              </button>

              {/* Accordion */}
              <div
                className={`grid transition-all duration-300 ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-4 space-y-4 text-sm text-zinc-700">
                    <div>
                      <p className="font-semibold text-orange-500 mb-1">موضوع</p>
                      <p className="leading-7">{project.subject}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-orange-500 mb-1">محل اجرا</p>
                      <p>{project.location}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-orange-500 mb-1">شرح کالاهای تأمین‌شده</p>
                      <ul className="list-disc pr-5 space-y-1">
                        {project.suppliedItems.map(item => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <p className="text-center text-zinc-500">موردی با این نام پیدا نشد</p>
      )}
    </section>
  );
}
