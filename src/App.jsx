import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import BookNow from "./pages/BookNow";
function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navbar />

        <main className="main-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booknow" element={<BookNow />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;