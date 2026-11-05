import { Mybutton, YourButton } from "./Mybutton";
import Card from "./Card";
import { useEffect, useState } from "react";
import Products from "./Products";
import Header from "./Header";
import Login from "./Login";
import TitleText from "./TitleText";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      <Header login={showLogin} setLogin={setShowLogin} />
      <div className="flex justify-center items-center">
        {showLogin && <Login />}
      </div>
      <TitleText />
    </>
  );
}

export default App;
