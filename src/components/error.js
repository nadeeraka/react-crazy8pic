import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const E_modal = props => (
  <div>
    <Modal
      isOpen={props.error}
      modalTransition={{ timeout: 700 }}
      backdropTransition={{ timeout: 1300 }}
    >
      <ModalHeader toggle={props.onToggle}>Error </ModalHeader>
      <ModalBody>
        <h4>Please type word or term in oder to search</h4>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={props.onToggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  </div>
);

export default E_modal;
