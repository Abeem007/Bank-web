import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Reason from "./Components/Reason";
import Articles from "./Components/Articles";
import Footer from "./Components/Footer";
import About from "./assets/Pages/About";
import Contact from "./assets/Pages/Contact";
import Blog from "./assets/Pages/Blog";
import Careers from "./assets/Pages/Careers";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main className="pt-14 md:pt-20 lg:pt-19">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Main />
                <Reason />
                <Articles />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
