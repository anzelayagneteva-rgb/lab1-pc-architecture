export function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white shadow-xl">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-14 h-14 bg-white/20 backdrop-blur rounded-xl flex items-center justify-center text-3xl">
            🖥️
          </div>
          <div>
            <p className="text-blue-200 text-sm font-medium tracking-wider uppercase">
              Лабораторная работа №1
            </p>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Исследование архитектуры ПК
            </h1>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-4 text-sm text-blue-100">
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
            <span className="text-blue-300">Дисциплина:</span>{' '}
            Информатика
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
            <span className="text-blue-300">Выполнил:</span>{' '}
            Студент группы
          </div>
          <div className="bg-white/10 backdrop-blur rounded-lg px-4 py-2">
            <span className="text-blue-300">Дата:</span>{' '}
            2025
          </div>
        </div>
      </div>
    </header>
  );
}
