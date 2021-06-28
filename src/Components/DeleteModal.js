import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

const DeleteModal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = () => {
    setIsOpen(true);
  };
  const hideModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button className="btn btn-dark" onClick={showModal}>
        Remove
      </button>
      <Modal
        show={isOpen}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        animation={false}
        centered
        onHide={hideModal}
      >
        <Modal.Body>
          <p>Are you sure to remove it?</p>
          <p></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal} className="btn btn-primary">
            No
          </Button>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.deleteItem(props.id);
            }}
          >
            Yes
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteModal;
