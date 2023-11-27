import React, { useState } from "react";

import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { setSeletedItem } from "../store/gallerySlice";

const ItemDetails = ({ item  } ) => {

  const dispatch = useDispatch()
  const handleCloseModal = () => {
  dispatch(setSeletedItem(null))
  };

  return (
    <div>
      <Modal show = "true" onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Item Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>id:</strong> {item.id}
          </p>
          <p>
            <strong>type:</strong> {item.type}
          </p>
          <p>
            <strong>tags:</strong> {item.tags}
          </p>
          <p>
            <strong>views:</strong> {item.views}
          </p>
          <p>
            <strong>downloads:</strong> {item.downloads}
          </p>
          <p>
            <strong>collections:</strong> {item.collections}
          </p>
          <p>
            <strong>likes:</strong> {item.likes}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ItemDetails;
