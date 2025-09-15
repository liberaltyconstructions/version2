'use client';
import React from 'react';

type Section = {
  image?: string;      // image url
  title: string;       // subheading
  description: string; // text area
};

type Props = {
  sections?: Section[];
};

// Example fallback content
const defaultSections: Section[] = [
  {
    image: "https://via.placeholder.com/250",
    title: "Subheading One",
    description: "This is a text area about the image. You can add any details here."
  },
  {
    image: "https://via.placeholder.com/250",
    title: "Subheading Two",
    description: "Another container with a subheading, image on the left and text on the right."
  }
];

export default function Index({ sections = defaultSections }: Props): JSX.Element {
  return (
    // <div className="flex flex-col gap-8">
    //   {sections.map((section, index) => (
    //     <div
    //       key={index}
    //       className="rounded-2xl border border-gray-200 shadow-md p-6 bg-white"
    //     >
    //       {/* Subheading */}
    //       <h2 className="text-xl font-semibold mb-4">{section.title}</h2>

    //       {/* Image + Text layout */}
    //       <div className="flex flex-col md:flex-row gap-6">
    //         {/* Image container */}
    //         <div className="w-full md:w-1/3 flex justify-center items-center border border-gray-300 rounded-lg p-4">
    //           <img
    //             src={section.image}
    //             alt={section.title}
    //             className="object-contain max-h-60"
    //           />
    //         </div>

    //         {/* Text area */}
    //         <div className="w-full md:w-2/3 border border-gray-300 rounded-lg p-6 flex items-center">
    //           <p className="text-gray-700 leading-relaxed">{section.description}</p>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="cards-stack">
  {sections.map((section, i) => (
    <div key={i} className="image-text-card">
      <h2 className="card-subheading">{section.title}</h2>

      <div className="image-and-text">
        <div className="image-panel">
          <img src={section.image} alt={section.title} />
        </div>

        <div className="text-panel">
          <p>{section.description}</p>
        </div>
      </div>
    </div>
  ))}
</div>

  );
}
