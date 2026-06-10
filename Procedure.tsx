import { SectionCard } from './SectionCard';

export function Procedure() {
  const steps = [
    'Открыть Диспетчер задач и перейти на вкладку «Производительность».',
    'Определить характеристики процессора: модель, количество ядер, количество потоков, частоту.',
    'Определить параметры оперативной памяти: объём и тип памяти.',
    'Определить тип накопителя (SSD или HDD) и его объём.',
    'С помощью CPU-Z или аналогичной программы определить размер кэш-памяти L1, L2 и L3.',
    'Построить структурную схему компьютера (процессор, память, накопитель, устройства ввода-вывода).',
  ];

  return (
    <SectionCard title="Порядок выполнения" icon="📋" number={3}>
      <ol className="space-y-3">
        {steps.map((step, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-sm">
              {i + 1}
            </span>
            <span className="text-slate-700 pt-1 leading-relaxed">{step}</span>
          </li>
        ))}
      </ol>
    </SectionCard>
  );
}
