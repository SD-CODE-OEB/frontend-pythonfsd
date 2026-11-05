import React from "react";

const Header = ({ login, setLogin }) => {
  return (
    <div className="w-full border flex items-center justify-between px-4 mx-2">
      <div></div>
      <button
        type="button"
        className="px-4 py-2 bg-violet-600 text-white  rounded-xl"
        onClick={() => setLogin(() => !login)}
      >
        {login ? "go back" : "login"}
      </button>
    </div>
  );
};

export default Header;
