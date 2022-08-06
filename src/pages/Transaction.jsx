import React, { useState } from "react";
import { Container, Table } from "react-bootstrap";
import ModalTransaction from "../components/modal/ModalTransaction";

// fakeData
import dummyTransaction from "../DataDummy/dummyTransaction";

export default function Transaction() {
  const [showTrans, setShowTrans] = useState(false);
  const handleShow = () => setShowTrans(true);
  const handleClose = () => setShowTrans(false);

  return (
    <Container className="tableContainer">
      <h1>Income Transaction</h1>
      <div>
        <Table hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Post Code</th>
              <th>Income</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {dummyTransaction?.map((item, index) => (
              <tr onClick={handleShow} key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.address}</td>
                <td>{item.postCode}</td>
                <td className="tablePrice">{item.income}</td>
                <td
                  className={
                    item.status === "Success"
                      ? "tableSuccess"
                      : item.status === "Cancel"
                      ? "tableCancel"
                      : item.status === "Waiting Approve"
                      ? "tableWaiting"
                      : "tableOtw"
                  }
                >
                  {item.status}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <ModalTransaction showTrans={showTrans} close={handleClose} />
    </Container>
  );
}
