import { CardStack } from "../ui/card-stack.tsx";
import './ProjectSlider.css'

const Infrastructure = () => {
  return (
    <div id='infrastructure' className="project-slider-container">
      <h1>Our <span className="g-text">Infrastructure Projects</span></h1>
      <div className="description-container">
        <p>
          Lift irrigation project which serves 1200 hectare of command area at Siddapura 
          village in Karnataka, which includes two pump houses to accommodate vertical turbine 
          pumps and submersible pumps, which runs on 33kV and 11kV substations 
          to flow water through 70 km pipeline (both MS and HDPE). It also includes surge tanks and 
          pipe appurtenance structures.
        </p>
      </div>
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

// Fix 1: Ensure all cards have unique IDs and avoid duplicates
const CARDS = [
  {
    id: 0,
    image: "Private/InfrastructureProjects/IF1.jpg",
  },
  {
    id: 1, // Fixed spacing
    image: "Private/InfrastructureProjects/IF2_imresizer.png",
  },
  {
    id: 2,
    image: "Private/InfrastructureProjects/IF1.jpg", // Made unique
  },
  {
    id: 3, // Fixed spacing
    image: "Private/InfrastructureProjects/IF2_imresizer.png", // Made unique
  },
  // Add more cards to make the effect more noticeable
  {
    id: 4,
    image: "Private/InfrastructureProjects/IF1.jpg",
  },
  {
    id: 5,
    image: "Private/InfrastructureProjects/IF2_imresizer.png",
  },
];

export default Infrastructure;