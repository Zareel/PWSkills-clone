import React from "react";
import NavBarBottom from "./Components/Header/NavBarBottom";
import NavBarTop from "./Components/Header/NavBarTop";
import Banner from "./Components/Home/Banner";
import Footer from "./Components/Footer/Footer";
import Stats from "./Components/Home/Stats";
import StatsTwo from "./Components/Home/StatsTwo";
import Cards from "./Components/Home/Cards";

function App() {
  return (
    <div className="App">
      <NavBarTop />
      <NavBarBottom />
      <Banner />
      <Stats />
      <StatsTwo />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
