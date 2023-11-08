import { useContext} from "react"
import "./PokemonesPage.css"
import { PokeContext } from "../../context/PokeContext"
import { useNavigate } from "react-router-dom"
const PokemonesPage = () => {
    const {pokemones, pokemonSeleccionado, setPokemonSeleccionado} = useContext(PokeContext)
    const navigate = useNavigate()

    const detallePokemon = () => {
        navigate(`/pokemones/${pokemonSeleccionado}`)
    }

    return (
        <div>
            <h1>Seleciona un pokemon</h1>
            <select onChange={(e)=> setPokemonSeleccionado(e.target.value)} value={pokemonSeleccionado}>
                <option disabled value="">--Pokemones--</option>
                {pokemones.map((pokemon) =>(
                    <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
                ))}
            </select>
            <button onClick={detallePokemon}>Ver detalles</button>
        </div>
    )
}

export default PokemonesPage