import { Button, Modal } from "react-bootstrap";

function ModalBox({ children, showModal, handleClose, handleAction, title }) {
  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAction}>
          Download
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalBox;
