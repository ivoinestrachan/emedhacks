import { PhotoGrid } from "@/components/PhotoGrid";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Lottie from "lottie-react";
import { useEffect, useState, useRef } from "react";
import splash from "../public/splash2.json";
import { WhatIsHackathon } from "@/components/WhatIsHackathon";
import { Rundown } from "@/components/Rundown";
import { FAQ } from "@/components/FAQ";
import { Sponsors } from "@/components/Sponsors";
import { Footer } from "@/components/Footer";

export function useIsVisible(ref: any) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return isIntersecting;
}

export default function Home() {
  const loadRef = useRef(null);
  const isVisible = useIsVisible(loadRef);
  const [showTitle, setShowTitle] = useState(1);
  useEffect(() => {
    const seen = localStorage.getItem("titleSeen");
    if (seen != null) {
      setShowTitle(0);
      return;
    }
    const media = window.matchMedia(
      "(max-aspect-ratio: 18/9) and (min-aspect-ratio: 14/9)"
    );
    if (media.matches !== true || seen != null) {
      setShowTitle(0);
    } else {
      setShowTitle(1);
      setTimeout(() => {
        setShowTitle(0);
        localStorage.setItem("titleSeen", "true");
      }, 7400);
    }
    const listener = () => {
      if (media.matches !== true || seen != null) {
        setShowTitle(0);
      } else {
        localStorage.setItem("titleSeen", "true");
        setShowTitle(1);
        setTimeout(() => {
          setShowTitle(0);
        }, 7400);
      }
    };
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="flex relative py-6">
          <Lottie
            animationData={splash}
            className={`flex justify-center items-center ${
              showTitle < 1 ? "hidden" : "block"
            }`}
            loop={false}
          />
          <div
            ref={loadRef}
            className={`transition-opacity ease-in duration-700  ${
              isVisible ? "opacity-100" : "opacity-100"
            } ${showTitle > 0 ? "hidden" : "block"}`}
          >
            <div className={`flex flex-col`}>
              <main
                className={`md:flex max-w-8xl gap-[5%] mx-auto md:p-12 md:pb-6 lg:p-24 lg:pb-12`}
              >
                <div className="flex md:px-0 text-center flex-col items-center md:text-left md:w-1/2 md:pr-[5%]">
                  <div>
                    <h1
                      className="text-xl lg:text-3xl outlineText text-transparent
                "
                    >
                      introducing...
                    </h1>
                    <h1 className="text-6xl lg:text-8xl mt-[5px] ml-[-5px]">
                      E-Med
                    </h1>
                    <div className="flex justify-start md:justify-start">
                      <div className="space-y-1 lg:space-y-3 mt-3 md:mt-[10px]">
                        <img
                          src="/blob.svg"
                          className="gridImage select-none absolute top-[20vh] left-[-1vw]"
                          style={{ zIndex: -2 }}
                        />
                        <div className="flex items-center space-x-4">
                          <FiCalendar className="text-xl md:text-2xl lg:text-2xl" />
                          <span className="text-md md:text-lg lg:text-xl">
                            May XX, 2024
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FiMapPin className="text-xl md:text-2xl lg:text-2xl" />
                          <span className="text-md md:text-lg lg:text-xl">
                            Bay Area
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 flex flex-col space-y-1">
                      <p>I'm interested:</p>
                      <a
                        target="_blank"
                        href="https://forms.gle/9GaurzRoECPgAy2e8"
                        className="flex space-x-2 items-center justify-center underline text-center rounded-md bg-accent font-bold text-lg hover:bg-red-700 transition w-full py-3"
                      >
                        <span>Register</span>
                        <HiOutlineExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2  p-6 md:p-0">
                  <img src="/ref.png" className="gridImage select-none" />
                </div>
              </main>
              <p className="max-w-4xl text-lg mx-auto text-center p-6 md:p-0">
                E-Med will be an in-person medical-themed hackathon in the Bay
                Area. Join us for twelve hours of making projects, connections,
                and positive change in our communities. No prior coding
                experience? No problem! We'll provide any and all support you'll
                need to have fun and leave with a new skill.
              </p>
            </div>
            <div className="mt-6 md:mt-[7vh]">
              <WhatIsHackathon />
            </div>
            <div className="mt-6 md:mt-[7vh]">
              <Rundown />
            </div>
            <div className="mt-6 md:mt-[7vh]">
              <Sponsors />
            </div>
            <div className="pt-6 md:pt-[7vh] relative">
              <FAQ />
              <img
                src="/blob.svg"
                className="gridImage opacity-75 select-none absolute top-[50%] right-[10%]"
                style={{ zIndex: -2 }}
              />
            </div>
            <div
              className="h-10 w-screen fixed bottom-0"
              style={{
                zIndex: 999,
                background:
                  "linear-gradient(180deg, rgba(255, 0, 0, 0.00) 0%, #FF6961 100%)",
              }}
            ></div>
          </div>
        </div>
        <div
          ref={loadRef}
          className={`transition-opacity ease-in duration-700  ${
            isVisible ? "opacity-100" : "opacity-100"
          } ${showTitle > 0 ? "hidden" : "block"}`}
        >
          <Footer />
        </div>
      </div>
    </>
  );
}
