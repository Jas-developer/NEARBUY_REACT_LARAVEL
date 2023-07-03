import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-white text-gray-500 shadow-inner">
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
              We're your go-to online marketplace for seamless buying and selling experiences. We prioritize trust, convenience, and quality to ensure your satisfaction.
            </p>
            
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide">
            Contacts
          </p>
          <div className="flex">
            <p className="mr-1">Phone:</p>
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
            <p className="mr-1">Email:</p>
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
            <p className="mr-1">Address:</p>
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
          <span className="text-base font-bold tracking-wide">
            Socials
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="/"
              className="text-gray-500"
            >
              <span className="h-5"></span>
            </a>
            <a
              href="/"
              className="text-gray-500"
            >
              <span className="h-6"></span>
            </a>
            <a
              href="/"
              className="text-gray-500"
            >
              <span className="h-5"></span>
            </a>
          </div>
          <p className="mt-4 text-sm">
            Anything basta description
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm">
          © 2023 NearBuy. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="/"
              className="text-sm"
            >
              F.A.Q
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="/"
              className="text-sm"
            >
              Terms &amp; Conditions
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
