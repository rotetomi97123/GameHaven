import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Item from "./pages/Item";
import Category from "./pages/Category";
import SignIn from "./components/SignIn";
import { useAuth } from "./components/AuthContext";
import Register from "./components/Register";

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isLoggedIn ? <Homepage /> : <Navigate to="/login" replace />}
      />
      <Route path="/login" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:productTitle" element={<Item />} />
      <Route path="/category/:productTitle" element={<Category />} />
    </Routes>
  );
};

export default App;
