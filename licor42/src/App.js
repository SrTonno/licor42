import React from "react";
import PantallaDos from "./components/PantallaDos";
import "./estilos.css";
import "./DiagramStyles.css";
import PantallaIndividual from "./components/PantallaIndividual";
import {
	BrowserRouter as Router,
	Route,
	Routes,
  } from "react-router-dom";
import PantallaUno from "./components/PantallaUno";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<PantallaDos />} />
				<Route path="/DetalleIndividual" element={<PantallaIndividual />} />
				<Route path="/Flujos" element={<PantallaUno />} />
			</Routes>
		</Router>
	);
}

export default App;
