import { useContext } from "react";
import AuthContext from "../auth-context";

export default function Authenticated() {
  const [user] = useContext(AuthContext);

  return (
    <p className="text-center">
      Welcome,
      {user.username}.
    </p>
  );
}
