import "./App.css";
import Cities from "./components/Cities/Cities";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav1 from "./components/Nav1/Nav1";
import SectionBlock from "./components/SectionBlock/SectionBlock";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav1 />
      <Cities />
      <SectionBlock />
      <Footer />
    </div>
  );
}

export default App;
