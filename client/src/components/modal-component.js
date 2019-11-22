import React from 'react';
import Tsundere_Meme from '../images/Tsundere-Meme.png';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import { func } from 'prop-types';



function LogOutModal(props) {
    return (
        <div>
            <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
      
    );
  }

  function HandleSignOutModal() {
        const [modalshow, setModalShow] = React.useState(false);
        
        

        return (
            <div>
                <ButtonToolbar>
                    <Button variant="primary" onClick={() => setModalShow(true)}>
                    Launch vertically centered modal
                    </Button>
            
                    <LogOutModal
                    show={modalshow}
                    onHide={() => setModalShow(false)}
                    />
                </ButtonToolbar>
            </div>
        );  
  }

  export default HandleSignOutModal;