import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect } from "react";

const title = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const text = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Projects() {
  const [transitionState, setTransitionState] = useState("translate-x-[105vw]");

  useEffect(() => {
    setTransitionState("");
  });

  return (
    <div
      className={
        "w-full transition-transform duration-1000 relative " + transitionState
      }
    >
      <Navbar className="pt-[1vh]" />

      <div className="">
        <div className="flex flex-row sticky top-[42vh] w-full h-full">
          <div className="basis-[35%] flex flex-col justify-center items-center w-full h-full z-10">
            <div className="uppercase font-[500] text-[2rem] text-right">
              <h2>showcasing</h2>
              <h2>projects</h2>
              <h2>i</h2>
              <h2>have</h2>
              <h2>accomplished</h2>
            </div>
          </div>
          <div className="basis-[65%]"></div>
        </div>

        <div className="flex flex-row uppercase">
          <div className="basis-[35%]"></div>
          <div className="basis-[65%] z-10 -mt-[14vh]">
            <div className="">
              <Link href="/project-1">
                <img
                  className="max-h-[55vh] w-[25vw] object-cover"
                  src="assets/placeholder-1.webp"
                  alt=""
                />
              </Link>
              <div className="mt-5 space-y-2">
                <Link href="/project-1">
                  <h2 className="font-[700] text-2xl tracking-wider leading-none">
                    ai project
                  </h2>
                  <h3 className="font-[700] text-2xl tracking-wider leading-none">
                    autonomous driving car
                  </h3>
                </Link>
              </div>
            </div>

            <div className="flex justify-end -mt-[12vh]">
              <div>
                <Link href="/project-2">
                  <img
                    className="max-h-[55vh] w-[25vw] object-cover"
                    src="assets/placeholder-1.webp"
                    alt=""
                  />
                </Link>
                <div className="mt-5 space-y-2">
                  <Link href="/project-2">
                    <h2 className="font-[700] text-2xl tracking-wider leading-none">
                      ai project
                    </h2>
                    <h3 className="font-[700] text-2xl tracking-wider leading-none">
                      autonomous driving car
                    </h3>
                  </Link>
                </div>
              </div>
            </div>

            <div className="-mt-[10vh]">
              <Link href="/project-3">
                <img
                  className="max-h-[55vh] w-[25vw] object-cover"
                  src="assets/placeholder-1.webp"
                  alt=""
                />
              </Link>
              <div className="mt-5 space-y-2">
                <Link href="/project-3">
                  <h2 className="font-[700] text-2xl tracking-wider leading-none">
                    ai project
                  </h2>
                  <h3 className="font-[700] text-2xl tracking-wider leading-none">
                    autonomous driving car
                  </h3>
                </Link>
              </div>
            </div>

            <div className="flex justify-end mt-[15vh]">
              <Link href="/internship" className="w-full">
                <img
                  className="max-h-[55vh] w-[100%] object-cover"
                  src="assets/internship.png"
                  alt=""
                />
              </Link>
            </div>
            <div className="mt-5">
              <Link href="/internship">
                <h2 className="font-[700] text-2xl tracking-wider leading-none">
                  internship
                </h2>
                <h3 className="font-[700] text-2xl tracking-wider leading-none">
                  internship title here
                </h3>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-[40vh]" />
    </div>
  );
}
