import React, { useRef, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HomeVideo from "./Video Project 2.mp4";

const Header = () => {
  const container = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Auto-play was prevented:", error);
        // You could add a play button here if autoplay fails
      });
    }
  }, []);

  useGSAP(
    () => {
      const timeline = gsap.timeline({ delay: 1, stagger: 1 });
      timeline
        .fromTo(
          ".image__container",
          { scale: 0.5, opacity: 0, y: 150 },
          { scale: 1, ease: "sine.in", opacity: 1, y: 0 }
        )
        .from(".title", { opacity: 0, y: -30 })
        .from(".description", { opacity: 0, y: -30 })
        .from(".buttons__container", { opacity: 0, y: 40 });
    },
    { scope: container }
  );

  return (
    <header id="header" ref={container}>
      {/* FIXED: Keep full__height only for header section */}
      <div className="container full__height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              <span className="m-text">Your Partner in Design, Infrastructure, and Project Success.</span>
            </h1>
            <p className="text__muted description">
              From private residences to vital infrastructure and irrigation projects, we bring your visions to life. With our expert team and innovative solutions, we're not just building structures - we're shaping the future of civil engineering for a better world.
            </p>

            <div className="buttons__container">
              <Link to="about" smooth={true} className="btn">
                Welcome
              </Link>
            </div>
          </div>
          <div className="column1">
            <div className="image__container">
              <video
                ref={videoRef}
                src={HomeVideo}
                autoPlay
                loop
                muted
                playsInline
                className="home-video"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;