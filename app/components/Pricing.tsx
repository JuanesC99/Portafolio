'use client';

import { motion, AnimatePresence, } from "framer-motion";
import { useState,  } from 'react';

const pricingPlans = [
  {
    id: 0,
    title: "Básico",
    price: 100, // Cambiado a número para interpolación
    description: "Ideal para iniciar tu presencia online.",
    features: [
      "Te armo una página sencilla con HTML, CSS y JS.",
      "Diseño responsivo.",
      "Despliegue básico.",
      "Soporte por email (7 días)."
    ],
  },
  {
    id: 1,
    title: "Estándar",
    price: 250, // Cambiado a número para interpolación
    description: "Una página moderna y personalizada para crecer.",
    features: [
      "Página con Next.js, animaciones y diseño personalizado.",
      "Optimización SEO básica.",
      "Integración de CMS (opcional).",
      "Soporte prioritario (1 mes)."
    ],
  },
  {
    id: 2,
    title: "Premium",
    price: 500, // Cambiado a número para interpolación
    description: "Solución completa con backend y pasarela de pagos.",
    features: [
      "Página completa Next.js con Backend.",
      "Integración de Stripe (pasarela de pagos).",
      "Mantenimiento y soporte prioritario (3 meses).",
      "Dominio personalizado."
    ],
  },
];

// Función para interpolar colores RGB
const interpolateColor = (color1: number[], color2: number[], factor: number) => {
  const result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(color1[i] + factor * (color2[i] - color1[i]));
  }
  return `rgb(${result.join(',')})`;
};

const Pricing = () => {
  const [sliderIndex, setSliderIndex] = useState(0); // Usaremos sliderIndex para el valor del slider (0, 1, 2)
  const [currentPrice, setCurrentPrice] = useState(pricingPlans[0].price);
  const [sliderColor, setSliderColor] = useState("rgb(255, 0, 0)"); // Rojo inicial

  // Colores para interpolación: Rojo (Básico), Naranja (Estándar), Verde (Premium)
  const colors = [
    [255, 0, 0],    // Rojo
    [255, 165, 0],  // Naranja
    [0, 128, 0]     // Verde
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setSliderIndex(value); // Actualizar el índice del slider

    // Interpolación de precio y color
    // Encuentra los planes entre los que estamos interpolando
    const lowerBoundIndex = Math.floor(value);
    const upperBoundIndex = Math.ceil(value);

    let interpolatedPrice: number;
    let interpolatedColor: string;

    if (lowerBoundIndex === upperBoundIndex) { // Estamos exactamente en un punto de plan
      interpolatedPrice = pricingPlans[lowerBoundIndex].price;
      interpolatedColor = `rgb(${colors[lowerBoundIndex].join(',')})`;
    } else { // Estamos entre dos puntos de plan
      const lowerPlan = pricingPlans[lowerBoundIndex];
      const upperPlan = pricingPlans[upperBoundIndex];
      const factor = value - lowerBoundIndex; // Factor de interpolación (0 a 1)

      interpolatedPrice = lowerPlan.price + factor * (upperPlan.price - lowerPlan.price);
      interpolatedColor = interpolateColor(colors[lowerBoundIndex], colors[upperBoundIndex], factor);
    }

    setCurrentPrice(Math.round(interpolatedPrice)); // Redondear para mostrar sin decimales
    setSliderColor(interpolatedColor);
  };

  // Determinar el selectedPlan basado en el sliderIndex redondeado para mostrar las características correctas
  const selectedPlan = pricingPlans[Math.round(sliderIndex)];
  const fillPercentage = (sliderIndex / (pricingPlans.length - 1)) * 100; // Calcular porcentaje de llenado

  return (
    <motion.section
      id="pricing"
      className="py-20 bg-indigo-700 text-white min-h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto text-center px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Elige Tu Plan
        </motion.h2>

        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg text-gray-800 relative">
          {/* Slider */}
          <input
            type="range"
            min="0"
            max={pricingPlans.length - 1}
            step="0.01"
            value={sliderIndex}
            onChange={handleSliderChange}
            className="w-full h-2 rounded-lg appearance-none cursor-pointer range-lg mb-8 relative z-20" // Añadir z-20 para asegurar que esté encima
            style={{
              // Removido background: sliderColor de aquí
              'WebkitAppearance': 'none',
              'MozAppearance': 'none',
              'appearance': 'none',
            }}
          />
          <style jsx>{`
            input[type="range"]::-webkit-slider-thumb {
              -webkit-appearance: none;
              appearance: none;
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background: ${sliderColor}; /* Color del thumb */
              cursor: grab; /* Cambiar a cursor de agarre */
              margin-top: -8px;
              box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
              transition: background 0.3s ease;
            }

            input[type="range"]::-moz-range-thumb {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background: ${sliderColor};
              cursor: grab; /* Cambiar a cursor de agarre */
              box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
              transition: background 0.3s ease;
            }

            input[type="range"]::-ms-thumb {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background: ${sliderColor};
              cursor: grab; /* Cambiar a cursor de agarre */
              box-shadow: 0px 0px 5px rgba(0,0,0,0.3);
              transition: background 0.3s ease;
            }

            /* Estilos para el track (la barra del slider) */
            input[type="range"]::-webkit-slider-runnable-track {
              width: 100%;
              height: 8px;
              cursor: pointer;
              background: linear-gradient(to right, ${sliderColor} ${fillPercentage}%, #ddd ${fillPercentage}%); /* Degradado para el llenado */
              border-radius: 4px;
            }

            input[type="range"]::-moz-range-track {
              width: 100%;
              height: 8px;
              cursor: pointer;
              background: linear-gradient(to right, ${sliderColor} ${fillPercentage}%, #ddd ${fillPercentage}%); /* Degradado para el llenado */
              border-radius: 4px;
            }

            input[type="range"]::-ms-track {
              width: 100%;
              height: 8px;
              cursor: pointer;
              background: linear-gradient(to right, ${sliderColor} ${fillPercentage}%, #ddd ${fillPercentage}%); /* Degradado para el llenado */
              border-radius: 4px;
            }
          `}</style>
          <div className="flex justify-between text-sm text-gray-600 mb-6">
            <span>Básico</span>
            <span>Estándar</span>
            <span>Premium</span>
          </div>

          {/* Dynamic Plan Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedPlan.id} // Important for AnimatePresence to detect changes
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-left"
            >
              <h3 className="text-3xl font-semibold mb-4 text-indigo-700">{selectedPlan.title}</h3>
              <p className="text-5xl font-bold mb-4 text-indigo-800">${currentPrice}</p>
              <p className="text-lg mb-6">{selectedPlan.description}</p>
              <ul className="mb-8 space-y-2">
                {selectedPlan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green-500 mr-2">✔️</span> {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition duration-300 transform hover:scale-105 active:scale-95">
                Elegir Plan {selectedPlan.title}
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
