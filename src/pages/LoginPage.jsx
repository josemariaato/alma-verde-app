import React from "react";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-green-800 mb-2">ALMA VERDE</h1>
        <p className="text-center text-gray-600 mb-6">Acceso a la plataforma</p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="usuario">Usuario</label>
            <input
              id="usuario"
              type="text"
              placeholder="Tu usuario"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1" htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition-colors"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-xs text-center text-gray-400 mt-6">
          Alma Verde Edificación Ecoeficiente, S.L.
        </p>
      </div>
    </div>
  );
}
