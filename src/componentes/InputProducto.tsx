import React from 'react';
import type { NombreProducto } from '../types/Descuento';

interface InputProductoProps{
    label: string;
    value:number;
    name: NombreProducto;
    onChange: (name: NombreProducto, value: string) => void;
}

const InputProducto: React.FC<InputProductoProps> = ({
    label,
    value,
    name,
    onChange
}) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">
                {label}
            </label>
            <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lg font-bold text-gray-500">
                    L.
                </span>
                <input
                    type="number"
                    value={value || ""}
                    onChange={(e) => onChange(name, e.target.value)}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                    className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-lg font-semibold focus:outline-none focus:border-blue-500 transition duration-150"
                />
            </div>
        </div> 
    );
};

export default InputProducto;