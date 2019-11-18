import React, { Component } from 'react';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';

import '../css/dashboard-style.css';
import '../css/style.css';
import Tsundere_Meme from '../images/Tsundere-Meme.png';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'






export default class DashboardPage extends Component {
    constructor(props) {
        super(props);

        this.LogOutModal = this.LogOutModal.bind(this);

        this.state = { 
            email: '', 
            password: '' 
        };
         
    }
  


    LogOutModal() {
        const [show, setShow] = React.useState(false);
      
        const handleClose = () => React.setShow(false);
        const handleShow = () => React.setShow(true);
      
        return (
          <div>
            <Button variant="primary" onClick={handleShow}>
              Launch demo modal
            </Button>
      
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        );
      }



    render() {
      return (
            <div>
                <SideBar/>          {/* This is the side bar navbar */}
                <TopBar/>           {/* This is the top bar navbar */}
                <div className="mt-auto ml-auto ">
                    <this.LogOutModal />
                </div>
            </div>
        );
    }
}


