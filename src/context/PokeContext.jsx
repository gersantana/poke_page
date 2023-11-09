import { createContext, useEffect, useState } from "react";
import PropsTypes from "prop-types"

export const PokeContext = createContext();

const urlPoke =  "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=500"
export const PokeProvider = ({children}) => {

    const [pokemones, setPokemones] = useState([])
    const [pokemonSeleccionado, setPokemonSeleccionado] = useState({})


    console.log(pokemones)
    console.log(pokemonSeleccionado)

    const callApi = async () => {
        const res = await fetch(urlPoke)
        const data = await res.json()
        setPokemones(data.results)
    }

    useEffect(()=>{
        callApi()
    },[])

    const data = {
        pokemones,
        pokemonSeleccionado,
        setPokemonSeleccionado,
    }

    return(
        <PokeContext.Provider value={data}>
            {children}
        </PokeContext.Provider>
    )
}

PokeProvider.propTypes = {
    children: PropsTypes.object.isRequired
}