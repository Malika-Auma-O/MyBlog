import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

function PortfolioModal(props) {
  const { show, onHide, selectedProject } = props;

  const redirectToWebsite = () => {
    // Check if the selected project has a website URL
    if (selectedProject && selectedProject.website) {
      // Open the website URL in a new tab
      window.open(selectedProject.website, '_blank');
    } else {
      alert('Website URL not available for the selected project');
    }
  };

  const redirectGithub = () => {
    // Check if the selected project has a github URL
    if (selectedProject && selectedProject.github) {
      // Open the github URL in a new tab
      window.open(selectedProject.github, '_blank');
    } else {
      alert('github URL not available for the selected project');
    }
  };
 

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Carousel slide={false} >
          {selectedProject && selectedProject.images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fluid
                className=' custom-carousel-image'
                style={{ maxHeight: '400px', width: 'auto' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        <Modal.Header closeButton>
          <div>
            <Modal.Title className='underline text-color2 ' id="contained-modal-title-vcenter">
              {selectedProject && selectedProject.category}
            </Modal.Title>
           
          </div>
        </Modal.Header>

        <Modal.Body>
          <h1 className='m-2'>{selectedProject && selectedProject.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: selectedProject && selectedProject.content }} />
              <h6 className='text-color2 my-3'><span className='text-dark fw-bold'>Technologies: <br/><br/></span>{selectedProject && selectedProject.technologies}</h6>
      
        </Modal.Body>

        <Modal.Footer >
          {/* me auto adds space between div and close button */}
          <div className='me-auto'>  
            <Button className='me-2 bg-color' onClick={redirectGithub}>Go to github</Button>
            <Button className='me-2 bg-color' onClick={redirectToWebsite}>View the site</Button>
          </div>
          <Button className=' bg-color'  onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PortfolioModal;
