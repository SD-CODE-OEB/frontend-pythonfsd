import React, { useState } from "react";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({ email: "", password: "" });
  function handleSubmit(e) {
    console.log("form submitted");
  }
  return (
    <div>
      <form
        action=""
        onSubmit={(event) => {
          event.preventDefault();
          console.log("submitted", JSON.stringify(formData));
          event.target.reset();
        }}
        className="border rounded-2xl flex flex-col items-center justify-start"
      >
        <h2>Login form</h2>
        <p>
          <input
            type="text"
            name="email"
            id="email"
            className="border px-2"
            placeholder="enter email"
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
          />
        </p>
        <p>
          <input
            type="password"
            name="pwd"
            id="pwd"
            className="border px-2"
            placeholder="enter password"
            onChange={(e) =>
              setFormData((lastValue) => ({
                ...lastValue,
                password: e.target.value,
              }))
            }
          />
        </p>
        <button type="submit" className="bg-violet-600 px-4 py-2 rounded-xl">
          signin
        </button>
      </form>
    </div>
  );
};

export default Login;
