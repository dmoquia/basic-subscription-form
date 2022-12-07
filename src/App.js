import Banner from "./components/Banner";
import Footer from "./components/Footer";
import SideBanner from "./components/SideBanner";

function App() {
  return (
    <>
      <div className="container">
        <Banner />
        <SideBanner />
      </div>
      <Footer />
    </>
  );
}

export default App;
