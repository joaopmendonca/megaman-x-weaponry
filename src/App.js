import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
//mport WeaponForm from "../src/screens/WeaponForm";
import Home from "./screens/Home";

// Importe a fonte diretamente no componente Header
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <Home />        
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
