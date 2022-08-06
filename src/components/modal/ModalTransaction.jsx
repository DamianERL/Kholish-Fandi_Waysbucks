import React from "react";
import { Modal } from "react-bootstrap";
import QRCode from "react-qr-code";
import Logo from "../../assets/Group.svg";
import Coffee from "../../assets/coffee.jpg";

import dummyTransaction from "../../DataDummy/dummyTransaction";

export default function ModalTransaction({ showTrans, close, product }) {
  return (
    <Modal show={showTrans} onHide={close} className="modal-transaction">
      <div className="profileCard">
        <div className="contentCardLeft">
          {product?.map((item, index) => (
            <div className="mapContent">
              <img src={item.productImg} alt="coffee" />
              <ul>
                <li className="profileCardTitle">{item.productName}</li>
                <li className="profileCardDate">
                  <strong>Saturday</strong>,20 Oktober 2022
                </li>
                <li className="profileCardToping">
                  <strong>Toping :</strong>
                </li>
                <li className="profileCardPrice">Price: {item.price}</li>
              </ul>
            </div>
          ))}
        </div>
        <div className="contentCardRight">
          <img src={Logo} alt="logo" />
          <QRCode value="test" bgColor="transparent" size={80} />
          <span>
            <p>On The Way</p>
          </span>
          <p className="profileSubTotal">Sub Total : Rp.69.000</p>
        </div>
      </div>
    </Modal>
  );
}
