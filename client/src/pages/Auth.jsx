import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState(null);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSign = () => {
    setIsSignIn(!isSignIn);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      c_password: confirmPassword,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const validation = await response.json();
        setErrors(validation.errors);
        setRegistrationSuccess(false);
      } else {
        setRegistrationSuccess(true);
        setErrors(null);
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const validation = await response.json();
        setErrors(validation.errors);
        setRegistrationSuccess(false);
      } else {
        setRegistrationSuccess(true);
        setErrors(null);
        navigate("/"); // Redirect to home page
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      {!isSignIn ? (
        <div className="sign-in-wrapper">
          <div className="form-wrapper flex justify-center p-48">
            <form
              action=""
              className="shadow p-12 bg-orange-400 rounded-lg border-2"
              onSubmit={handleLogin} // Add onSubmit event handler for login form
            >
              <span className="text-white text-center font-bold text-3xl">
                LOG IN
              </span>
              <br />
              <input
                type="email"
                placeholder="Enter your email.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <input
                type="password"
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <input
                type="submit"
                value="Sign in"
                className="bg-blue-400 mt-2 p-2 w-32 rounded-md text-white font-semibold"
              />
              <br /> <br />
              <span
                className="underline text-white font-semibold"
                onClick={handleSign}
              >
                Create an account
              </span>
            </form>
          </div>
        </div>
      ) : (
        <div className="sign-up-wrapper">
          <div className="form-wrapper flex justify-center p-48">
            <form
              action=""
              className="shadow p-12 bg-orange-400 rounded-lg border-2 mx-4"
              onSubmit={handleSignUp}
            >
              <span className="text-white text-center font-bold text-3xl">
                SIGN UP
              </span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors({ ...errors, name: null });
                }}
              />
              {errors && <span>{errors.name}</span>}
              <br />
              <input
                type="email"
                placeholder="Enter your email.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: null });
                }}
              />
              {errors && <span>{errors.email}</span>}
              <br />
              <input
                type="password"
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: null });
                }}
              />
              {errors && <span>{errors.password}</span>}
              <br />
              <input
                type="password"
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setErrors({ ...errors, confirmPassword: null });
                }}
              />
              {errors && <span>{errors.confirmPassword}</span>}
              <br />
              <input
                type="submit"
                value="Sign up"
                className="bg-blue-400 mt-4 p-2 w-32 rounded-md text-white font-semibold"
              />
              {registrationSuccess && (
                <span className="text-green-600">You are now registered!</span>
              )}
              <br /> <br />
              <span className="underline text-white font-semibold">
                Already have an account
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
