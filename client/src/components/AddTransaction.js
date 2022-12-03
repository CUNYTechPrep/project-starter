import React from "react";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row} from "react-bootstrap";

function AddTransaction() {
    const [isShow,invokeModal]= React.useState(false)
    const initModal=()=>{
      return invokeModal(!isShow)
    }
    return(
      <div>
      <Button variant="primary" onClick={initModal}>
        Add Transaction
      </Button>
      <Modal show={isShow}>
        <ModalHeader closeButton onClick={initModal}>
          <ModalTitle>Enter Transaction Details</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup className="mb-3" controlId="formTransaction">
              <FormControl type="text" placeholder="Name"/>
            </FormGroup>
            <FormGroup className="mb-3" controlId="formAmount">
              <FormControl type="number" placeholder="Amount"/>
            </FormGroup>
            <Row>
            <FormGroup>
            <FormCheck
              type="checkbox"
              label="Recurrent"
            />
            </FormGroup>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={initModal}>
            Cancel
          </Button>
          <Button type="submit" variant="success" onClick={initModal}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
}

export default AddTransaction;