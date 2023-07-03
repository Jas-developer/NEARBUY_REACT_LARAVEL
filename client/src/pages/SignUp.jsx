export const SignUp = () => {
  return (
    <div className="sign-up-wrapper ">
      <div className="form-wrapper flex justify-center mt-48 mx-24 ">
        <form
          action=""
          className="shadow p-12 bg-orange-400 rounded-lg border-2 mx-4"
        >
          <input
            type="email"
            placeholder="Enter your email.."
            className="my-4 p-2 text-center w-80 rounded-md border-blue-600 border-2"
          />
          <br />
          <input
            type="password"
            className="my-4 p-2 text-center w-80 rounded-md border-blue-600 border-2"
            placeholder="Enter your password"
          />
          <br />
          <input
            type="submit"
            value="Sign in"
            className="bg-blue-400 mt-4 p-2 w-40 rounded-md text-white font-semibold"
          />{" "}
          <span className="underline ml-2 text-white font-semibold">
            Create an account
          </span>
        </form>
      </div>
    </div>
  );
};
