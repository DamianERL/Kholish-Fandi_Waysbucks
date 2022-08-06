import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Modal } from "react-bootstrap";
import { UserContext } from "../../context/UserContext";

export default function ModalAuth() {
  // modal-check
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [shows, setShows] = useState(false);
  const handleShows = () => setShows(true);
  const handleCloses = () => setShows(false);

  const handleSwitchRegister = () => {
    setShow(false);
    setShows(true);
  };

  const handleSwitchLogin = () => {
    setShows(false);
    setShow(true);
  };
  // /modal-check

  // functional
  const [login, setLogin] = useState({});

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  //  /fuctuional

  // auth
  const navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let status;
    if (email === "admin@mail.com") {
      status = "admin";
      navigate("/transaction");
    } else {
      status = "customer";
      navigate("/");
    }

    const data = {
      email,
      password,
      status,
    };

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data,
    });
    setShow(false);
  };

  //  /auth
  return (
    <>
      <>
        <button className="btnNavbar login" onClick={handleShow}>
          Login
        </button>
        <Modal show={show} onHide={handleClose}>
          <form onSubmit={handleSubmit}>
            <div className="authContainer">
              <h1 className="authTitle">Login</h1>
              <input
                type="email"
                className="inputAuth p-2"
                placeholder="Email"
                name="email"
                id="email"
                onChange={handleChange}
              />
              <input
                type="password"
                className="inputAuth p-2"
                placeholder="Password"
                name="password"
                id="password"
                onChange={handleChange}
              />
              <button type="submit" className="btnAuth">
                Login
              </button>
              <p className="toRegist">
                Don't have an account ? Click{" "}
                <strong onClick={handleSwitchRegister}>Here</strong>
              </p>
            </div>
          </form>
        </Modal>
      </>

      <>
        <button className="btnNavbar register" onClick={handleShows}>
          Register
        </button>
        <Modal show={shows} onHide={handleCloses} id="modalRegister">
          <form>
            <div className="authContainer">
              <h1 className="authTitle">Register</h1>
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Password"
              />
              <input
                type="text"
                className="inputAuth p-2"
                placeholder="Full Name"
              />
              <button className="btnAuth">Register</button>
              <p className="toRegist">
                Already have an account ? Click{" "}
                <strong onClick={handleSwitchLogin}>Here</strong>
              </p>
            </div>
          </form>
        </Modal>
      </>
    </>
  );
}
