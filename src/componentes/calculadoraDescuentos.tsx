import React from 'react';
import { Toaster } from 'react-hot-toast';
import useDescuento from '../hooks/useDescuento';
import InputProducto from './InputProducto';

const CalculadoraDescuento: React.FC = () => {
  const {
    descuento,
    handleCambiarProducto,
    handleLimpiar,
  } = useDescuento();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 sm:p-10 font-sans">
      <Toaster 
        position="top-center"
        toastOptions={{
          duration: 2000,
          style: {
            background: '#363636',
            color: '#fff',
            fontWeight: 'bold',
          },
          success: {
            style: { background: '#10b981' },
          },
          error: {
            style: { background: '#ef4444' },
          },
        }}
      />
      
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          {/* Título */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
               Calculadora de Descuentos
            </h1>
            <p className="text-gray-600 text-lg">
              Descuentos por compra
            </p>
          </div>

          {/* Formulario Productos*/}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Ingresa el precio:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InputProducto
                label="Producto 1"
                value={descuento.producto1}
                name="producto1"
                onChange={handleCambiarProducto}
              />
              <InputProducto
                label="Producto 2"
                value={descuento.producto2}
                name="producto2"
                onChange={handleCambiarProducto}
              />
              <InputProducto
                label="Producto 3"
                value={descuento.producto3}
                name="producto3"
                onChange={handleCambiarProducto}
              />
              <InputProducto
                label="Producto 4"
                value={descuento.producto4}
                name="producto4"
                onChange={handleCambiarProducto}
              />
              <InputProducto
                label="Producto 5"
                value={descuento.producto5}
                name="producto5"
                onChange={handleCambiarProducto}
              />
            </div>
          </div>

          {/* Resultados */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 mb-6 border-2 border-green-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Resumen de Compra
            </h2>
            
            <div className="space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700">
                  Subtotal:
                </label>
                <input
                  type="text"
                  value={`L. ${descuento.subtotal.toFixed(2)}`}
                  readOnly
                  className="w-40 px-4 py-2 bg-white border-2 border-gray-300 rounded-lg text-right font-bold text-gray-700"
                />
              </div>

              {/* Descuento */}
              <div className="flex justify-between items-center">
                <label className="text-sm font-bold text-gray-700">
                  Descuento {descuento.porcentajeDescuento}%:
                </label>
                <input
                  type="text"
                  value={`L. ${descuento.montoDescuento.toFixed(2)}`}
                  readOnly
                  className="w-40 px-4 py-2 bg-white border-2 border-orange-300 rounded-lg text-right font-bold text-orange-600"
                />
              </div>

              {/* Total a Pagar */}
              <div className="flex justify-between items-center pt-4 border-t-2 border-green-300">
                <label className="text-lg font-bold text-gray-800">
                  Total a Pagar:
                </label>
                <input
                  type="text"
                  value={`L. ${descuento.totalPagar.toFixed(2)}`}
                  readOnly
                  className="w-40 px-4 py-2 bg-green-600 text-white border-2 border-green-700 rounded-lg text-right font-bold text-xl"
                />
              </div>
            </div>
          </div>

          {/* Tabla de descuentos */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6 border-2 border-blue-200">
            <h3 className="text-sm font-bold text-blue-900 mb-2">
               Tabla de Descuentos:
            </h3>
            <ul className="text-xs text-blue-800 space-y-1">
              <li>• L.0.00 - L.999.99: 0% descuento</li>
              <li>• L.1,000.00 - L.4,999.99: 10% descuento</li>
              <li>• L.5,000.00 - L.8,999.99: 20% descuento</li>
              <li>• L.9,000.00 - L.12,999.99: 30% descuento</li>
              <li>• L.13,000.00 en adelante: 0% descuento</li>
            </ul>
          </div>

          {/* Botón limpiar */}
          <button
            onClick={handleLimpiar}
            className="w-full py-4 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-bold text-lg transition-all duration-200 transform hover:scale-105"
          >
            Limpiar Formulario
          </button>

        </div>
      </div>
    </div>
  );
};

export default CalculadoraDescuento;