import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import Integrations from "./Components/Integrations/Integrations";
import Application from "./Components/Application/Application";
import Hardware from "./Components/Hardware/Hardware";
import Automations from "./Components/Automations/Automations";
import CTA from "./Components/CTA/CTA";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Integrations />
      <Application />
      <Hardware />
      <Automations />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
