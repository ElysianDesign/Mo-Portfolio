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
      router.push("/internship");
    }, 1000);
  };

  return (
    <div
      className={"w-full transition-transform duration-1000 " + transitionState}
    >
      <header className="w-full flex flex-col items-center justify-center mb-[6vh] h-[90vh]">
        <h1 className="uppercase font-[400] text-[37vw] leading-[0.8] tracking-tight">
          Azish
        </h1>

        <h2 className="uppercase font-[400] text-[12vw] leading-none tracking-wider">
          Mohammad
        </h2>

        <h3 className="text-xl">A Portfolio.</h3>
      </header>

      <Navbar />

      <div className="min-h-screen mt-[20vh]">
        <div id="aboutIntro" className="flex justify-center relative">
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
            <p>Mohammad Azish, 33, born in Iran</p>
            <p>moved to Canada at 9, </p>
            <p>residing in Belgium since 2019,</p>
            <p>embracing diverse cultures</p>
          </div>
        </div>
      </div>

      <div className="mt-[8vh] flex flex-row">
        <div className="basis-[60%] my-auto">
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
          <p className="text-justify text-lg leading-[1.5]">
            My interests are as varied as my background. I am an avid volleyball
            player, finding in the sport both the thrill of competition and the
            joy of teamwork. Gaming is another passion of mine, offering a
            digital realm of challenges and adventures. But perhaps closest to
            my heart is camping in the serene and majestic forests of Canada, a
            reminder of the beauty and tranquility of nature.
          </p>
          <p className="text-justify text-lg leading-[1.5] ">
            I am currently in the final stages of completing my study in Applied
            Computer Science, a field that perfectly blends my love for
            technology and practical problem-solving. Prior to this, I studied
            Kinesiology at York University in Toronto, which provided me with a
            deep understanding of human movement and health.
          </p>
          <p className="text-justify text-lg leading-[1.5] ">
            My technical skills are a blend of academic knowledge and hands-on
            experience. I am proficient in Python and Java, two of the most
            sought-after programming languages in the tech industry. My
            expertise in AI and Large Language Models (LLM) reflects my
            fascination with the cutting edge of technology and its potential to
            revolutionize how we interact with information. Additionally, I have
            a strong background in image classification and data manipulation,
            skills that are increasingly vital in a data-driven world.
          </p>
          <p className="text-justify text-lg leading-[1.5] ">
            As I look to the future, I am excited about the opportunities that
            lie ahead. I am eager to apply my skills and knowledge in a
            professional setting, where I can contribute to meaningful projects
            and continue to grow both personally and professionally. Whether
            it's developing innovative software solutions, harnessing the power
            of AI, or analyzing complex data sets, I am ready for the challenges
            and rewards that my career will bring.
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
        <div className="z-10 cursor-pointer" onClick={handleProject}>
          <h3 className="text-[16vw] leading-none z-10">
            PROJ<span className="text-white opacity-[80%]">ECTS</span>{" "}
            <span className="mb-3">→</span>
          </h3>
        </div>
      </div>

      <div className="h-screen flex justify-center items-center relative -mt-[10vh]">
        <div className="absolute top-0 flex items-center h-full w-full">
          <img
            className=" h-[60vh] w-[28vw] object-cover ml-[32.7vw]"
            src="assets/contact.jpg"
            alt=""
          />
        </div>
        <div className="z-10 cursor-pointer" onClick={handleContact}>
          <h3 className="text-[16vw] leading-none z-10 uppercase">
            <span className="mb-3">←</span>
            in<span className="text-white opacity-[80%]">ter</span>ship
          </h3>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-[10vh]">
        <Link href="assets/docs/AzishMohammadCV.pdf" download={true} target="_blank">
          <h2 className="font-bold text-[5rem]">My CV</h2>
          <img
            src="assets/docs/cv-mo-azish.jpg"
            className="object-cover w-[50vw]"
            alt=""
          />
        </Link>
      </div>

      <Footer />
    </div>
  );
}
