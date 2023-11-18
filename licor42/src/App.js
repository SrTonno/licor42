import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ContenedorPantallas from "./components/ContenedorPantallas";
import "./estilos.css";
import "./DiagramStyles.css";

function App() {
	return (
		<Router>
			<ContenedorPantallas />
		</Router>
	);
}

export default App;
