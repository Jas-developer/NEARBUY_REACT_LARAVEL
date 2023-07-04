import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export const Footer = () => {
  return (
    <div className="mx-4 px-4 pt-16  sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white text-gray-500">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link
            to="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide uppercase">
              About us
            </span>
          </Link>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm">
              We're your go-to online marketplace for seamless buying and
              selling experiences. We prioritize trust, convenience, and quality
              to ensure your satisfaction.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide">Contacts</p>
          <div className="flex">
            <p className="mr-1">
              <HiOutlinePhone />
            </p>
            <a
              href="tel:850-123-5021"
              aria-label="Our phone"
              title="Our phone"
              className="text-gray-500"
            >
              123-456-789
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">
              <HiOutlineMail />
            </p>
            <a
              href="mailto:info@lorem.mail"
              aria-label="Our email"
              title="Our email"
              className="text-gray-500"
            >
              Nearbuy@gmail.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1">
              <HiOutlineLocationMarker />
            </p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Our address"
              title="Our address"
              className="text-gray-500"
            >
              Manila, Philippines
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide">Socials</span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjh1u_7kPP_AhWAilYBHa4SBoYQFnoECAYQAQ&url=https%3A%2F%2Fwww.facebook.com%2F&usg=AOvVaw2q27ov2cpCynr72DmuSqEz&opi=89978449"
              className="text-gray-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiO1fX0kPP_AhWSgFYBHdHoA1MQFnoECAsQAQ&url=https%3A%2F%2Ftwitter.com%2F%3Flang%3Den&usg=AOvVaw1Sd3B-_cNZOLSmhw9z2lOm&opi=89978449"
              className="text-gray-500"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiy9ejqkPP_AhW5mVYBHd_nC28QFnoECAYQAQ&url=https%3A%2F%2Fwww.instagram.com%2F&usg=AOvVaw1cBeRoOpMhZ3-x5M1sA3Fm&opi=89978449"
              className="text-gray-500"
            >
              <FaInstagram size={20} />
            </a>
          </div>
          <p className="mt-4 text-sm"></p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">© 2023 NearBuy. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a href="/" className="text-sm">
              F.A.Q
            </a>
          </li>
          <li>
            <a href="/" className="text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/" className="text-sm">
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
