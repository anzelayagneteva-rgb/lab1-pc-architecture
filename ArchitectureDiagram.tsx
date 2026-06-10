import { SectionCard } from './SectionCard';

function Block({
  title,
  subtitle,
  icon,
  color,
  className = '',
}: {
  title: string;
  subtitle?: string;
  icon: string;
  color: string;
  className?: string;
}) {
  const colorMap: Record<string, string> = {
    blue: 'bg-blue-100 border-blue-400 text-blue-800',
    green: 'bg-green-100 border-green-400 text-green-800',
    purple: 'bg-purple-100 border-purple-400 text-purple-800',
    orange: 'bg-orange-100 border-orange-400 text-orange-800',
    red: 'bg-red-100 border-red-400 text-red-800',
    teal: 'bg-teal-100 border-teal-400 text-teal-800',
    indigo: 'bg-indigo-100 border-indigo-400 text-indigo-800',
    slate: 'bg-slate-100 border-slate-400 text-slate-800',
  };

  return (
    <div
      className={`rounded-xl border-2 px-4 py-3 text-center shadow-sm transition-transform hover:scale-105 ${colorMap[color] || colorMap.blue} ${className}`}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-bold text-sm">{title}</div>
      {subtitle && <div className="text-xs opacity-75 mt-0.5">{subtitle}</div>}
    </div>
  );
}

function Arrow({ direction = 'down', label }: { direction?: 'down' | 'right' | 'both-v' | 'both-h'; label?: string }) {
  if (direction === 'down') {
    return (
      <div className="flex flex-col items-center py-1">
        <div className="w-0.5 h-6 bg-slate-400"></div>
        {label && <span className="text-xs text-slate-500 my-0.5">{label}</span>}
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400"></div>
      </div>
    );
  }
  if (direction === 'both-v') {
    return (
      <div className="flex flex-col items-center py-1">
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[6px] border-l-transparent border-r-transparent border-b-slate-400"></div>
        <div className="w-0.5 h-4 bg-slate-400"></div>
        {label && <span className="text-xs text-slate-500 my-0.5">{label}</span>}
        <div className="w-0.5 h-4 bg-slate-400"></div>
        <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-t-[6px] border-l-transparent border-r-transparent border-t-slate-400"></div>
      </div>
    );
  }
  if (direction === 'both-h') {
    return (
      <div className="flex items-center px-1">
        <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-r-[6px] border-t-transparent border-b-transparent border-r-slate-400"></div>
        <div className="h-0.5 w-6 bg-slate-400"></div>
        {label && <span className="text-xs text-slate-500 mx-1">{label}</span>}
        <div className="h-0.5 w-6 bg-slate-400"></div>
        <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[6px] border-t-transparent border-b-transparent border-l-slate-400"></div>
      </div>
    );
  }
  return null;
}

export function ArchitectureDiagram() {
  return (
    <SectionCard title="Структурная схема компьютера" icon="📐" number={5}>
      <p className="text-slate-500 text-sm mb-6 italic">
        Схема построена на основе архитектуры фон Неймана с выделением основных компонентов
      </p>

      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border border-slate-200 p-6 sm:p-8">
        {/* CPU Block */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-4 sm:p-6 w-full max-w-md">
            <h3 className="text-center text-blue-700 font-bold text-sm uppercase tracking-wider mb-4">
              🧠 Центральный процессор (CPU)
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <Block title="АЛУ" subtitle="Арифметико-логическое устройство" icon="➕" color="blue" />
              <Block title="УУ" subtitle="Устройство управления" icon="🎛️" color="indigo" />
            </div>
            <div className="mt-3">
              <Block title="Регистры и кэш-память" subtitle="L1 / L2 / L3" icon="⚡" color="teal" />
            </div>
          </div>

          {/* System Bus */}
          <Arrow direction="both-v" label="" />

          <div className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 text-white font-bold text-sm px-8 py-3 rounded-xl shadow-md w-full max-w-lg text-center">
            🔀 СИСТЕМНАЯ ШИНА (данные / адрес / управление)
          </div>

          <Arrow direction="both-v" />

          {/* Memory + Storage Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl">
            <div className="flex flex-col items-center">
              <Block title="Оперативная память" subtitle="DDR5 — 16 ГБ" icon="📊" color="green" className="w-full" />
            </div>

            <div className="flex flex-col items-center">
              <Block title="Накопитель" subtitle="SSD NVMe — 512 ГБ" icon="💾" color="purple" className="w-full" />
            </div>

            <div className="flex flex-col items-center">
              <Block title="Видеокарта" subtitle="GPU — RTX 3060" icon="🎮" color="red" className="w-full" />
            </div>
          </div>

          <Arrow direction="both-v" />

          {/* I/O Devices */}
          <div className="bg-slate-50 border-2 border-slate-300 rounded-2xl p-4 sm:p-6 w-full max-w-2xl">
            <h3 className="text-center text-slate-700 font-bold text-sm uppercase tracking-wider mb-4">
              Устройства ввода-вывода
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <Block title="Клавиатура" icon="⌨️" color="slate" />
              <Block title="Мышь" icon="🖱️" color="slate" />
              <Block title="Монитор" icon="🖥️" color="slate" />
              <Block title="Сеть" icon="🌐" color="slate" />
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
        <h4 className="font-semibold text-slate-700 mb-2 text-sm">📝 Пояснения к схеме:</h4>
        <ul className="text-sm text-slate-600 space-y-1 list-disc list-inside">
          <li><strong>АЛУ</strong> — выполняет арифметические и логические операции</li>
          <li><strong>УУ</strong> — управляет последовательностью выполнения команд</li>
          <li><strong>Системная шина</strong> — обеспечивает передачу данных между компонентами</li>
          <li><strong>Кэш-память (L1/L2/L3)</strong> — быстрая промежуточная память процессора</li>
          <li><strong>RAM</strong> — оперативная память для хранения данных выполняемых программ</li>
          <li><strong>SSD</strong> — постоянное хранилище данных</li>
        </ul>
      </div>
    </SectionCard>
  );
}
