import { useState } from "react";

export const SignUp = () => {
  const [SignIn, setIsSignIn] = useState(false);

  const handleSign = () => {
    setIsSignIn(!SignIn);
  };

  return (
    <>
      {!SignIn ? (
        <div className="sign-in-wrapper ">
          <div className="form-wrapper flex justify-center p-48 ">
            <form
              action=""
              className="shadow p-12 bg-orange-400 rounded-lg border-2 "
            >
              <span className="text-white text-center font-bold text-3xl">
                LOG IN
              </span>
              <br />
              <input
                type="email"
                placeholder="Enter your email.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
              />
              <br />
              <input
                type="password"
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                placeholder="Enter your password"
              />
              <br />
              <input
                type="submit"
                value="Sign in"
                className="bg-blue-400 mt-2 p-2 w-32 rounded-md text-white font-semibold"
              />{" "}
              <br /> <br />
              <span
                className="underline  text-white font-semibold"
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
            >
              <span className="text-white text-center font-bold text-3xl">
                SIGN UP
              </span>
              <br />
              <input
                type="email"
                placeholder="Enter your Name.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
              />{" "}
              <br />
              <input
                type="email"
                placeholder="Enter your email.."
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
              />
              <br />
              <input
                type="password"
                className="my-4 p-2 text-center w-60 lg:w-80 rounded-md border-blue-600 border-2"
                placeholder="Enter your password"
              />
              <br />
              <input
                type="submit"
                value="Sign up"
                className="bg-blue-400 mt-4 p-2 w-32 rounded-md text-white font-semibold"
              />{" "}
              <br /> <br />
              <span
                className="underline  text-white font-semibold "
                onClick={handleSign}
              >
                Already an account
              </span>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
