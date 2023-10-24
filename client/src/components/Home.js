import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Hero from "../images/blogHero1.avif"
import HomeAbout from './HomeAbout';
import HomeFeatures from './HomeFeatures';
import '../index.css'
import Footer from './Footer';

function Home() {

    
  return (
    <div>
        <Card className=" bg-dark text-white border-0 rounded-0">
      <Card.Img src={Hero} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title  className="display-6 customBoldText">My Coding Journey</Card.Title>
        <Card.Title  className='text-white display-1 customBolderText'  >
          Helpful Notes and Thoughts, Learning Coding.
        </Card.Title>
        <Button  variant="success">All Blog Posts</Button>
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