import React, { useState }  from "react";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, Form, ModalFooter, FormCheck, FormGroup, FormControl, Row, Col} from "react-bootstrap";
import ErrorAlert from "../components/ErrorAlert";

function AddTransaction() {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const [isShow,invokeModal]= useState(false);
    
    const handleContentChange = (event) => {
      setContent(event.target.value);
    };

    const handleSubmit = async (event) => {
      try {
        let response = await fetch("/api/micro_posts", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: content,
          }),
        });
  
        if (response.ok) {
          invokeModal(false);
          window.location.reload(false);

        } else {
          setError(true);
        }
      } catch (error) {
        console.error("Server error while creating a new micro post", error);
        setError(true);
      }

    };
  
  
    const initModal=()=>{
      return invokeModal(!isShow)
    }

    if(error) return <ErrorAlert details={"Failed to save the transaction, refresh browser"} />;

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
              <FormControl type="text" placeholder="Name" value={content} onChange={handleContentChange}/>
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
          <Button type="submit" variant="success" onClick={handleSubmit}>
            Confirm
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
}

export default AddTransaction;