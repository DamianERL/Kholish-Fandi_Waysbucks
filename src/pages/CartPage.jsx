import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import cartModules from "../styles/cart.module.css";

import cart_pitc from "../assets/cart_pt.png";
import ModalCart from "../components/modal/modalCart"
// image

import trash from "../assets/trash.svg";

export default function CartPage() {
  const [showTrans, setShowTrans]= useState(false);
  const handleShow = () => setShowTrans(true);
  const handleClose = () => setShowTrans(false);

  return (
    <div>
      <section>
        <div className={cartModules.container}>
          <p>My Cart</p>
          <p>Review Your Order</p>
          <div className={cartModules.wrap}>
            {/*  */}
            <div className={cartModules.left}>
              {/* <div className={cartModules.warpProduct}>
                <span>
                  <img src={cart_pitc} />
                </span>
                <div className={cartModules.con_wrap}>
                  <span className={cartModules.tex_left}>
                    <p>Ice Cofee Palm Sugar</p>
                    <p>Rp33.000</p>
                  </span>
                  <span className={cartModules.tex_left1}>
                    <p>
                      Toping : <span> Bill Berry Boba,Buble Tea Gelatin</span>
                    </p>
                    <img src={trash} />
                  </span>
                </div>
              </div> */}
            </div>

            <div className={cartModules.right}>
              <div className={cartModules.rightline}>
                <span>
                  <p>Subtotal</p>
                  <p>Rp.69.000</p>
                </span>
                <span>
                  <p>Qty</p>
                  <p>2</p>
                </span>
              </div>
              <span className={cartModules.price}>
                <p>Total</p>
                <p>Rp.69.000</p>
              </span>
              <div className={cartModules.btn_grp}>
                <button onClick={handleShow} >Pay</button>
              </div>
            </div>
          </div>
        </div>
        <ModalCart showTrans={showTrans} close={handleClose}/>
      </section>
      
    </div>
  );
}
