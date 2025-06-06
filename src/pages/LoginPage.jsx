import React from "react";

export default function LoginPage() {
  return (
    <div className="flex h-screen bg-gray-100 justify-center items-center">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">ALMA VERDE</h2>
        <h3 className="text-md text-center text-gray-500 mb-6">Acceso a la plataforma</h3>

        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Usuario</label>
            <input
              type="text"
              placeholder="Tu usuario"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-xl transition"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-xs text-gray-400 text-center mt-6">© Alma Verde Edificación Ecoeficiente</p>
      </div>
    </div>
  );
}
