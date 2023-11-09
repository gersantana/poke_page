import { useNavigate } from "react-router-dom";
import "./DetallesPage.css";
import { Button } from "react-bootstrap";

const DetallesPage = () => {
	const navigate = useNavigate();
	const btnRegresar = () => {
		navigate(-1);
	};
	return (
		<div className="container text-center">
			<div>Detalles</div> 
            <Button className="w-auto mt-5" id="btn_detalle" variant="primary" onClick={btnRegresar}>Regresar</Button>
		</div>
	);
};

export default DetallesPage;
