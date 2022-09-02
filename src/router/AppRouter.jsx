import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../auth";
import { PruebaRoutes } from "../prueba/routes/PruebaRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/login" element={
                    <PublicRoute>
                        <LoginPage />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoute>
                        <PruebaRoutes />
                    </PrivateRoute>
                } />
            </Routes>
        </>
    )
}