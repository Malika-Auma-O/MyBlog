import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Hero from "../images/Hero.mp4"
import HomeAbout from './HomeAbout';
import HomeFeatures from './HomeFeatures';
import '../index.css'
import Footer from './Footer';

function Home() {
  const navigate = useNavigate();

  const toBlogPosts = () => {
    navigate("/posts");
  }
    
  return (
    <div>
        <Card className=" bg-dark text-white border-0 rounded-0">
        <video autoPlay  muted>
        <source src={Hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Card.ImgOverlay>
        <Card.Title  className="display-6 customBoldText slide-in-fade-in-animation">My Coding Journey</Card.Title>
        <Card.Title  className='text-white display-1 customBolderText slide-in-fade-in-animation'  >
          Notes,
        </Card.Title>
        <Card.Title  className='text-white display-1 customBolderText slide-in-fade-in-animation'  >
          and Thoughts.
        </Card.Title>
        <Button
          onClick={toBlogPosts}
          className='slide-in-fade-in-animation  text-color' variant="light"
        >All Blog Posts</Button>
      </Card.ImgOverlay>
    </Card>
    <br></br>
    <HomeAbout/>
    <br></br>
    <HomeFeatures/>
    <Footer/>
    </div>
    
  );
}

export default Home;