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
 

  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Carousel slide={false}>
          {selectedProject && selectedProject.images.map((image, index) => (
            <Carousel.Item key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fluid
                className=' custom-carousel-image'
              />
              {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          ))}
        </Carousel>

        <Modal.Header closeButton>
          <div>
            <Modal.Title className='underline text-color' id="contained-modal-title-vcenter">
              {selectedProject && selectedProject.category}
            </Modal.Title>
           
          </div>
        </Modal.Header>

        <Modal.Body>
          <h4 className='m-2'>{selectedProject && selectedProject.title}</h4>
          <p dangerouslySetInnerHTML={{ __html: selectedProject && selectedProject.content }} />
              <h5 className='text-color my-3'><span className='text-dark'>Technologies: </span>{selectedProject && selectedProject.technologies}</h5>
      
        </Modal.Body>

        <Modal.Footer>
          <Button className='me-2' onClick={redirectToWebsite}>View the site</Button>
          <Button onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default PortfolioModal;
