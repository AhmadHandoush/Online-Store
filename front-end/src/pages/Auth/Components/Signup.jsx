import React, { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { BASE_URL } from "../../../utils/Constants";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const { update } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setSuccess("Account created successfully");
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        if (data.message === "Email already exists!") {
          setError(data.message);
        }
      }
      if (data.user) {
        await update(data.user);
      }
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className=" flex column space-y-4">
      <h2 className="text-2xl flex-center text-cyan-800 bold">Signup</h2>
      <div>
        <label className="block">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100 "
          placeholder="Enter your first name"
          required
        />
      </div>
      <div>
        <label className="block">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100 "
          placeholder="Enter your last name"
          required
        />
      </div>
      <div>
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100 "
          placeholder="Example@gmail.com"
          required
        />
      </div>
      <div>
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-cyan-100 "
          placeholder="Enter a complex password"
          required
        />
      </div>
      {success && <span className="block text-green-500">{success}</span>}
      {error && <span className="block text-red-500">{error}</span>}
      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary text-white rounded-md"
      >
        Signup
      </button>
    </form>
  );
};

export default Signup;
