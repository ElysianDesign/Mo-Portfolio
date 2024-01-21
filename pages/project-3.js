import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Project3() {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <img
          className="w-full h-[88vh] object-contain"
          src="assets/bd.png"
          alt=""
        />

        <div className="mt-[2rem]">
          <h1 className="text-[5rem] uppercase leading-none">
            Big Data Image Classification for Cheese Varieties
          </h1>

          <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
            <p>2022</p>
            <p>/</p>
            <p>Group</p>
            <p>/</p>
            <p>Big Data</p>
          </div>

          <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Overview
              </h3>
              <p className="">
                Our team undertook a project in big data image classification
                with the goal of developing a model capable of identifying
                various types of cheese. This task presented a unique challenge
                due to the subtle differences among cheese varieties.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Description
              </h3>
              <p className="" id="role">
                The core objective was to train a machine learning model to
                accurately classify images of cheese. We aimed to distinguish
                between numerous cheese types, a task that required precise
                image processing and advanced classification techniques.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Achievements
              </h3>
              <p className="">
                Our team's efforts culminated in the successful development of
                an image classification model that demonstrated a notable
                ability to identify different types of cheese. By leveraging
                Google's Teachable Machine, we were able to enhance the model's
                learning capabilities, which proved essential in distinguishing
                between the various cheese varieties. This integration not only
                streamlined the training process but also provided us with a
                more intuitive understanding of how machine learning models can
                be optimized for specific tasks like food classification. The
                achievement was a significant step in showcasing the practical
                applications of image classification in the culinary domain,
                particularly in areas requiring nuanced differentiation such as
                cheese varieties.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Challenges and Solutions
              </h3>
              <p className="">
                One of the main challenges was the high similarity among various
                cheese types, which made classification difficult. We addressed
                this by meticulously curating our dataset and fine-tuning the
                model's parameters to better distinguish subtle differences.
                Through iterative testing and adjustments, we improved the
                model's accuracy.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Role
              </h3>
              <p className="">
                My contribution to the project was supportive yet impactful. I
                assisted in web scraping images for our dataset and participated
                in the labeling and highlighting process, ensuring that our data
                was accurately categorized. Additionally, I was involved in
                cleaning the dataset by removing unsuitable images, which was
                crucial for maintaining the quality of our training data. I also
                had a hand in adjusting some of the model's learning rates,
                contributing to the fine-tuning process that enhanced its
                performance. My role, while not leading, was integral to the
                project's overall success, providing me with valuable experience
                in the practical aspects of machine learning and data handling.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Conclusion
              </h3>
              <p className="">
                This project was a testament to the power of image
                classification in AI and the versatility of big data
                applications. My role in data preparation, model training, and
                quality assessment was instrumental in achieving our objectives.
                The experience gained from this project has been invaluable,
                enhancing my skills in AI, machine learning, and data science
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-[20vh]" />
    </div>
  );
}

export default Project3;
