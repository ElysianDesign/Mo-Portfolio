import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Project2() {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <img
          className="w-full h-[88vh] object-contain"
          src="assets/q2.png"
          alt=""
        />

        <div className="mt-[2rem]">
          <h1 className="text-[4rem] uppercase leading-none">
            Crop Statistics and Global Warming Analysis Using Qlik Sense
          </h1>

          <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
            <p>2022</p>
            <p>/</p>
            <p>Solo</p>
            <p>/</p>
            <p>Business Intellegence</p>
          </div>

          <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Overview
              </h3>
              <p className="">
                In a collaborative project with EpicData, I engaged in an
                insightful exploration of crop statistics in relation to global
                warming. The project's primary tool was Qlik Sense, a powerful
                BI analytics platform, which enabled us to delve deep into the
                data provided by NASA's Socioeconomic Data and Applications
                Center (SEDAC). The dataset, titled "The Twentieth Century Crop
                Statistics," included extensive data on maize and wheat
                production from 1900-2017. Our goal was to create a Qlik Sense
                dashboard that would not only visualize these statistics but
                also integrate them with open-source data on climate change and
                macroeconomics to understand their interplay.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Approach
              </h3>
              <p className="" id="role">
                My approach was to analyze the impact of global warming on crop
                yields and how the agricultural sector has adapted to these
                changes. Through the Qlik Sense platform, I focused on
                cross-referencing crop statistics with global warming data to
                discern patterns and correlations. My findings were intriguing –
                despite the challenges posed by global warming, there was no
                significant negative impact on crop yields. Instead, it appeared
                that agricultural practices, including the use of GMOs and
                advanced farming equipment, had evolved effectively to counter
                the effects of climate change.
              </p>
            </div>

            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Challenges and Solutions
              </h3>
              <p className="">
                One of the key challenges was integrating diverse datasets –
                crop statistics and global warming indicators – in a meaningful
                way. This required not only a deep understanding of the data but
                also skillful use of Qlik Sense's ETL (Extract, Transform, Load)
                capabilities. I utilized the Qlik Scripting Language to
                efficiently process and model the data, ensuring that the
                dashboard reflected accurate and actionable insights.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Project Outcomes
              </h3>
              <p className="">
                The final dashboard provided a comprehensive view of how crop
                yields have changed over the 20th century and their variation by
                region in the context of global warming. According to a NASA
                study, climate change may affect the production of maize and
                wheat as early as 2030. Maize crop yields are projected to
                decline by 24%, while wheat could potentially see growth of
                about 17%. This change is attributed to projected increases in
                temperature, shifts in rainfall patterns, and elevated surface
                carbon dioxide concentrations from human-caused greenhouse gas
                emissions. These insights were crucial for understanding the
                resilience and adaptability of the agricultural sector to
                climate changes.
              </p>
            </div>
            <div>
              <h3 className="uppercase font-bold text-[1.8rem] pb-[1vh]">
                Conclusion
              </h3>
              <p className="">
                This project was not only a testament to the power of data
                analytics in uncovering trends and patterns but also a valuable
                learning experience in understanding the complex relationship
                between agriculture and climate change. The use of Qlik Sense as
                a BI tool proved instrumental in achieving our objectives,
                demonstrating its efficacy in handling large datasets and
                providing meaningful visualizations.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer className="mt-[20vh]" />
    </div>
  );
}

export default Project2;
