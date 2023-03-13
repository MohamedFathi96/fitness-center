import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Plains from "./components/Plains/Plains";
import Program from "./components/Program/Program";
import Ready from "./components/Ready/Ready";
import Reasons from "./components/Reasons/Reasons";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <Plains />
      <Testimonials />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
