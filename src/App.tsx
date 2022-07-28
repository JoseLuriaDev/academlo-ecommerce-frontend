import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage, ProductPage } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoy/:name" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
