import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage/HomePage"
import PokemonesPage from "../pages/PokemonesPage/PokemonesPage"
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage"

const MyRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/pokemones" element={<PokemonesPage/>}></Route>
            <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
    )
}

export default MyRoutes