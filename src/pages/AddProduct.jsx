import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Coffee from "../assets/coffee.jpg";
import paperClip from "../assets/paperClip.png";

export default function AddProduct() {
  const [product, setProduct] = useState({});
  const [preview, setPreview] = useState(null);
  const [previewName, setPreviewName] = useState("");

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });

    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
      setPreviewName(e.target.files[0].name);
    }
  };

  const handleSubmit = (e) => {
    e.prevent.default();
  };
  return (
    <Container className="addProductContainer">
      <div className="addProductLeft">
        <form>
          <h1>Product</h1>
          <input
            type="text"
            placeholder="Name Product"
            name="product"
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Price"
            className="price"
            name="price"
            onChange={handleChange}
          />
          <input
            type="file"
            id="addProductImage"
            hidden
            className="photoProduct"
            name="productImg"
            onChange={handleChange}
          />
          <label
            htmlFor="addProductImage"
            className={previewName === "" ? "addProductImage" : "previewName"}
          >
            {previewName === "" ? "Photo Product" : previewName}
            <img src={paperClip} alt="paperClip" />
          </label>
          <button>Add Product</button>
        </form>
      </div>
      {preview && (
        <div className="addProductRight">
          <img src={preview} alt="preview" />
        </div>
      )}
    </Container>
  );
}
