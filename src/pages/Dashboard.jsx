import React from "react";
import { FileText, UserPlus, FolderOpen, Settings } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-6">
            <img src="/logo.png" alt="Logo" className="w-10 h-10 mr-2" />
            <h2 className="text-xl font-bold text-green-700">ALMA VERDE</h2>
          </div>
          <nav className="flex flex-col gap-4">
            <button className="flex items-center gap-2 text-gray-700 hover:text-green-700">
              <UserPlus size={18} /> Alta de Clientes
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-green-700">
              <FileText size={18} /> Documentación
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-green-700">
              <FolderOpen size={18} /> Explorador
            </button>
            <button className="flex items-center gap-2 text-gray-700 hover:text-green-700">
              <Settings size={18} /> Configuración
            </button>
          </nav>
        </div>
        <p className="text-xs text-gray-400">© Alma Verde 2025</p>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8 overflow-y-auto relative">
        <img
          src="/logo.png"
          alt="Logo Alma Verde"
          className="absolute opacity-5 -z-10 w-96 bottom-10 right-10"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Bienvenido, Administrador</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Dar de alta nuevo cliente</h2>
            <p className="text-sm text-gray-600 mb-4">Crea y registra datos esenciales de clientes potenciales o actuales.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Gestión documental</h2>
            <p className="text-sm text-gray-600 mb-4">Sube, organiza y visualiza archivos de clientes o cooperativas.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Explorador de archivos</h2>
            <p className="text-sm text-gray-600 mb-4">Navega por carpetas de Drive, previsualiza archivos y gestiona jerarquías.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Control de tareas y procesos</h2>
            <p className="text-sm text-gray-600 mb-4">Lista, organiza y asigna tareas por proyecto o cooperativa.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Contabilidad y pagos</h2>
            <p className="text-sm text-gray-600 mb-4">Gestiona facturación, pagos, bancos y flujos económicos.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold text-green-700 mb-2">Usuarios y permisos</h2>
            <p className="text-sm text-gray-600 mb-4">Controla qué puede hacer cada usuario en la plataforma.</p>
            <button className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700">Acceder</button>
          </div>
        </div>
      </main>
    </div>
  );
}
