import { Routes, Route } from "react-router-dom";
import Main from "./Pages/Main";
import Photo_Gallery from "./Pages/Photo_Gallery";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="Photo_Gallery" element={<Photo_Gallery />} />
    </Routes>
  );
}

export default App;
