import React,{useRef} from "react";
import "./About.css"
import { FaCheck } from "react-icons/fa";
import img from "./about-image.jpg"
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const container = useRef(null);

    useGSAP(() => {
    const timeline = gsap.timeline({
        delay: 0.5,
        scrollTrigger: {
            trigger: container.current,
            start: "20% bottom",
            end: "bottom top"
        }
    });
    
    timeline
    .from(
        ".company__photo",
        {x: -50, opacity: 0}
    )
    .from(
        ".title",
        {y:-50,opacity:0}
    )
    .from(
        ".sub__title",
        {y:-50,opacity:0}
    )
    .from(
        ".box",
        {x:50,opacity:0,stagger:.5}
    )
    .from(
        ".description",
        {y:50,opacity:0}
    )
    .from(
        ".group",
        {y:50,opacity:0}
    )
    .from(
        ".buttons__container",
        {y:50,opacity:0}
    )
}, {scope: container});

    return(
        <section id="about" ref={container}>
            <div className="container">
                <div className="column company__photo">
                    <img src={img} alt="" />
                </div>
                <div className="column">
                    <h1 className="title">
                        <span className="g-text">About Us</span>
                    </h1>
                    <h3 className="sub__title">
                    Realizing visions through fundamental focus.
                    </h3>
                    <div className="company__media__container">

                        {/* <div className="box">
                            <img src={img1} alt="" />
                        </div>

                        <div className="box">
                            <img src={img2} alt="" /> 
                        </div>

                        <div className="box">
                            <img src={img3} alt="" />
                        </div> */}

                    </div>
                    <p className="text__muted description leading-relaxed ">
                    Liberalty Constructions Pvt Ltd is a trusted name in engineering solutions, offering expert services in structural design, project consulting, irrigation, infrastructure development, and project management. With a focus on precision, reliability, and innovation, we help bring your projects to life — from planning to execution. Our team of experienced professionals works closely with clients to deliver smart, efficient, and sustainable solutions that meet safety standards, budgets, and timelines. Whether it’s designing a strong structure, managing large infrastructure projects, or providing expert advice, we are committed to building a better future, one project at a time.
                    <br />
                    Led by Chairperson and Managing Director, <span className="chairperson-name">Reddi Prakash</span>, and Director, <span className="chairperson-name">Uday Kumar.</span>
                    </p>

                    {/* <div className="group">

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted" >Consultation</p>
                                <h3>Free</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Expert</p>
                                <h3>Engineers</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Customer</p>
                                <h3>Support</h3>
                            </div>
                        </div>

                        <div className="row">
                            <div className="icon__container">
                                <FaCheck/>
                            </div>
                            <div className="details">
                                <p className="text__muted">Quality</p>
                                <h3>Services</h3>
                            </div>
                        </div>

                    </div> */}

                    {/* <div className="buttons__container">
                        <Link to="project" smooth={true} className="btn" >Explore</Link>
                        <Link to="contact" smooth={true} className="btn btn__primary" >Get a quote</Link>
                    </div> */}

                </div>
            </div>
        </section>
    )
}

export default About;