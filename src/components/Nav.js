import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full bg-neutral-200 sticky top-0 border-b-2">
      <div className="max-w-3xl w-10/12 md:w-full py-3 m-auto">
        <div className="flex w-full py-2 items-center">
          {/* <img className="w-16 h-16 rounded-xl" src="images/logo.jpg" />
          <p className="">Happy Birthday for Parents</p> */}
          <Link href="/">
            <img className="cursor-pointer" src="images/logo.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
