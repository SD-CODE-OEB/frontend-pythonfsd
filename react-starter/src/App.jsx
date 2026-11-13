import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Products from "./Products";
import Login from "./Login";
import Home from "./Home";
import Header from "./Header";
import Profile from "./Profile";
import { useState } from "react";

function App() {
  const [buttonText, setButtonText] = useState("Login");
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <BrowserRouter>
      <Header buttonText={buttonText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products showProducts={true} />} />
        <Route
          path="/login"
          element={
            <Login
              changeButtonText={setButtonText}
              onLoginSuccess={setCurrentUser}
            />
          }
        />
        <Route
          path="/profile"
          element={<Profile currentUser={currentUser} />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
