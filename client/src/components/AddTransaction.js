import React from "react";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter} from "react-bootstrap";

function AddTransaction() {
    const [isShow,invokeModal]= React.useState(false)
    const initModal=()=>{
      return invokeModal(!isShow)
    }
    return(
      <div>
      <Button variant="primary" onClick={initModal}>
        Add Transcation
      </Button>
      <Modal show={isShow}>
        <ModalHeader closeButton onClick={initModal}>
          <ModalTitle>React Modal</ModalTitle>
        </ModalHeader>
        <ModalBody>
          Add your transaction here
        </ModalBody>
        <ModalFooter>
          <Button variant="danger" onClick={initModal}>
            Cancel
          </Button>
          <Button variant="success" onClick={initModal}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
}

export default AddTransaction;