import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import fofo from "../images/blog404.avif"
// import Footer from './Footer';

function NotFound() {
  return (
    <div className="position-relative">
      <Image src={fofo} fluid />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-warning ">
        <div>
        <br></br><br></br>
        <h1 className='display-1 customBoldText'>Page not found</h1>
        
        <Button  variant="success">Go Home</Button>
        </div>
        
      </div>
      
    </div>
  ) 
}

export default NotFound;