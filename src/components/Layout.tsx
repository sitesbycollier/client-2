import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../sections/Header";
import Footer from "../sections/Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <ScrollRestoration />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
