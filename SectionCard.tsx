import { type ReactNode } from 'react';

interface SectionCardProps {
  title: string;
  icon: string;
  number: number;
  children: ReactNode;
}

export function SectionCard({ title, icon, number, children }: SectionCardProps) {
  return (
    <section className="bg-white rounded-2xl shadow-md border border-slate-100 overflow-hidden">
      <div className="flex items-center gap-3 bg-gradient-to-r from-slate-50 to-white px-6 py-4 border-b border-slate-100">
        <span className="text-2xl">{icon}</span>
        <div>
          <span className="text-xs text-blue-500 font-semibold uppercase tracking-wider">
            Раздел {number}
          </span>
          <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        </div>
      </div>
      <div className="px-6 py-5">{children}</div>
    </section>
  );
}
