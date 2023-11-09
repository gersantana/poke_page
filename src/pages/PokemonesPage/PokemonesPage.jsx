import { useContext } from "react";
import "./PokemonesPage.css";
import { PokeContext } from "../../context/PokeContext";
import { useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
const PokemonesPage = () => {
	const { pokemones, pokemonSeleccionado, setPokemonSeleccionado } = useContext(PokeContext);
	const navigate = useNavigate();

	const detallePokemon = () => {
		navigate(`/pokemones/${pokemonSeleccionado}`);
	};

	return (
		<div className="container d-flex flex-column align-items-center">
			<h1 className="my-5">Selecciona un pokemon</h1>
			<Form.Select className="w-75"  id="form_select" onChange={(e) => setPokemonSeleccionado(e.target.value)} value={pokemonSeleccionado} size="lg" aria-label="Default select example">
				<option disabled value="">--Pokemones--</option>
				{pokemones.map((pokemon) => (
					<option key={pokemon.name} value={pokemon.name}>
						{pokemon.name}
					</option>
				))}
			</Form.Select>
			
            <Button className="w-auto mt-5" id="btn_detalle" variant="primary" onClick={detallePokemon}>Ver detalles</Button>
		</div>
	);
};

export default PokemonesPage;
