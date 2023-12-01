import { Route, Routes } from "react-router-dom";
import Header from "./components/shared/Header";
import Home from "./pages/Home";
import Footer from "./components/shared/Footer";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
