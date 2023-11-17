import React, { useState } from "react";
import PantallaUno from "./PantallaUno";
import PantallaDos from "./PantallaDos";
import "./estilos.css";

function ContenedorPantallas() {
	const [pantallaActual, setPantallaActual] = useState(1);

	const irAPantallaUno = () => {
		setPantallaActual(1);
	};

	const irAPantallaDos = () => {
		setPantallaActual(2);
	};

	return (
		<div className="contenedor">
			{pantallaActual === 1 && <PantallaUno />}
			{pantallaActual === 2 && <PantallaDos />}

			{pantallaActual !== 1 && (
				<button
					className="flecha izquierda"
					onClick={irAPantallaUno}
					aria-label="Ir a la pantalla uno"
				>
					←
				</button>
			)}
			{pantallaActual !== 2 && (
				<button
					className="flecha derecha"
					onClick={irAPantallaDos}
					aria-label="Ir a la pantalla dos"
				>
					→
				</button>
			)}
		</div>
	);
}

export default ContenedorPantallas;
