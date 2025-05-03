import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import DesignStudio from './pages/DesignStudio';
import StylingConsultancy from './pages/StylingConsultancy';
import BengalImmersion from './pages/BengalImmersion';
import Contact from './pages/Contact';
import ScrollToTop from "./components/ScrollToTop"

function App() {
  document.title = "Namrata Weaves";

  return (
    <BrowserRouter basename='namrataweaves'>
    <ScrollToTop />
      <div className="min-h-screen bg-dark-bg text-dark-text">
        <Navbar />
        <main className="bg-dark-bg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/boutique" element={<DesignStudio />} />
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