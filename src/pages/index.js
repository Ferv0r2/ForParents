import React, { useEffect, useState } from "react";
import Link from "next/link";
import Modal from "components/Modal";
import Loading from "components/Loading";

import { useRecoilState } from "recoil";
import { modalState } from "components/states";

const Home = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getter = async () => {
      (await window.localStorage.getItem("mdStatus"))
        ? setModal(false)
        : setModal(true);
      await setLoading(false);
    };
    getter();
  }, []);

  const closeModal = (e) => {
    if (e.target.value === "0624") {
      setTimeout(() => setModal(false), 500);
      const modalObj = { md: false };
      window.localStorage.setItem("mdStatus", JSON.stringify(modalObj));
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div className="bg-main bg-center bg-contain w-full">
      <Modal open={modal} close={closeModal} />
      <div className="max-w-3xl m-auto w-full min-h-screen bg-window overflow-hidden">
        {modal ? (
          <div className="py-6 sm:py-0">
            <img className="w-9/12 m-auto animate" src="images/banner.png" />
          </div>
        ) : (
          <div className="relative py-6 sm:py-0">
            <div className="w-9/12 sm:w-7/12 m-auto">
              <img className="pt-0 sm:pt-6" src="images/title.png" />
            </div>
            <div className="w-10/12 m-auto -mt-8 transform animate-rightsm sm:animate-right  animation-fill-forwards sm:animation-fill-forwards">
              <img src="images/banner.png" />
            </div>
            <div className="absolute font-[BareunBatang] text-center text-sm sm:text-lg opacity-0 transform top-48 sm:top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 animate-show animation-fill-forwards animation-delay-2000">
              <div className="py-2">
                <Link href="/letter">
                  <p className="border-4 border-red-300 hover:border-red-400 rounded-md px-6 sm:px-16 py-3 cursor-pointer">
                    Letter
                  </p>
                </Link>
              </div>
              <div className="py-2">
                <Link href="/gallery">
                  <p className="border-4 border-red-300 hover:border-red-400 rounded-md px-6 sm:px-16 py-3 cursor-pointer">
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
