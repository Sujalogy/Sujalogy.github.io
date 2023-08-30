import { Footer, Navbar } from "../public/JS/components";
import { Routes, Route } from "react-router-dom";
import { Homepage, Skills, Projects, About, Contact } from "../public/JS/pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
