import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Project1() {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <img
          className="w-full h-[88vh] object-cover"
          src="assets/aicar.png"
          alt=""
        />

        <div className="mt-[2rem]">
          <h1 className="text-[4rem] uppercase leading-none">
            Developing a Self-Driving Car Using Deep Learning and OpenCV
          </h1>

          <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
            <p>2022</p>
            <p>/</p>
            <p>Group</p>
            <p>/</p>
            <p>Artificial intelligence</p>
          </div>

          <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Overview
              </h3>
              <p className="">
                In an ambitious venture into the realm of AI and machine
                learning, our team embarked on a project to develop a
                self-driving car within a video game environment. Utilizing the
                power of OpenCV and deep learning, along with tools like Udacity
                and Python, we aimed to create an autonomous vehicle capable of
                navigating a race track. The project's cornerstone was the use
                of object detection techniques to identify track lines and
                maintain the car's position centrally on the track. This
                endeavor was not just a technical challenge but also an exciting
                exploration into the potential of self-driving car technology.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                My Role and Responsibilities
              </h3>
              <p className="" id="role">
                As a key member of the project team, my primary responsibility
                was the manual training of the car. This involved multiple
                sessions of driving the car myself within the game, recording
                these sessions, and then breaking them down into individual
                images. These images served as the foundational data for
                training our deep learning model. One of the critical challenges
                I faced was striking the right balance between overfitting and
                underfitting the model. It was essential to ensure that the
                model was sufficiently trained on the dataset without losing its
                ability to generalize to new, unseen track conditions. My second
                focus was fine-tuning the model's learning behaviors. This task
                required a deep understanding of the model's parameters and a
                keen sense of how adjustments would impact its performance on
                the track.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Challenges and Solutions
              </h3>
              <p className="">
                The project presented several challenges, particularly in data
                preparation and model tuning. The process of converting recorded
                driving sessions into a usable dataset for training was
                intricate, requiring careful selection and processing of images.
                In terms of model tuning, the primary challenge was to calibrate
                the model to avoid overfitting or underfitting. This was
                achieved through iterative testing and adjustments, ensuring
                that the model learned effectively from the training data while
                retaining the flexibility to adapt to different track scenarios.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Outcomes
              </h3>
              <p className="">
                The culmination of our efforts was a successfully functioning
                self-driving car that could complete the race track most of the
                time. This achievement was a testament to the effectiveness of
                our training and model optimization strategies. The project
                provided us with profound insights into the complexities of
                self-driving car technology and the potential applications of AI
                in this field. It was not only a significant technical
                accomplishment but also an immensely enjoyable and rewarding
                experience for the entire team.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Conclusion
              </h3>
              <p className="">
                This project was a remarkable journey into the intersection of
                gaming, AI, and automotive technology. It highlighted the
                capabilities of deep learning and computer vision in creating
                autonomous systems and opened up avenues for further exploration
                in this exciting field. The experience gained from this project
                has been invaluable, offering a practical understanding of AI's
                potential and the intricacies involved in training and
                optimizing deep learning models for real-world applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-[20vh]" />
    </div>
  );
}

export default Project1;
