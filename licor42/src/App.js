import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContenedorPantallas from "./ContenedorPantallas";
import "./estilos.css";

function App() {
	return (
		<Router>
			<ContenedorPantallas />
		</Router>
	);
}

export default App;
