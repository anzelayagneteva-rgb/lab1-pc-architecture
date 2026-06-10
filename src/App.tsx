import { Header } from './components/Header';
import { Goal } from './components/Goal';
import { Equipment } from './components/Equipment';
import { Procedure } from './components/Procedure';
import { SpecsTable } from './components/SpecsTable';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { Conclusions } from './components/Conclusions';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 pb-16">
        <Goal />
        <Equipment />
        <Procedure />
        <SpecsTable />
        <ArchitectureDiagram />
        <Conclusions />
      </main>
      <footer className="bg-slate-800 text-slate-400 text-center py-6 text-sm">
        Лабораторная работа №1 — Исследование архитектуры ПК &copy; 2025
      </footer>
    </div>
  );
}
