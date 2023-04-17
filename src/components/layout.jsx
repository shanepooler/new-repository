import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="mb-4 px-8">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
