import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Internship() {
  return (
    <div>
      <Navbar />

      <div className="pt-[5rem]">
        <img
          className="w-full h-[88vh] object-cover"
          src="https://picsum.photos/2000"
          alt=""
        />

        <div className="mt-[2rem]">
          <h1 className="text-[10rem] uppercase leading-none">
            Title for this project
          </h1>

          <div className="uppercase text-[2rem] opacity-[50%] flex space-x-[4rem] mt-[2vh]">
            <p>2023</p>
            <p>/</p>
            <p>Group</p>
            <p>/</p>
            <p>Artificial intelligence</p>
          </div>

          <div className="mt-[5vh] py-[10vh] px-[20vw] space-y-[5vh] text-xl ">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              vero ut esse rem ducimus beatae sequi nobis? Alias quod illo,
              ipsam tenetur consequuntur harum natus deleniti incidunt officiis
              inventore maxime perferendis iure optio. Tempora ipsam vitae
              ipsum, harum eveniet labore esse doloribus sapiente architecto ea
              velit quidem distinctio laboriosam? Dolorem velit eos veritatis
              laborum incidunt hic distinctio, earum ipsa aliquam delectus
              excepturi aspernatur ea repellat doloremque commodi doloribus id
              quo architecto beatae nobis? Sunt, eveniet nisi. Eligendi totam,
              eum repudiandae dolorem ipsum doloremque debitis a, unde
              consectetur in voluptatem dolores eveniet voluptates tempora quos
              fuga, ea ratione facilis ab dignissimos.
            </p>

            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              vero ut esse rem ducimus beatae sequi nobis? Alias quod illo,
              ipsam tenetur consequuntur harum natus deleniti incidunt officiis
              inventore maxime perferendis iure optio. Tempora ipsam vitae
              ipsum, harum eveniet labore esse doloribus sapiente architecto ea
              velit quidem distinctio laboriosam? Dolorem velit eos veritatis
              laborum incidunt hic distinctio, earum ipsa aliquam delectus
              excepturi aspernatur ea repellat doloremque commodi doloribus id
              quo architecto beatae nobis? Sunt, eveniet nisi. Eligendi totam,
              eum repudiandae dolorem ipsum doloremque debitis a, unde
              consectetur in voluptatem dolores eveniet voluptates tempora quos
              fuga, ea ratione facilis ab dignissimos.
            </p>
          </div>
        </div>
      </div>

      <Footer className="mt-[20vh]" />
    </div>
  );
}

export default Internship;
