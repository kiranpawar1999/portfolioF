
import {Swiper, SwiperSlide} from "swiper/react";
import projectOne from "../assets/images/project-1.png";
import projectTwo from "../assets/images/project-2.png";
import {Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Project (props) {
    const projects = [
        {
           img: projectOne,
           name: "Myshop",
           github_link: "",
           live_link: "",

        },
        {
              img: projectTwo,
              name: "Product Manage",
              github_link:
                "",
              live_link: "",
            },

        
    ];
    return (
        <>
        <section id="projects" className="py-20 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
            <p className="text-gray-400 mt-3 text-lg"> My works </p>
            </div>
            <br/>
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-12/13 w-full h-full">
              <Swiper
  slidesPerView={1}
  loop={projects.length > 2} // 👈 smart condition
  spaceBetween={20}
  breakpoints={{
    768: {
      slidesPerView: 1,
    },
  }}
  autoplay={{
    delay: 3000,
  }}
  pagination={{
    clickable: true,
  }}
  modules={[Pagination, Autoplay]}
>
         {projects.map((project_info, i) => (
                        <SwiperSlide key={i}>
                            <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                <img src={project_info.img} alt="" className="rounded-lg"/>
                                <h3 className="text-xl my-4">{project_info.name} </h3>
                                <div className="flex gap-3">
                                    <a href={project_info.github_link} 
                                    target="_blank"
                                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block">
                                        Github

                                    </a>
                                    <a href={project_info.live_link}
                                    target="_blank"
                                    className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block" >
                                        Live
                                    </a>

                                </div>

                            </div>
                        </SwiperSlide>
                    ) )}

                </Swiper>
                </div>

            </div>

        </section>
        
        </>
    )
}

export default Project;