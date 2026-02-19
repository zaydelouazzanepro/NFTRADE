
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import Store from './Store.jsx';
import View from "./View.jsx";
import Preview from "./Preview.jsx";
function App() {

  return (
     <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/view" element={<View />} />
        <Route path="/prv" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  
  )
}

export default App
