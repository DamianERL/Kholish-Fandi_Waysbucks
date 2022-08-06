import productModules from "../styles/product.module.css";
import checked from "../styles/checked.module.css"
// main image
import PitcCofee from "../assets/cofee.png";
// topping
import Topping1 from "../assets/TP1-buble-tea-gelatin.png";
import Topping2 from "../assets/TP2-manggo.png";
import Topping3 from "../assets/TP3-green-coconut.png";
import Topping4 from "../assets/TP4-boba-manggo.png";
import Topping5 from "../assets/TP5-bill-berry-boba.png";
import Topping6 from "../assets/TP6-kiwi-popping-pearl.png";
import Topping7 from "../assets/TP7-matcha-cantaloupe.png";
import Topping8 from "../assets/TP8-strawbery-popping.png";

export default function DetailProductPage() {
  return (
    <div>
      <section>
        <div className={productModules.wrap}>
          <div className={productModules.left}>
            <img src={PitcCofee} alt="oke" />
          </div>
          <div className={productModules.right}>
            <span className={productModules.name}>
              <p className={productModules.titleProduct}>
                Ice Cofee Palm Sugar
              </p>
              <p className={productModules.priceBrown}>Rp.27.000</p>
            </span>
            <div className={productModules.text_top}>
              <p>Toping</p>
              <div className={productModules.topings}>
                
                <div className={productModules.toping}>
                  {/*  */}
                  <label className={checked.con}>
                <input className={checked.tes} type="checkbox" />
                <span className={checked.check}></span>
                  <img src={Topping1} alt="1" />
                  <p>Bubble Tea Gelatin</p>
                  </label>
                </div>
                {/*  */}
                <div className={productModules.toping}>
                  <img src={Topping2} alt="2" />
                  <p>Manggo</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping3} alt="3" />
                  <p>Green Coconut</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping4} alt="4" />
                  <p>Boba Manggo</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping5} alt="5" />
                  <p>Bill Berry Boba</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping6} alt="6" />
                  <p>Kiwi Popping Pearl</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping7} alt="7" />
                  <p>Matcha Cataloupe</p>
                </div>
                <div className={productModules.toping}>
                  <img src={Topping8} alt="8" />
                  <p>Strawberry Popping</p>
                </div>
              </div>
            </div>
            <div className={productModules.price}>
              <p>Total</p>
              <p>Rp.27.000</p>
            </div>
            <div className={productModules.btn_grp}>
              <button className={productModules.btn}> Add Cart</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
