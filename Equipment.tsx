import { SectionCard } from './SectionCard';

export function Equipment() {
  const items = [
    { icon: '💻', text: 'Персональный компьютер' },
    { icon: '🪟', text: 'Операционная система Windows или Linux' },
    { icon: '🔧', text: 'Утилиты: CPU-Z, AIDA64, Диспетчер задач или lscpu' },
  ];

  return (
    <SectionCard title="Оборудование и программное обеспечение" icon="🛠️" number={2}>
      <div className="grid gap-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-slate-50 rounded-lg px-4 py-3 border border-slate-100"
          >
            <span className="text-2xl">{item.icon}</span>
            <span className="text-slate-700">{item.text}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
