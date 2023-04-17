import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import RequireAuth from "./components/require-auth";
import AuthContext from "./auth-context";
import { About, Authenticated, Contact, Home, LogOut } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      {
        path: "/authenticated",
        element: (
          <RequireAuth>
            <Authenticated />
          </RequireAuth>
        ),
      },
      {
        path: "/log-out",
        element: (
          // Any children are accessible in the component via the special React prop `children`.
          <RequireAuth>
            <LogOut />
          </RequireAuth>
        ),
      },
    ],
  },
]);

function App() {
  const [user, setUser] = useState();
  // TODO: Use `getUserFromAuth` (`utils.js`) to decode the user.

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}

export default App;
