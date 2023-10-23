import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Hero from "../images/blogHero1.avif"

function Home() {

    const customBolderText = {
        fontWeight: '800', 
      };

    const customBoldText = {
        fontWeight: '600', 
      };
  return (
    <div>
        <Card className="bg-dark text-white border-0 rounded-0">
      <Card.Img src={Hero} alt="Card image" />
      <Card.ImgOverlay className='pt-5 mt-5 '>
        <Card.Title style={customBoldText} className="display-6 pt-5 mt-5">My Coding Journey</Card.Title>
        <Card.Title  className='text-white display-2 pt-5 mt-5' style={customBolderText} >
          Helpful Notes and Thoughts as I Learn Coding.
        </Card.Title>
        <Button className='mt-4' variant="success">All Blogs</Button>
      </Card.ImgOverlay>
    </Card>
    </div>
    
  );
}

export default Home;