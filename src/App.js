import React from "react";
import NavBarBottom from "./Components/Header/NavBarBottom";
import NavBarTop from "./Components/Header/NavBarTop";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBarTop />
      <NavBarBottom />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
