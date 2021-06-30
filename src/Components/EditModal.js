import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, InputGroup, FormControl } from "react-bootstrap";

const EditModal = (props) => {
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
        Edit
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
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">Name</InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              onChange={(event) => {
                props.setNewName(event.target.value);
              }}
            />
          </InputGroup>
          <br />
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              Quantity
            </InputGroup.Text>
            <FormControl
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="text"
              onChange={(event) => {
                props.setNewQuantity(event.target.value);
              }}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideModal} className="btn btn-primary">
            Close
          </Button>
          <button
            className="btn btn-success"
            onClick={() => {
              props.editItem(props.id);
            }}
          >
            Save
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditModal;
