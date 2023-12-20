import styled from "styled-components";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import './app.css'

function App() {
  return (
    <Wrapper>
      <Router>
        <Navbar/>
        <HeroSection/>
        <Projects/>
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Projects}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Routes>
      </Router>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: white;
`;

export default App;
