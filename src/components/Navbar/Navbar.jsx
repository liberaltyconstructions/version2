import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css"
import {navTabs} from "../../data"
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Fill } from "react-icons/ri";
import Logo from "../Logo/Logo";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";

const Navbar = () => {
    const container = useRef(null);
    const [open,setOpen] = useState(false);
    const [visible,setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('header'); // Manual active state

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY;
        
        // Handle navbar visibility
        if(currentScrollPosition > 145){
            setVisible(true);
        } else {
            setVisible(false);
        }

        // Manual active section detection - Include contact section
        const allSections = [
            ...navTabs.map(tab => ({ id: tab.id, element: document.getElementById(tab.id) })),
            { id: 'contact', element: document.getElementById('contact') } // Add contact section
        ].filter(section => section.element);

        let currentSection = 'header'; // Default to header

        for (let i = allSections.length - 1; i >= 0; i--) {
            const section = allSections[i];
            const rect = section.element.getBoundingClientRect();
            
            // If section is in viewport (considering navbar height)
            if (rect.top <= 100) {
                currentSection = section.id;
                break;
            }
        }

        setActiveTab(currentSection);
    };

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);
        // Set initial active tab
        handleScroll();
        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    useEffect(() => {
        if(visible){
            gsap.fromTo(
                ".navbar",
                {y:-250},
                {y:0,top:0}
            )
        }
    }, [visible]);

    useGSAP(() => {
        const timeline = gsap.timeline({stagger:.5})
        timeline
        .from(".logo", {opacity:0, x:-100,delay:1})
        .from(".tab",{opacity:0,stagger:.5})
        .from('.buttons',{opacity:0,x:100})
    },{scope:container})

    return(
        <nav className={`navbar ${visible ? 'visible' : '' } `} ref={container}>
            {open ? (<div className="sidebar__overlay" onClick={() => setOpen(!open)}></div>) : ""}
            <Logo/>
            <div className={`box nav__tabs ${open ? 'open' : '' }` }>
                <div className="icon__container cancel__btn"
                onClick={() => setOpen(!open)}
                >
                    <FaTimes/>
                </div>
                {
                    navTabs.map((tab,index) => (
                        <Link
                        to={tab.id}
                        className={`tab ${activeTab === tab.id ? 'active' : ''}`} // Manual active class
                        smooth={true}
                        offset={-70}
                        onClick={() => {
                            setOpen(false);
                            setActiveTab(tab.id); // Set active on click
                        }}
                        key={index}
                        >
                            <p>{tab.name}</p>
                        </Link>
                    ))
                }
                
            </div>

            <div className="box buttons">
                <div className="icon__container menu__btn" onClick={() => setOpen(!open)} >
                    <RiMenu3Fill/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;