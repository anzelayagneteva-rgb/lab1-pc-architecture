import { SectionCard } from './SectionCard';

export function Conclusions() {
  return (
    <SectionCard title="Выводы" icon="✅" number={6}>
      <div className="space-y-4 text-slate-700 leading-relaxed">
        <p>
          В ходе лабораторной работы были изучены основные компоненты персонального компьютера
          и определены их характеристики с помощью встроенных средств операционной системы
          (Диспетчер задач, вкладка «Производительность») и специализированной утилиты CPU-Z.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
          <h4 className="font-semibold text-blue-800 mb-2">Основные результаты:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">●</span>
              <span>
                <strong>Процессор:</strong> Intel Core i7-12700H — гибридная архитектура (Alder Lake)
                с 14 ядрами (6 производительных + 8 энергоэффективных) и 20 потоками,
                максимальная тактовая частота 4.7 ГГц.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">●</span>
              <span>
                <strong>Оперативная память:</strong> 16 ГБ DDR5-4800 в двухканальном режиме,
                что обеспечивает высокую пропускную способность.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">●</span>
              <span>
                <strong>Накопитель:</strong> SSD NVMe объёмом 512 ГБ с интерфейсом PCIe 4.0 x4,
                обеспечивающий высокую скорость чтения/записи.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 mt-0.5">●</span>
              <span>
                <strong>Кэш-память:</strong> трёхуровневая иерархия — L1 (раздельный для ядер),
                L2 (для каждого кластера), L3 — 24 МБ общий.
              </span>
            </li>
          </ul>
        </div>

        <p>
          Построена структурная схема компьютера, наглядно отображающая взаимосвязь между
          процессором, оперативной памятью, накопителем и устройствами ввода-вывода через
          системную шину. Схема основана на классической архитектуре фон Неймана.
        </p>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
          <p className="text-green-800">
            <strong>Вывод:</strong> Исследуемый ПК обладает современной архитектурой с гибридным
            процессором, быстрой оперативной памятью DDR5 и высокоскоростным SSD-накопителем.
            Все компоненты связаны через системную шину и работают согласованно под управлением
            процессора. Цель лабораторной работы достигнута.
          </p>
        </div>
      </div>
    </SectionCard>
  );
}
