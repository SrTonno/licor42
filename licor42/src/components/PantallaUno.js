import React, { useMemo }  from "react";

// Función para calcular el ancho del cable
const calculateCableWidth = (kw) => {
	const maxKw = 3384;
	const maxWidth = 14; // Máximo ancho en píxeles
	const minWidth = 1; // Mínimo ancho en píxeles
	return Math.max((kw / maxKw) * maxWidth, minWidth);
  };

  // Componente que representa el cable de flujo de cada motor
const FlowCable = ({ kw }) => (
	<div className="flow-cable" style={{ width: `${calculateCableWidth(kw)}px` }}></div>
  );

  // Componente que representa cada motor junto con su cable
const MotorWithCable = ({ name, kw }) => (
	<div className="motor-with-cable">
	  <div className="motor-box">
		<div className="motor-label">{name}</div>
	  </div>
	  <FlowCable kw={kw} />
	</div>
  );

// Componente para el consumo intermedio
const IntermediateConsumption = ({ className }) => (
	<div className={className}>
	  <div className={`${className}-box`}>Consumo Intermedio</div>
	  <div className={`${className}-cable`}></div>
	</div>
  );
  
  // Componente principal
  const App = () => {
	// Crear un array de motores con valores simulados de kW
	const motors = Array.from({ length: 7 }, (_, i) => ({ name: `M${i + 1}`, kw: Math.random() * 3384 }));
  
	// Calcular la suma total de los anchos de los cables
	const totalCableWidth = useMemo(() => {
	  return motors.reduce((sum, motor) => sum + calculateCableWidth(motor.kw), 0);
	}, [motors]);
  
	// Calcular el desplazamiento necesario para mantener el conector vertical centrado
	const verticalConnectorOffset = useMemo(() => {
	  return totalCableWidth / 2;
	}, [totalCableWidth]);
};

function PantallaUno() {
	// Crear un array de motores con valores simulados de kW
	const motors = Array.from({ length: 7 }, (_, i) => ({ name: `M${i + 1}`, kw: Math.random() * 3384 }));
  
	// Calcular la suma total de los anchos de los cables
	const totalCableWidth = useMemo(() => {
	  return motors.reduce((sum, motor) => sum + calculateCableWidth(motor.kw), 0);
	}, [motors]);
  
	// Calcular el desplazamiento necesario para mantener el conector vertical centrado
	const verticalConnectorOffset = useMemo(() => {
	  return totalCableWidth / 2;
	}, [totalCableWidth]);

	return (
		<div className="diagram-container">
		  <div className="motors-container">
			{motors.map(motor => (
			  <MotorWithCable key={motor.name} name={motor.name} kw={motor.kw} />
			))}
		  </div>
		  <div className="horizontal-connector"></div>
		  <div 
			className="vertical-connector" 
			style={{ 
			  width: `${totalCableWidth}px`, 
			  left: `calc(50% - ${verticalConnectorOffset}px)` 
			}}
		  ></div>
		  <IntermediateConsumption className="intermediate-consumption" />
		  <IntermediateConsumption className="left-intermediate-consumption" />
		  <div className="plant-box">
			<div className="plant">Planta de Producción</div>
		  </div>
		</div>
	  );
}

export default PantallaUno;
