import { NavLink } from 'react-router-dom';
import { Button } from '../styles/Button';
import WrapperHero from '../styles/WrapperHero'
import icon from '../assets/home.svg'

const Home = () => {
  return (
    <WrapperHero>
      <div className='container grid grid-two-column'>
        <div className='section-hero-data'>
          <p className='hero-top-data'>THIS IS ME</p>
          <h1 className='hero-heading'>Adarsh Verma</h1>
          <p className='hero-para'>
            I am Adarsh Verma. A Front-End Developer and Freelancer. A Front-End
            Developer and freelancer 
          </p>
          <Button className='btn hireme-btn'>
            <NavLink to='/contact'> hire me </NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className='section-hero-image'>
            <img src={icon} alt='hero image' className='hero-img ' />
        </div>
      </div>
    </WrapperHero>
  );
};

export default Home;
