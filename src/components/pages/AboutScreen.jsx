import { NavLink } from "react-router-dom";
import sidePic from "../../assets/Illustration.png";

const AboutScreen = () => {
  return (
    <div className='max-width'>
      <div className='container'>
        <div className='left-section'>
          <h1>
            We help you <span>crush</span> your competitions
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            esse illo quaerat soluta labore at sapiente perferendis doloremque
            nobis magnam quas neque iste corrupti necessitatibus, ipsam ex natus
            porro ducimus.
          </p>
          <NavLink to="/signup" className='btn'>see your service</NavLink>
        </div>
        <div className='right-section'>
          <img src={sidePic} alt='sidePic' />
        </div>
      </div>
    </div>
  );
}

export default AboutScreen
