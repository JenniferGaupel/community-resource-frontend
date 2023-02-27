import "./App.css";
import ResourceGroupList from "./ResourceGroupList";
import SingleResourceGroup from "./SingleResourceGroup";
import SubmitResource from "./SubmitResource";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="bg-gray-50 h-screen">
      <header>
        <div
          className="flex items-center justify-center mb-5 color text-white text-center"
          style={{ backgroundColor: "#000080" }}
        >
          Cincinnati Community Resources
        </div>
        <div className="flex items-center justify-center">
          <Link className="mr-20" to="/">
            Home
          </Link>
          <Link className="mr-20" to="/contact">
            Contact
          </Link>
          <Link to="/about">About</Link>
        </div>
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
