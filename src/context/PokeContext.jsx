import { createContext } from "react";
import PropsTypes from "prop-types"

export const PokeContext = createContext();


export const PokeProvider = ({children}) => {
    const data = {

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