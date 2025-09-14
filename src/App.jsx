import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Claim from "./components/claime";
import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/claim/:id" element={<Claim />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
