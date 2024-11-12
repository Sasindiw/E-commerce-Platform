import "./App.css";
import NavBar from "./Navigation";
import Hero from "./Hero";
import Products from "./Products";

function App() {
  const name = "Sasindi";
  const cartCount = 2;
  return (
    <div>
      <div>
        <NavBar name={name} cartCount={cartCount} />
      </div>
      <Hero />
      <Products />
      <div></div>
    </div>
  );
}

export default App;
