import { AuthProvider } from "./auth";
import {AppRouter} from "./router/AppRouter";

export const Prueba = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
}