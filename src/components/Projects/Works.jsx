import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";
import "./work.css"

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === "all") {
            setProjects(projectsData);
        } else {
            const newProjects = projectsData.filter((project) => {
                return project.category.toLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLowerCase() });
        setActive(index);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        centerMode: true,
        pauseOnHover: true,
        autoplay: true,
        autoplaySpeed: 2000,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '30px',
                }
            }
        ]
    };

    return (
        <section id="">
            <div className="pcont">
                {/* <h1 className="title">
                    My <span className="g-text">Projects</span>
                </h1>
                <h3 className="sub__title">Check out our latest work</h3> */}
                
                <div className="work__filters">
                    {projectsNav.map((item, index) => (
                        <span
                            onClick={(e) => handleClick(e, index)}
                            className={`${active === index ? 'active-work' : ''} work__item`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    ))}
                </div>

                <Slider {...settings} className="">
                    {projects.map((project) => (
                        <div key={project.id} className="project-slide">
                            <WorkItems item={project} />
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default Works;