import TodoPage from "../pages/TodoPage";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ user, children }) {
    return user ? children : <Navigate to="/login" />;
}
