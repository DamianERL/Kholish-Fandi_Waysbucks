import React from "react";
import { Modal } from "react-bootstrap";
import swal from 'sweetalert';
import cssModule from "../../styles/modalCart.module.css";

export default function ModalCart({ showTrans, close }) {
  return (
    <Modal className={cssModule.bg_text} show={showTrans} onHide={close}>
      <div className={cssModule.textName}>
        <p>Thank you for order <br /> please wait to verify your order</p>
      </div>
      {/* {swal("Good job!", "You clicked the button!", "success")}; */}
    </Modal>
  );
}

