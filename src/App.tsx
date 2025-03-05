import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DesignStudio from './pages/DesignStudio';
import StylingConsultancy from './pages/StylingConsultancy';
import BengalImmersion from './pages/BengalImmersion';
import Contact from './pages/Contact';

function App() {
  document.title = "Namrata Weaves";

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <Navbar />
        <main className="bg-dark-bg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/design-studio" element={<DesignStudio />} />
            <Route path="/styling-consultancy" element={<StylingConsultancy />} />
            <Route path="/bengal-immersion" element={<BengalImmersion />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App