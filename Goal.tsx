import { SectionCard } from './SectionCard';

export function Goal() {
  return (
    <SectionCard title="Цель работы" icon="🎯" number={1}>
      <p className="text-slate-700 leading-relaxed text-lg">
        Изучить основные компоненты персонального компьютера и определить их характеристики.
      </p>
    </SectionCard>
  );
}
