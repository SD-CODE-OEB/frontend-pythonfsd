import axios from "axios";
import React, { useState } from "react";
import { EyeClosed, Eye } from "lucide-react";
import { useNavigate } from "react-router";

const Login = ({ changeButtonText, onLoginSuccess }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showpwd, setShowPwd] = useState(false);

  async function userLogin(data) {
    setIsLoading(true);
    setError("");
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        data,
      );
      if (
        response.status === 200 ||
        response.data?.token ||
        response.data?.accessToken
      ) {
        // Successful login: navigate only now to /products
        changeButtonText("Logout");
        if (typeof onLoginSuccess === "function") {
          onLoginSuccess(response.data);
        }
        localStorage.setItem("currentUser", JSON.stringify(response.data));
        console.log(response.data);
        navigate("/products");
        //change the name of button in Header chnage to logout
      }
    } catch (err) {
      const errMssg =
        err.response?.data?.message ||
        "Login failed. Please check your credentials.";
      setError(errMssg);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      setError("Please fill in both username and password.");
      return;
    }
    userLogin(formData);
  }

  return (
    <main className="min-h-[calc(100vh-70px)] flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 space-y-5">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
          <p className="text-sm text-gray-500">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm p-3 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-base text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="e.g. emilys"
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, username: e.target.value }))
              }
            />
          </div>

          <div>
            <label
              htmlFor="pwd"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showpwd ? "text" : "password"}
                name="pwd"
                id="pwd"
                value={formData.password}
                className="w-full border border-gray-300 rounded-lg pl-3 pr-11 py-2 text-base text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                placeholder="enter password"
                onChange={(e) =>
                  setFormData((lastValue) => ({
                    ...lastValue,
                    password: e.target.value,
                  }))
                }
              />
              <button
                type="button"
                onClick={() => setShowPwd((prev) => !prev)}
                className="absolute right-0 top-0 bottom-0 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-500 sm:hover:text-gray-700"
                aria-label={showpwd ? "Hide password" : "Show password"}
              >
                {showpwd ? <Eye size={18} /> : <EyeClosed size={18} />}
              </button>
            </div>
          </div>

          <div className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <span className="font-semibold text-gray-700">
              Demo test credentials:
            </span>
            <br />
            Username: <code className="text-blue-600">emilys</code> | Password:{" "}
            <code className="text-blue-600">emilyspass</code>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full min-h-[44px] bg-blue-600 text-white text-base font-semibold py-2.5 px-4 rounded-xl sm:hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
