import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full bg-white sticky top-0 border-b-2">
      <div className="max-w-3xl w-10/12 md:w-full py-3 m-auto">
        <nav className="flex w-full p-2 items-center justify-between">
          <Link href="/">
            <img
              className="w-1/2 sm:w-1/4 cursor-pointer"
              src="images/logo.png"
            />
          </Link>
          <Link href="/">
            <div className="flex items-center cursor-pointer hover:font-bold hover:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <p className="hidden sm:block pl-2 w-12">Home</p>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
