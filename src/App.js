import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Integrations from './components/Integrations/Integrations';
import Application from './components/Application/Application';
import Hardware from './components/Hardware/Hardware';
import Automations from './components/Automations/Automations';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

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
