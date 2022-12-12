import "./App.css";
import ResourceGroupList from "./ResourceGroupList";
import SingleResourceGroup from "./SingleResourceGroup";
import SubmitResource from "./SubmitResource";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <header>
        <Link id="home-link" to="/">
          Community Resource Home Page
        </Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/resource/:id" element={<SingleResourceGroup />} />
        <Route path="/submit" element={<SubmitResource />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<ResourceGroupList />} />
      </Routes>
    </div>
  );
}

export default App;
