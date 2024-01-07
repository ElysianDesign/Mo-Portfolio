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

export default function Contact() {
  const [transitionState, setTransitionState] = useState(
    "-translate-x-[105vw]"
  );

  useEffect(() => {
    setTransitionState("");
  });

  return (
    <div
      className={
        "w-full min-h-screen transition-transform duration-1000 relative " +
        transitionState
      }
    >
      <Navbar />

      <div className="w-full h-[85vh] flex flex-col justify-around space-y-[5rem]">
        <div className="flex justify-end pt-[4rem]">
          <h1 className="text-[8rem] uppercase font-[300] mt-[5vh] leading-none">
            contact
          </h1>
        </div>

        <div className="flex justify-center relative">
          <div className="absolute top-0 right-0 h-full">
            <div className="flex flex-col h-full justify-center uppercase font-[300] text-[2rem] space-y-[1rem] mr-[5vw]">
              <div>
                <Link href="https://www.linkedin.com">linkedin</Link>
              </div>
              <div>
                <Link href="https://twitter.com">twitter?</Link>
              </div>
            </div>
          </div>

          <div className="absolute top-0 h-full">
            <div className="flex flex-col justify-end h-full pb-[3rem]">
              <h3 className="font-[300] uppercase">when do we hang out?</h3>
            </div>
          </div>
          <img
            className="rounded-full w-[25vw] h-[25vw] object-cover"
            src="assets/candid-3.png"
            alt=""
          />
        </div>

        <div className="text-[8rem] leading-none font-[600] tracking-wide">
          <Link href="mailto:email@student.thomasmore.be">
            <h3>email@</h3>
            <h3>student.thomasmore.be</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
