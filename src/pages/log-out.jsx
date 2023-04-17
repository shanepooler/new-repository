import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../auth-context";

export default function LogOut() {
  const [_, setUser] = useContext(AuthContext);

  useEffect(() => {
    // TODO: Remove 🔥 user from localStorage (not used in demo).
    setUser(null);
  });

  return <Navigate to="/" />;
}
