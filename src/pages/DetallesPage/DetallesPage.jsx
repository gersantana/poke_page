import { useNavigate, useParams } from "react-router-dom";
import "./DetallesPage.css";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useEffect, useState } from "react";

const DetallesPage = () => {
	const [pokemon, setPokemon] = useState({});
	const [loading, setLoading] = useState(true);
    const { name } = useParams();
    const navigate = useNavigate();
    const btnRegresar = () => {
		navigate(-1);
	};

	const url = `https://pokeapi.co/api/v2/pokemon/${name}`;

	const getPokemon = async () => {
		const res = await fetch(url);
		const data = await res.json();

		if (data) {
			setPokemon(data);
			setLoading(false);
		}
	};
    
	useEffect(() => {
        getPokemon();
	}, []);
    
    if (loading) {
        return <div className="text-center mt-5">Cargando...</div>;
    }

	console.log("Datos del Pokémon:", pokemon);

	return (
		<div className="container d-flex flex-column align-items-center ">
			<h1 className="my-5" >Detalles</h1>
			<Card style={{ width: "30rem" }}>
				<Card.Title id="nombre_poke" className="text-center my-3">{pokemon.name?.toUpperCase()}</Card.Title>
				<Card.Img style={{ height: "30rem" }} variant="top" src={pokemon.sprites?.other?.dream_world?.front_default} />
				<Card.Body>
					<Card.Text></Card.Text>
				</Card.Body>
				<ListGroup className="list-group-flush">
					<ListGroup.Item>Type: {pokemon.types[0].type.name}</ListGroup.Item>
					<ListGroup.Item>Hp: {pokemon.stats[0].base_stat}</ListGroup.Item>
					<ListGroup.Item>Attack: {pokemon.stats[1].base_stat} </ListGroup.Item>
					<ListGroup.Item>Defense: {pokemon.stats[2].base_stat} </ListGroup.Item>
					<ListGroup.Item>Speed: {pokemon.stats[5].base_stat} </ListGroup.Item>
				</ListGroup>
			</Card>

			<Button className="w-auto mt-5" id="btn_detalle" variant="primary" onClick={btnRegresar}>
				Regresar
			</Button>
		</div>
	);
};

export default DetallesPage;
