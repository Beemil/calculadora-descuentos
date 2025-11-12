import {useState, useEffect, useCallback} from 'react';
import { toast } from 'react-hot-toast';
import type {Descuento, NombreProducto } from '../types/Descuento';

const useDescuento = () => {
    const [descuento, setDescuento] = useState<Descuento> ({
        producto1: 0,
        producto2: 0,
        producto3: 0,
        producto4: 0,
        producto5: 0,
        subtotal: 0,
        porcentajeDescuento: 0,
        montoDescuento: 0,
        totalPagar: 0,
    });

    //Calcular descuento segun monto

    const calcularPorcentajeDescuento = (subtotal: number): number => {
        if (subtotal >= 13000) return 0;
        if (subtotal >= 9000) return 30;
        if (subtotal >= 5000) return 20;
        if (subtotal >= 1000) return 10;
        return 0; // Para montos menores a 1000
    };

    //calculo completo
    const calcularDescuento = useCallback(() => {
        const subtotal =
        descuento.producto1+
        descuento.producto2+
        descuento.producto3+
        descuento.producto4+
        descuento.producto5;

        const porcentaje = calcularPorcentajeDescuento (subtotal);
        const monto = (subtotal * porcentaje) / 100;
        const total = subtotal - monto;

        return{
            subtotal: Number(subtotal.toFixed(2)),
            porcentajeDescuento: porcentaje,
            montoDescuento: Number(monto.toFixed(2)),
            totalPagar: Number(total.toFixed(2)),
        };
    }, [descuento.producto1, descuento.producto2, descuento.producto3, descuento.producto4, descuento.producto5]);

    //calculo automatico
    useEffect(() => {
        const resultado = calcularDescuento();
        setDescuento((prev) =>({
            ...prev,
            subtotal: resultado.subtotal,
            porcentajeDescuento: resultado.porcentajeDescuento,
            montoDescuento: resultado.montoDescuento,
            totalPagar: resultado.totalPagar,
        }));
    }, [calcularDescuento]);

    const handleCambiarProducto = (nombreProducto: NombreProducto, valor: string) => {
        if (valor === ""){
            setDescuento ((prev)=>({
                ...prev,
                [nombreProducto]: 0,
            }));
            return;
        }

        const numValue = parseFloat (valor);

        if (isNaN(numValue) || numValue < 0) {
            toast.error('Ingrese un valor valido');
            return;
        }

        setDescuento((prev) => ({
            ...prev,
            [nombreProducto]: numValue,
        }));
    };
    

    //limpiar
    const handleLimpiar = () => {
        setDescuento({
            producto1: 0,
            producto2: 0,
            producto3: 0,
            producto4: 0,
            producto5: 0,
            subtotal: 0,
            porcentajeDescuento: 0,
            montoDescuento: 0,
            totalPagar: 0,
        });
        toast('Formulario limpio');
    };
    return {
        descuento,
        handleCambiarProducto,
        handleLimpiar,
    };
};

export default useDescuento;