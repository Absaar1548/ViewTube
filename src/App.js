import Home from "./Pages/Home";
import License from "./Pages/License";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/license" exact element={<License />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
