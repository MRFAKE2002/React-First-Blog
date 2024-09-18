// components
import AboutUs from "./pages/about-us/AboutUs";
import Home from "./pages/home/Home";

// libraries
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        {/*
          dar inja ma har chand ta ke bekhaim 'Route' misazim hala baraye ha 'Route' bayad 2 ta props barash befrestim :
          1- masir ya 'path' hast ke tush malum mishe kodum url data ferestade beshe.
          2- yek 'element' ya component migire ke be oun url ke gofti ersal mishe.
        */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
