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
      <div>
        <Navbar />

        <div className="pt-[5rem]">
          <img
            className="w-full h-[88vh] object-fit"
            src="assets/inte.png"
            alt=""
          />

          <div className="mt-[2rem]">
            <h1 className="text-[10rem] uppercase leading-none">Internship</h1>
            <h2 className="text-[2rem]">
              Enhancing Email Classification at B_Robots: An Internship
              Exploration in AI and Machine Learning
            </h2>

            <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
              <p>2023</p>
              <p>/</p>
              <p>BRobots</p>
              <p>/</p>
              <p>Hasselt</p>
            </div>

            <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
              <p className="">
                From September 18/2023 to December 22/2023, I embarked on an
                enriching internship at B_Robots, a company known for its
                innovative solutions in business process management and AI
                technologies. My project centered on enhancing the company's
                email classification capabilities, a crucial aspect of their
                data management and operational efficiency.
              </p>

              <p className="">
                During my 13-week internship at B_Robots, a Belgian company
                renowned for its innovative strides in business process
                management, AI, and NLP services, I embarked on a challenging
                yet exhilarating project aimed at developing a sophisticated
                email classification system using the BERT (Bidirectional
                Encoder Representations from Transformers) model. This project
                was initiated against the backdrop of B_Robots' expansive
                operations, which involve handling a substantial volume of
                emails daily, necessitating an efficient and accurate
                classification system for better data management and operational
                efficiency.
              </p>

              <p className="">
                My role was multifaceted, encompassing the collection and
                preprocessing of a diverse set of emails to ensure a
                comprehensive training dataset for the model. Initially, the
                project was geared towards implementing the Falcon7b model;
                however, practical challenges necessitated a strategic pivot to
                the more feasible BERT model. This shift not only exemplified
                adaptability in the face of technical constraints but also
                underscored the dynamic nature of working with AI technologies.
              </p>

              <p className="">
                The core of my internship involved meticulously training the
                BERT model, ensuring it could accurately classify various types
                of emails, followed by deploying this model on AWS SageMaker.
                This deployment was crucial as it integrated the model into
                B_Robots' existing systems, marking a significant enhancement in
                their email processing capabilities. Throughout this process, I
                encountered and overcame numerous challenges, particularly in
                model selection and data preprocessing, which were addressed
                through a combination of extensive research, collaborative
                problem-solving with the team, and innovative thinking.
              </p>

              <p className="">
                The internship culminated in the successful implementation of an
                AI-driven solution that not only improved the company's email
                classification process but also provided a scalable and
                adaptable framework for future AI applications within the
                organization. This experience was not only a testament to the
                practical application of my academic knowledge but also a
                significant leap in my professional journey, equipping me with
                invaluable skills and insights in the field of AI and machine
                learning.
              </p>

              <p className="">
                Below you can find all the documents related to my intersnhip.
              </p>

              <div className="flex flex-col">
                <Link href="assets/docs/Reflection_MoAzish_R0857828.docx" download className="text-3xl font-bold">Reflection</Link>
                <Link href="assets/docs/Realization_Document_BROBOTS_r0857828.docx" className="text-3xl font-bold">Realization</Link>
                <Link href="assets/docs/Project Plan.pptx" className="text-3xl font-bold">Project Plan</Link>
                <Link href="assets/docs/InternshipSummary_R0857828_MoAzish.docx" className="text-3xl font-bold">Summary</Link>
              </div>
            </div>
          </div>
        </div>

        <Footer className="mt-[20vh]" />
      </div>
    </div>
  );
}
