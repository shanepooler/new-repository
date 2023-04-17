import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth-context";

export default function RequireAuth({ children }) {
  const [user] = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  return children;
}
