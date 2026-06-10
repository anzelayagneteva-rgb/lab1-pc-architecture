import { SectionCard } from './SectionCard';

interface SpecRow {
  component: string;
  parameter: string;
  value: string;
  icon: string;
}

const specs: SpecRow[] = [
  { component: 'Процессор (CPU)', parameter: 'Модель', value: 'Intel Core i7-12700H', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Количество ядер', value: '14 (6P + 8E)', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Количество потоков', value: '20', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Базовая частота', value: '2.3 ГГц (P-ядра)', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Макс. частота (Turbo)', value: '4.7 ГГц', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Кэш L1', value: '80 КБ × 6 + 64 КБ × 8 (данные)', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Кэш L2', value: '1.25 МБ × 6 + 2 МБ × 2', icon: '🧠' },
  { component: 'Процессор (CPU)', parameter: 'Кэш L3', value: '24 МБ (общий)', icon: '🧠' },
  { component: 'Оперативная память (RAM)', parameter: 'Объём', value: '16 ГБ (2 × 8 ГБ)', icon: '📊' },
  { component: 'Оперативная память (RAM)', parameter: 'Тип', value: 'DDR5-4800', icon: '📊' },
  { component: 'Оперативная память (RAM)', parameter: 'Режим работы', value: 'Двухканальный', icon: '📊' },
  { component: 'Накопитель', parameter: 'Тип', value: 'SSD (NVMe M.2)', icon: '💾' },
  { component: 'Накопитель', parameter: 'Объём', value: '512 ГБ', icon: '💾' },
  { component: 'Накопитель', parameter: 'Интерфейс', value: 'PCIe 4.0 x4', icon: '💾' },
  { component: 'Видеокарта (GPU)', parameter: 'Модель', value: 'NVIDIA GeForce RTX 3060 Laptop', icon: '🎮' },
  { component: 'Видеокарта (GPU)', parameter: 'Видеопамять', value: '6 ГБ GDDR6', icon: '🎮' },
];

export function SpecsTable() {
  // Group by component
  const grouped: Record<string, SpecRow[]> = {};
  specs.forEach((s) => {
    if (!grouped[s.component]) grouped[s.component] = [];
    grouped[s.component].push(s);
  });

  return (
    <SectionCard title="Таблица характеристик компьютера" icon="📊" number={4}>
      <p className="text-slate-500 text-sm mb-4 italic">
        * Данные получены с помощью Диспетчера задач (вкладка «Производительность») и утилиты CPU-Z
      </p>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
              <th className="text-left px-4 py-3 rounded-tl-lg font-semibold text-sm">Компонент</th>
              <th className="text-left px-4 py-3 font-semibold text-sm">Параметр</th>
              <th className="text-left px-4 py-3 rounded-tr-lg font-semibold text-sm">Значение</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(grouped).map(([component, rows], gi) => (
              rows.map((row, ri) => (
                <tr
                  key={`${gi}-${ri}`}
                  className={`border-b border-slate-100 transition-colors hover:bg-blue-50 ${
                    gi % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                  }`}
                >
                  {ri === 0 && (
                    <td
                      rowSpan={rows.length}
                      className="px-4 py-3 font-semibold text-slate-800 border-r border-slate-100 align-top"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{row.icon}</span>
                        <span>{component}</span>
                      </div>
                    </td>
                  )}
                  <td className="px-4 py-3 text-slate-600">{row.parameter}</td>
                  <td className="px-4 py-3 text-slate-800 font-mono text-sm font-medium">
                    {row.value}
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </SectionCard>
  );
}
