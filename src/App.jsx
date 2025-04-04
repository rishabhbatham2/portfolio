import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import './App.css'
import Home from "./Pages/Home/Home";
import Foot from "./components/Footer/Foot";
import ProjectView from "./Pages/ProjectView/ProjectView";





const Works = () => <h1>Works Page</h1>;
const Projects = () => <h1>Projects Page</h1>;
const Contact = () => <h1>Contact Page</h1>;
const Account = () => <h1>Account Page</h1>;

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/works">Works</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/account">Account</Link></li>
    </ul>
  </nav>
);



function App() {
  return (
   <div className="app__cont">
    <div className="texture">

    </div>
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects/:id" element={<ProjectView/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<Account />} />

      </Routes>
     <Foot/>
    </Router>
   </div>
  );
}

export default App;
