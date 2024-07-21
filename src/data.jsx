import { IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaYoutube,FaInstagram,FaDrawPolygon } from "react-icons/fa";
import { CiLinkedin ,CiFacebook} from "react-icons/ci";
import { SiBlueprint,SiHomeassistantcommunitystore  } from "react-icons/si";
import { AiOutlineFileProtect } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { GrUserManager } from "react-icons/gr";
import { profile2, profile3,profile4,profile5,
        member1, member2, member3, member4,building_5,building_6,
        building_7, building_8,building_9,building_10,
        blog_1,blog_2,blog_3} from "./assets";
import {TiThMenu} from "react-icons/ti";

export const navTabs = [
    {name:"Home",id:'header'},
    {name:"About Us",id:'about'},
    {name:"Services",id:'services'},
    {name:"Projects",id:'project'},
    {name:"Testimonial",id:'testimonial'},
];

export const services = [
  {
    name:"General Contracting",
    icon:<SiBlueprint/>,
    description:`This involves overseeing the entire construction project from start to finish, 
        including hiring subcontractors, managing the budget, scheduling, and ensuring that the
        project meets all specifications and regulations.`,
  },
  {
    name:"Design-Build Services",
    icon:<FaDrawPolygon/>,
    description:`This service combines both the design and construction phases into a single 
      contract, streamlining the process and improving communication between the design and
        construction teams.

    `,
  },
  {
    name:"Project Management",
    icon:<GrUserManager/>,
    description:`Construction companies often provide project management services, which include 
       planning, coordinating, and overseeing projects to ensure they are completed on time, within 
       budget, and to the required quality standards.`,
  },
  {
    name:"Renovation and Remodeling",
    icon:<SiHomeassistantcommunitystore/>,
    description:`Many construction companies specialize in renovation and remodeling services, 
                which involve updating and improving existing structures. This can range from minor 
                repairs to major overhauls of residential, commercial, or industrial properties.`,
  },
  {
    name:"Site Preparation",
    icon:<AiOutlineFileProtect/>,
    description:`Before construction begins, companies often handle site preparation tasks such 
    as land clearing, excavation, grading, and utility installation to ensure the site is ready 
    for building.`,
  },
  {
    name:"Specialty Construction Services",
    icon:<IoConstructSharp/>,
    description:`This can include services like roofing, concrete work, steel erection, plumbing, 
    electrical work, and other specialized trades necessary for specific aspects of the construction project.`,
  },
]

export const teams = [
  {
    name:"Javvaji Reddi Prakash",
    title:"B.Tech (C.E)",
    profile:member1
  },
  {
    name:"Vivek D R",
    title:" M.Tech (Structural Engineering)",
    profile:member2
  },
  {
    name:"Uday Kumar N ",
    title:"M.Tech (Structural Engineering)",
    profile:member3
  },
  {
    name:"Praveen K M S",
    title:"B.E (C.E)",
    profile:member4
  },
  {
    name:"Mantesh E S",
    title:"B.E (C.E)",
    profile:member4
  },
  {
    name:"Praveen K M S",
    title:"B.E (C.E)",
    profile:member4
  },
  {
    name:"Sachidananda K",
    title:"MBA (Construction Management), B.E (C.E)",
    profile:member4
  },
  {
    name:"Sushmitha J N",
    title:"B.E (C.E)",
    profile:member4
  },
  {
    name:"Swathi B U",
    title:"B.E (C.E)",
    profile:member4
  },
  
]

export const projects = [
  {
    title:"Residential Development Project",
    image:building_5,
    description:`A comprehensive residential development involving the construction of a new 
        housing community from initial site clearing and preparation to final home construction and landscaping`,
  },
  {
    title:"Commercial Office Building",
    image:building_6,
    description:`The construction of a multi-story office building including all 
       architectural and structural design, coordination of specialized trades for 
       HVAC and electrical systems, and complete project oversight.`,
  },
  {
    title:"Retail Space Renovation",
    image:building_7,
    description:`Transforming an outdated retail store into a modern commercial space, 
    involving interior demolition, new layout design, installation of new fixtures, 
    and updating utilities.`,
  },
  {
    title:"Industrial Warehouse Construction",
    image:building_8,
    description:`Building a large-scale industrial warehouse, including land clearing,
     foundation work, steel structure erection, and complete construction management 
     from start to finish.`,
  },
  {
    title:"Historic Building Restoration",
    image:building_9,
    description:`Restoring and renovating a historic building to preserve its architectural integrity while updating it to meet modern standards, involving meticulous 
    craftsmanship and specialized restoration techniques.`,
  },
  {
    title:"Educational Facility Expansion",
    image:building_10,
    description:`Expanding an existing school with new classrooms and facilities, encompassing all phases from initial design and site preparation to construction and 
    final project management to ensure timely completion.`,
  },
];


export const testimonial = [
  {
    image:profile2,
    name:'Vhomes',
    review:` Liberalty Constructions delivered exceptional service for our apartment project. Their team showed professionalism, expertise, and attention to detail from design to completion. They brought our vision to life with precision, communicated excellently, and exceeded expectations. We highly recommend Liberalty Constructions for civil engineering consultancy and look forward to future collaborations.`
  },
  {
    image:profile3,
    name:'Suresh',
    review:`Liberalty Constructions has been an invaluable partner in our projects. Their skilled team consistently delivers top-notch designs, precise calculations, and timely solutions. They excel in problem-solving and meeting high standards. Their professionalism, reliability, and responsive communication have earned our trust. We confidently recommend Liberalty Constructions for civil engineering consultancy and look forward to continued collaboration on future projects.`
  },
  {
    image:profile4,
    name:'Venumadhav ',
    review:`We have had the pleasure of working with LIBERALTY CONSTRUCTIONS on several projects, and their expertise in interior design has been invaluable. Their team's attention to detail, creativity, and ability to understand our vision has resulted in truly exceptional spaces. Their collaboration with our team has been seamless, and their contributions have elevated our projects to the next level. We highly recommend LIBERALTY CONSTRUCTIONS for any interior design needs - they are a true partner in the building process`
  },
];


export const contacts = [
  {
    name:"Email",
    value:"liberaltyconstructions@gmail.com",
    icon:<MdOutlineAlternateEmail />,
  },
  {
    name:"Phone Number",
    value:"+91 9885756274 || +91 9071153319 ",
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
