import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WeaponForm from "../src/screens/WeaponForm";

// Importe a fonte diretamente no componente Header
function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>

      <main>
        <WeaponForm />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
