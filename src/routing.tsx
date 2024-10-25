import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Item from "./pages/Item";
import Category from "./pages/Category";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/product/:productTitle" element={<Item />} />
      <Route path="/category/:productTitle" element={<Category />} />
    </Routes>
  );
};

export default App;
