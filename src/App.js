import { Routes, Route } from "react-router-dom";
import CitiesGallery from "./Pages/CitiesGallery";
import Main from "./Pages/Main";
import Photo_Gallery from "./Pages/Photo_Gallery";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Photo_Gallery" element={<Photo_Gallery />} />
      <Route path="Photo_Gallery/cities_gallery" element={<CitiesGallery />} />
    </Routes>
  );
}

export default App;
