// IMPORT YOUR COMPONENTS HERE </RAFC>
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

import { Navbar } from "./components/navbar/Navbar";

export const RootLayout = () => {
  const location = useLocation();

  return (
    <div>
      <Helmet>
        {location.pathname === "/" ? <title>NearBuy - Home</title> : ""}

        {location.pathname === "/service" ? (
          <title>NearBuy - Service</title>
        ) : (
          ""
        )}

        {location.pathname === "/help" ? <title>NearBuy - Help</title> : ""}
        {location.pathname === "/store" ? <title>NearBuy - Stores</title> : ""}
        {location.pathname === "/contact" ? (
          <title>NearBuy - Contact</title>
        ) : (
          ""
        )}
        {location.pathname === "/signup" ? <title>NearBuy - SignUp</title> : ""}
        {location.pathname === "/register" ? (
          <title>NearBuy - Register</title>
        ) : (
          ""
        )}
      </Helmet>

      <Navbar />
      <Outlet />
    </div>
  );
};
