import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import fofo from "../images/nots.png"
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  const toHome = () => {
    navigate("/");
  };
    
  return (
    <div className="position-relative">
      <Image src={fofo} fluid />
      <div className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-danger ">
        <div>
        
        <Button 
        onClick={toHome}
         className='bg-color'>Go Home</Button>
        </div>
        
      </div>
      
    </div>
  ) 
}

export default NotFound;