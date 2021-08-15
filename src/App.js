import Aero from "./components/Aero";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Interior from "./components/Interior";
import TopView from "./components/TopView";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Hero />
      <Stats />
      <Aero />
      <Interior />
      <TopView />
      <div id="vertical-line"></div>
      <div
        class="container d-flex flex-row justify-content-center"
        style={{ width: "100%", marginBottom: "50px" }}
      >
        <button
          class="btn btn-primary"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-once="true"
          id="footer-btn"
          type="button"
        >
          Reserve Now
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
