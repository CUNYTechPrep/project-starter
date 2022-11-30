import About from "./components/About.js";
import CompanyInfo from "./components/CompanyInfo.js";
import Features from "./components/Features.js";
import Join from "./components/Join.js";
import Navbar from "./components/Navbar.js";
import Welcome from "./components/Welcome.js";
import './hp.css'
function Homepage() {
  return (
    <div className="Home">
        <Navbar/>
        <Welcome/>
        <CompanyInfo/>
        <div class="parallax"/>
        <About/>
        <div class="parallax-2"/>
        <Features/>
        <Join/>
    </div>
  );
}

export default Homepage;
