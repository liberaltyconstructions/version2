import { CardStack } from "../ui/card-stack.tsx";
import './ProjectSlider.css'

const ProjectSlider = () => {
  return (
    <div id='project' className="project-slider-container">
      <h1>Our <span className="g-text">Building Projects</span></h1>
      <p>Explore our building projects which are perfectly tailored <br /> for the client requirements, vastu, aesthetics and durability</p>
      <CardStackDemo />
    </div>
  );
};

export function CardStackDemo() {
  return (
    <div className="card-stack-container">
      <CardStack items={CARDS} />
    </div>
  );
}

const CARDS = [
  {
    id: 0,
    image: "Private/ElevationDesigns/ED_1_imresizer.png",
  },
  {
    id: 1,
    image: "Private/ElevationDesigns/ED_2_imresizer.png",
  },
  {
    id: 2,
    image: "Private/ElevationDesigns/ED_3_imresizer.png",
  },
  {
    id: 3,
    image: "Private/ElevationDesigns/ED_4_imresizer.png",
  },
  {
    id: 4,
    image: "Private/ElevationDesigns/ED_5_imresizer.png",
  },
  {
    id: 5,
    image: "Private/ElevationDesigns/ED_6_imresizer.png",
  },
  {
    id: 6,
    image: "Private/ElevationDesigns/ED_7_imresizer.png",
  },
  // Removed the extra comma that was causing undefined element
  {
    id: 7,
    image: "Private/ElevationDesigns/ED_8_imresizer.png",
  },
  {
    id: 8,
    image: "Private/InteriorDesigns/ID_1_imresizer.png",
  },
  {
    id: 9,
    image: "Private/InteriorDesigns/ID_9_imresizer.png",
  },
  {
    id: 10,
    image: "Private/ElevationDesigns/Picture3_imresizer.png",
  },
  {
    id: 11,
    image: "Private/ElevationDesigns/Picture4_imresizer.png",
  },
  {
    id: 12,
    image: "Private/ElevationDesigns/Picture5_imresizer.png",
  },
];

export default ProjectSlider;