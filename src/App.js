import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import AllRoutes from "./routes/AllRoutes";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <main className="dark:bg-darkbg">
        <AllRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
