import React, { useState }  from "react";
import {Modal, Button, ModalBody, ModalTitle, ModalHeader, ModalFooter} from "react-bootstrap";
import ErrorAlert from "./ErrorAlert";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faTimes} from '@fortawesome/free-solid-svg-icons'

function DeleteCategory({id}) {
    const [error, setError] = useState(false);
    const [isShow,invokeModal]= useState(false);

    const handleDelete = async (event) => {
      try {
        let response = await fetch(`/api/micro_posts/${id}`, {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          }
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

    if(error) return <ErrorAlert details={"Failed to delete the transaction, refresh browser"} />;

    return(
      <div>
      <FontAwesomeIcon
            icon={faTimes}
            onClick={()=>invokeModal(!isShow)}
            style={{"color":"red"}}
            type="button"
            />
      <Modal show={isShow}>
        <ModalHeader closeButton onClick={initModal}>
          <ModalTitle>Delete Confirmation</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <div>
            Are you sure you want to delete category?
          </div>
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={initModal}>
            Cancel
          </Button>
          <Button type="submit" variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
      </div>
    );
}

export default DeleteCategory;