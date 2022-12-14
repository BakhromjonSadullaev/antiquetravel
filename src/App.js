import "./App.css";
import Cities from "./components/Cities/Cities";
import Header from "./components/Header/Header";
import Nav1 from "./components/Nav1/Nav1";
import SectionBlock from "./components/SectionBlock/SectionBlock";
import UsefulLinks from "./components/UsefulLinks/UsefulLinks";
import VideoSection from "./components/VideoSection/VideoSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav1 />
      <Cities />
      <SectionBlock />
      <VideoSection />
      <UsefulLinks />
    </div>
  );
}

export default App;
