import React, { useEffect } from "react";
import ReactAudioPlayer from "react-audio-player";
import Head from "next/head";
import Image from "next/image";
import Nav from "components/Nav";

import { useRecoilState } from "recoil";
import { scrollState, scrollBtnState } from "components/states";

const Layout = ({ children }) => {
  const [scroll, setScroll] = useRecoilState(scrollState);
  const [scrollBtn, setScrollBtn] = useRecoilState(scrollBtnState);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  const handleFollow = () => {
    setScroll(window.pageYOffset);
    if (scroll > 100) {
      setScrollBtn(true);
    } else {
      setScrollBtn(false);
    }
  };

  const toUp = (e) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setScroll(0);
    setScrollBtn(false);
  };
  return (
    <div>
      <Head>
        <title>원태부모님</title>
        <meta name="description" content="Kepler-452b Contents Page" />
        <link rel="icon" href="images/logo.jpg" />

        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta property="og:url" content="https://원태부모님.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="생신 축하드려요" />
        <meta property="og:description" content="#0624 #생신 #축하 #행복" />
        <meta property="og:image" content="images/logo.jpg" />
      </Head>
      <Nav />
      <main>{children}</main>
      <ReactAudioPlayer src="maria.mp3" autoPlay loop />
      {scrollBtn ? (
        <div className="sticky right-8 bottom-8">
          <div className="absolute right-8 bottom-0 justify-center items-start">
            <div
              className="toUp relative w-14 h-14 cursor-pointer"
              onClick={(e) => toUp()}
            >
              <Image layout="fill" src="/images/onTop.png" />
            </div>
            <p className="text-gray-500 text-center text-sm font-[GmarketSansBold]">
              On Top
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Layout;
