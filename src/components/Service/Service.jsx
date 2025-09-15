// PricingCards.jsx
"use client";
import React, { useRef } from "react";
import { planData } from "../../data.jsx";
import "./Service.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion.tsx";

// Import the component you want to add
import Index from "./Index.tsx";

const PricingCard = ({ title, features }) => (
  <div className={`card ${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <ul className="features">
      {features.map((feature, index) => (
        <li key={index}>
          <i className="fas fa-check blue-check"></i>
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Serve = () => {
  // Create a ref for the services section
  const servicesRef = useRef(null);

  // Function to scroll to services section
  const scrollToServices = () => {
    if (servicesRef.current) {
      servicesRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // Handle accordion value change
  const handleAccordionChange = (value) => {
    if (value) {
      // Small delay to ensure accordion opens first, then scroll
      setTimeout(() => {
        scrollToServices();
      }, 50);
    }
  };

  // Define different content for each accordion
  const accordionData = [
  {
    id: "item-1",
    title: "Consulting",
    sections: [
      {
        bg: "bg-slate-950",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/1254135/pexels-photo-1254135.jpeg",
        title: "Feasibility Studies",
        description: "We analyze the viability of your project, assessing its technical, economic, and operational aspects to ensure it's a sound investment from the start.",
      },
      {
        bg: "bg-blue-500",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/6615239/pexels-photo-6615239.jpeg",
        title: "Conceptual Studies",
        description: "Developing initial concepts and design options to create a strong foundation for your project.",
      },
      {
        bg: "bg-slate-950",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/3662370/pexels-photo-3662370.jpeg",
        title: "Development Studies",
        description: "A comprehensive evaluation of potential development sites, considering all factors for strategic project planning.",
      },
    ],
  },
  {
    id: "item-2",
    title: "Engineering",
    sections: [
      {
        bg: "bg-green-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/5802827/pexels-photo-5802827.jpeg",
        title: "Survey Investigation & Mapping",
        description: "We perform detailed site surveys and investigations to gather accurate data, creating precise maps essential for project design.",
      },
      {
        bg: "bg-gray-300",
        textColor: "text-black",
        image: "https://images.pexels.com/photos/271667/pexels-photo-271667.jpeg",
        title: "Project Planning",
        description: "Our expert planning services lay out the entire project timeline, milestones, and resource allocation for a smooth and efficient workflow.",
      },
      {
        bg: "bg-green-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/3862367/pexels-photo-3862367.jpeg",
        title: "Detailed Designs & Drawings",
        description: "We produce comprehensive technical blueprints and detailed drawings that serve as the precise guide for your construction team.",
      },
      {
        bg: "bg-green-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/8732777/pexels-photo-8732777.jpeg",
        title: "Quantity & Cost Estimates",
        description: "We provide accurate Bills of Quantities and detailed cost estimates to ensure complete budget control and financial transparency.",
      },
      {
        bg: "bg-green-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/8470810/pexels-photo-8470810.jpeg",
        title: "Detailed Project Reports",
        description: "A complete report outlining all aspects of the project, including technical details, financial analysis, and environmental impact.",
      },
      {
        bg: "bg-green-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/4968574/pexels-photo-4968574.jpeg",
        title: "BID Documents",
        description: "We prepare professional and clear bidding documents to facilitate a transparent and efficient procurement process for your project.",
      },
    ],
  },
  {
    id: "item-3",
    title: "Project Management",
    sections: [
      {
        bg: "bg-purple-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/30580528/pexels-photo-30580528.jpeg",
        title: "Quality Assurance",
        description: "Our quality assurance process ensures every stage of construction meets the highest standards for safety, durability, and performance.",
      },
      {
        bg: "bg-gray-300",
        textColor: "text-black",
        image: "https://images.pexels.com/photos/28196491/pexels-photo-28196491.jpeg",
        title: "Third-Party Inspections",
        description: "We provide unbiased, third-party inspections to verify that your project adheres to all specifications, codes, and regulations.",
      },
      {
        bg: "bg-purple-600",
        textColor: "text-white",
        image: "https://images.pexels.com/photos/33844311/pexels-photo-33844311.jpeg",
        title: "EPC Services",
        description: "Our full-scope EPC (Engineering, Procurement, and Construction) service streamlines your project by handling all phases from design to completion.",
      },
    ],
  },
];

  return (
    <div className="container1" ref={servicesRef}>
      <div className="wrapper">
        <div className="card-area">
          <Accordion
            type="single"
            collapsible
            className="w-full text-zinc-900"
            onValueChange={handleAccordionChange}
            // defaultValue="item-1"
          >
            {accordionData.map((accordion) => (
              <AccordionItem
                key={accordion.id}
                value={accordion.id}
                className="border-b border-zinc-200"
              >
                <AccordionTrigger className="font-semibold text-lg hover:no-underline py-4">
                  {accordion.title}
                </AccordionTrigger>

                <AccordionContent className="flex flex-col gap-4 text-balance text-zinc-600">
                  <div className="h-[80vh] overflow-y-auto accordion-scroll">
                    <Index useLenis={false} sections={accordion.sections} />
                  </div>

                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Serve;