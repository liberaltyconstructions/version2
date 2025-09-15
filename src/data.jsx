import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { profile2, profile3,profile4,profile5} from "./assets";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'project'},
    {name:"Testimonial",id:'testimonial'},
    {name:"Clients",id:'ourclients'},
];

// export const teams = [
//   {
//     name:"Javvaji Reddi Prakash",
//     title:"B.Tech (C.E)",
//     profile:member1
//   },
//   {
//     name:"Vivek D R",
//     title:" M.Tech (Structural Engineering)",
//     profile:member2
//   },
//   {
//     name:"Uday Kumar N ",
//     title:"M.Tech (Structural Engineering)",
//     profile:member3
//   },
//   {
//     name:"Praveen K M S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Mantesh E S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Praveen K M S",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Sachidananda K",
//     title:"MBA (Construction Management), B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Sushmitha J N",
//     title:"B.E (C.E)",
//     profile:member4
//   },
//   {
//     name:"Swathi B U",
//     title:"B.E (C.E)",
//     profile:member4
//   },
  
// ]

// export const projects = [
//   {
//     title:"Residential Development Project",
//     image:building_5,
//     description:`A comprehensive residential development involving the construction of a new 
//         housing community from initial site clearing and preparation to final home construction and landscaping`,
//   },
//   {
//     title:"Commercial Office Building",
//     image:building_6,
//     description:`The construction of a multi-story office building including all 
//        architectural and structural design, coordination of specialized trades for 
//        HVAC and electrical systems, and complete project oversight.`,
//   },
//   {
//     title:"Retail Space Renovation",
//     image:building_7,
//     description:`Transforming an outdated retail store into a modern commercial space, 
//     involving interior demolition, new layout design, installation of new fixtures, 
//     and updating utilities.`,
//   },
//   {
//     title:"Industrial Warehouse Construction",
//     image:building_8,
//     description:`Building a large-scale industrial warehouse, including land clearing,
//      foundation work, steel structure erection, and complete construction management 
//      from start to finish.`,
//   },
//   {
//     title:"Historic Building Restoration",
//     image:building_9,
//     description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
//     craftsmanship and specialized restoration techniques.`,
//   },
//   {
//     title:"Educational Facility Expansion",
//     image:building_10,
//     description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
//     final project management to ensure timely completion.`,
//   },
// ];


export const testimonial = [
  {
    image: profile2,
    name: 'Vhomes',
    review: `Liberalty Constructions delivered exceptional service for our apartment project. Their team showed professionalism, expertise, and attention to detail from design to completion. They brought our vision to life with precision, communicated excellently, and exceeded expectations. We highly recommend Liberalty Constructions for civil engineering consultancy and look forward to future collaborations.`
  },
  {
    image: profile3,
    name: 'Suresh',
    review: `The team at Liberalty Constructions stands out for their precision and reliability. Their structural assessments and planning documents are comprehensive and clearly presented, which made coordination with contractors and other stakeholders much easier. They truly understand the practical challenges of construction and provide smart solutions.`
  },
  {
    image: profile4,
    name: 'Venumadhav',
    review: `The team at Liberalty Constructions is careful and dependable. Their reports and plans are clear and complete, which made working with contractors easier. They know the challenges of building and give good advice to solve problems.`
  },
  {
    image: profile5,
    name: 'Vishnuvardan',
    review: `I really enjoyed working with Liberalty Constructions Pvt Ltd. Their designs are strong, practical, and easy to understand. They carefully look at every detail and turn ideas into safe and useful structures. I highly suggest them for planning and design work.`
  },
  {
    image: "",
    name: 'Vivek M',
    review: `We hired Liberalty Constructions for our housing project, and they did a great job. They are professional, always kept us updated, and made sure everything went smoothly. Their knowledge gave us confidence during the whole process.`
  },
  {
    image: "",
    name: 'Chandrappa K C',
    review: `I approached Liberalty Constructions for designing the structure of my new home, and I couldn’t be happier with the outcome. They patiently understood my needs and provided thoughtful suggestions that optimized space and safety. Their team was approachable, knowledgeable, and always available for support. I’m grateful for their outstanding service.`
  }
];


export const contacts = [
  {
    name:"Email",
    value:"liberaltyconstructions@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+91 98857 56274 ||+91 70266 60443 ",
    icon:<IoCallOutline/>,
  },
  {
    name:"Address",
    value:"#60, 5th b cross, Chowdeshawri Nagar, Laggere, Bangalore - 560058",
    icon:<IoLocationOutline/>,
  },
]


export const footer = [
    {
      name:"Explore",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
        name:"Section",
        routes:[
          {name:"Home",id:'header'},
          {name:"About Us",id:'about'},
          {name:"Services",id:'services'},
          {name:"Team",id:'team'},
          {name:"Project",id:'project'},
          {name:"Testimonial",id:'testimonial'},
          {name:"Blog",id:'blog'},
        ]
      },
]

export const planData = {
  private: {
    title: "Building Projects",
    features: [
      "Floor plans and Approvals",
      "Elevation Designs",
      "Interior Designs & Execution",
      "Structural Designs",
      "Layout Plans",
      "All kinds of 2D & 3D Drawings",
      "Project Management & Support",
      "Estimation & Costing",
      "Material Contracts",
      "Labour Contracts"
    ]
  },
  government: {
    title: "Irrigation Projects",
    features: [
      "Lift Irrigation Projects",
      "Tank Filling Projects",
      "Water Supply Projects",
      "Bridges and Barrages Projects",
      "And all similar Major and Minor Irrigation Projects",
      "Roads and Highways"

    ]
  }
};
