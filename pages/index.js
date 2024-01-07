import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const title = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const text = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export default function Home() {
  const [transitionState, setTransitionState] = useState("");
  const router = useRouter();

  const handleProject = (event) => {
    setTransitionState("-translate-x-[105vw]");
    setTimeout(() => {
      router.push("/projects");
    }, 1000);
  };

  const handleContact = (event) => {
    setTransitionState("translate-x-[105vw]");
    setTimeout(() => {
      router.push("/contact");
    }, 1000);
  };

  return (
    <div
      className={"w-full transition-transform duration-1000 " + transitionState}
    >
      <header className="w-full flex flex-col items-center justify-center mb-[6vh] h-[90vh]">
        <h1 className="uppercase font-[400] text-[37vw] leading-[0.8] tracking-tight">
          Azizh
        </h1>

        <h2 className="uppercase font-[400] text-[12vw] leading-none tracking-wider">
          Mohammad
        </h2>

        <h3 className="text-xl">A Portfolio.</h3>
      </header>

      <Navbar />

      <div className="min-h-screen mt-[20vh]">
        <div
          id="aboutIntro"
          className="flex justify-center relative"
        >
          <div className="w-[40vw]">
            <h2 className="uppercase absolute bottom-0 font-[600] text-[12rem] tracking-tighter -mx-[18rem] pb-[10rem]">
              <span className="block leading-[0.8]">about</span>
              <span className="block leading-[0.8]">myself</span>
            </h2>
            <img
              className="w-full object-cover max-h-[80vh]"
              src="assets/candid-1.png"
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center mt-[8vh]">
          <div className="font-[700] text-3xl uppercase tracking-wider [word-spacing:0.8rem] leading-[1.05]">
            <p>text that describes yourself in</p>
            <p>around the same length as this</p>
            <p>parahraph, let me know what you want</p>
          </div>
        </div>
      </div>

      <div className="mt-[8vh] flex flex-row">
        <div className="basis-[60%]">
          <img
            className="max-h-[67vh] w-full object-cover"
            src="assets/candid-2.png"
            alt=""
          />
        </div>
        <div
          className={
            "basis-[40%] px-[5rem] my-auto space-y-5 " + text.className
          }
        >
          <p className="text-justify text-xl leading-[1.5]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            facere id mollitia laborum ipsa facilis explicabo, dignissimos et
            quae voluptatibus sint est reiciendis optio minima odio aliquam
            repellat reprehenderit incidunt qui vel quas similique ut veritatis?
            Cupiditate pariatur in corrupti distinctio sapiente sunt rerum,
            explicabo possimus. Cupiditate, nulla tempore? Est!
          </p>
          <p className="text-justify text-xl leading-[1.5] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            veniam. Nihil in amet magni inventore molestias fugiat nemo
            voluptates assumenda? Iusto veritatis quos debitis nesciunt nostrum
            tempore fuga alias saepe, a ratione aspernatur voluptates maiores
            ad, earum, fugiat aut dignissimos eveniet! Exercitationem natus
            aperiam labore!
          </p>
          <p className="text-justify text-xl leading-[1.5] ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea tempora
            ex ratione animi eos quas inventore debitis. Deserunt tenetur sint
            inventore velit temporibus, veniam voluptate sit dolor distinctio
            iste, maiores pariatur eius illum. Dicta, doloribus maxime nulla
            impedit vitae sint velit maiores placeat illum veritatis voluptatum
            repudiandae, similique ex ipsa cupiditate facere nisi et facilis!
          </p>
        </div>
      </div>

      <div className="h-[80vh] mt-[20vh] flex justify-center items-center relative">
        <div className="absolute top-0 flex items-center h-full w-full">
          <img
            className=" h-[60vh] w-[32.3vw] object-cover ml-[41vw]"
            src="assets/tech.jpg"
            alt=""
          />
        </div>
        <div
          className="z-10 cursor-pointer"
          onClick={handleProject}
        >
          <h3 className="text-[16vw] leading-none z-10">
            PROJ<span className="text-white opacity-[80%]">ECTS</span>{" "}
            <span className="mb-3">→</span>
          </h3>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center relative -mt-[10vh]">
        <div className="absolute top-0 flex items-center h-full w-full">
          <img
            className=" h-[60vh] w-[28vw] object-cover ml-[33.4vw]"
            src="assets/contact.jpg"
            alt=""
          />
        </div>
        <div
          className="z-10 cursor-pointer"
          onClick={handleContact}
        >
          <h3 className="text-[16vw] leading-none z-10">
            <span className="mb-3">←</span>
            C<span className="text-white opacity-[80%]">ONT</span>ACT
          </h3>
        </div>
      </div>

      <Footer />
    </div>
  );
}
