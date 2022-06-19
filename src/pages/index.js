import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "components/Modal";

import { useRecoilState } from "recoil";
import { modalState } from "components/stats";

const Home = () => {
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    window.localStorage.getItem("mdStatus") ? setModal(false) : setModal(true);
  }, []);

  const closeModal = (e) => {
    if (e.target.value === "0624") {
      setTimeout(() => setModal(false), 500);
      const modalObj = { md: false };
      window.localStorage.setItem("mdStatus", JSON.stringify(modalObj));
    }
  };

  return (
    <div className="bg-main bg-center bg-contain w-full">
      <Modal open={modal} close={closeModal} />
      <div className="max-w-3xl m-auto w-full min-h-screen bg-window">
        {modal ? (
          <div className="py-6 sm:py-0">
            <img className="w-9/12 m-auto animate" src="images/banner.png" />
          </div>
        ) : (
          <div className="relative py-6 sm:py-0">
            <div className="w-7/12 m-auto">
              <img className="pt-6" src="images/title.png" />
            </div>
            <div className="w-10/12 m-auto -mt-8 transform animate-right animation-fill-forwards animation-delay-1000">
              <img src="images/banner.png" />
            </div>
            <div className="absolute font-[BareunBatang] text-center text-lg opacity-0 transform top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-show animation-fill-forwards animation-delay-3000">
              <div className="py-2">
                <Link href="/letter">
                  <p className="border-4 border-red-300 hover:border-red-400 rounded-md px-16 py-3 cursor-pointer">
                    Letter
                  </p>
                </Link>
              </div>
              <div className="py-2">
                <Link href="/gallery">
                  <p className="border-4 border-red-300 hover:border-red-400 rounded-md px-16 py-3 cursor-pointer">
                    Gallery
                  </p>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
