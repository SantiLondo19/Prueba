import { Navigate, Route, Routes } from "react-router-dom";
import { Preguntas, Home, UsuariosPage } from "../pages";
import { Navbar } from "../../ui";

export const PruebaRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="list" element={<UsuariosPage />} />
                    <Route path="preguntas" element={<Preguntas />} />
                    <Route path="/" element={<Home/>} />
                </Routes>
            </div>
        </>
    )
}
