import React from "react";

function PantallaDos() {
	return (
		<div className="pantalla-dos">
			<div className="container-left">
				Container-left
				<div className="container-up-left">
					Container-up-left
					<div className="Motores-1-4">
						Motores-1-4
						<div className="grafana-motor">mg1</div>
						<div className="grafana-motor">mg2</div>
						<div className="grafana-motor">mg3</div>
						<div className="grafana-motor">mg4</div>
					</div>
					<div className="Motores-5-7">
						<div className="grafana-motor">mg5</div>
						<div className="grafana-motor">mg6</div>
						<div className="grafana-motor">mg7</div>
					</div>
				</div>
				<div className="container-down-left">
					<div className="grafana-horizonte">
						Bastardada de horizonte artificial
					</div>
				</div>
			</div>
			<div className="container-right">
				Container-right
				<div className="container-up-right">
					Container-up-right
					<div className="kpi-1-2">
						<div className="grafana-kpi">kpi1</div>
						<div className="grafana-kpi">kpi2</div>
					</div>
					<div className="kpi-3-4">
						<div className="grafana-kpi">kpi3</div>
						<div className="grafana-kpi">kpi4</div>
					</div>
				</div>
				<div className="container-down-right">
					<div className="grafana-alerts">IMS</div>
				</div>
			</div>
		</div>
	);
}

export default PantallaDos;
