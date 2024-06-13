import React, { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import "./auth.css";
const AuthSwitch = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth min-h-screen flex-center">
      <div className=" auth-container w-9/10 sm:w-5/10 md:w-5/10 lg:w-3/10  mx-auto p-6 border rounded-md shadow-md ">
        {isLogin ? <Login /> : <Signup />}
        <div className="text-center mt-4">
          {isLogin ? (
            <p>
              Don't have an account?
              <button
                onClick={() => setIsLogin(false)}
                className="text-blue-500 underline"
              >
                Sign up
              </button>
            </p>
          ) : (
            <p>
              Already have an account?
              <button
                onClick={() => setIsLogin(true)}
                className="text-blue-500 underline"
              >
                Log in
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthSwitch;
