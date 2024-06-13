import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../utils/Constants";
import Loader from "../../../components/Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { update } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setLoading(false);
        if (data.user.role === "admin") {
          setTimeout(() => {
            navigate("/admin-dashboard");
          });
        } else {
          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      } else {
        setError(data.message);
      }
      if (data.user) {
        await update(data.user);
      }
    } catch (err) {
      setError("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex column space-y-4">
      <h2 className="flex-center text-2xl text-cyan-800 bold">Login</h2>
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100  "
          required
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100 "
          required
          placeholder="Enter your password"
        />
      </div>
      {error && <span className="block text-red-500">{error}</span>}
      {/* {loading && <span className="block text-red-500">loading</span>} */}

      <button
        type="submit"
        className="w-full px-4 py-2 bg-cyan-800 text-white rounded-md flex-center"
      >
        {loading ? <Loader /> : "Login"}
      </button>
    </form>
  );
};

export default Login;
