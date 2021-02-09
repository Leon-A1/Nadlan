import React, { useState } from "react";
import axios from "axios";
import "../Assets/css/views/admin-view.css";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

export default function AdminCreateView() {
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [file3, setFile3] = useState("");
  const [file4, setFile4] = useState("");
  const [file5, setFile5] = useState("");

  const [message, setMessage] = useState("");
  // const [fileSourceLink, setFileSourceLink] = useState("");
  // const [fileSourceLink2, setFileSourceLink2] = useState("");
  // const [fileSourceLink3, setFileSourceLink3] = useState("");
  // const [fileSourceLink4, setFileSourceLink4] = useState("");
  // const [fileSourceLink5, setFileSourceLink5] = useState("");

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  // const [productCategory, setProductCategory] = useState("");

  // const [newProductId, setNewProductId] = useState("");

  const onChange = (e) => {
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage1");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile(newFile);
  };
  const onChange2 = (e) => {
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage2");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile2(newFile);
  };
  const onChange3 = (e) => {
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage3");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile3(newFile);
  };
  const onChange4 = (e) => {
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage4");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile4(newFile);
  };
  const onChange5 = (e) => {
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage5");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile5(newFile);
  };

  const productNameOnChange = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };

  const productDescriptionOnChange = (e) => {
    e.preventDefault();
    setProductDescription(e.target.value);
  };

  const productPriceOnChange = (e) => {
    e.preventDefault();
    setProductPrice(e.target.value);
  };

  // const productCategoryOnChange = (e) => {
  //   console.log("e target value:", e.target.value);
  //   setProductCategory(e.target.value);
  //   console.log(productCategory);
  // };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_image", file);
    if (file2) {
      formData.append("product_image2", file2);
    }
    if (file3) {
      formData.append("product_image3", file3);
    }
    if (file4) {
      formData.append("product_image4", file4);
    }
    if (file5) {
      formData.append("product_image5", file5);
    }

    formData.append("product_name", productName);
    formData.append("product_description", productDescription);
    formData.append("product_price", productPrice);
    // formData.append("product_category", productCategory);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/create_product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // setFileSourceLink("http://localhost:5000" + res.data.image_link);
      // setFileSourceLink2("http://localhost:5000" + res.data.image_link2);
      // setFileSourceLink3("http://localhost:5000" + res.data.image_link3);
      // setFileSourceLink4("http://localhost:5000" + res.data.image_link4);
      // setFileSourceLink5("http://localhost:5000" + res.data.image_link5);
      // setNewProductId(res.data.product_id);
      console.log(res);

      setMessage("File Uploaded");
      window.location.href = "http://127.0.0.1:3000/admin";
    } catch (err) {
      if (err.response.status === 400) {
        setMessage(err.response.data.message);
      } else {
        setMessage(err.response.data.message);
      }
    }
  };

  return (
    <div className="admin-view-container">
      <Sidebar />

      <form
        method="POST"
        action="/create"
        encType="multipart/form-data"
        onSubmit={onSubmit}
        className="create-product-form"
      >
        <h1>הוספת נכס חדש</h1>
        <br></br>
        <br></br>
        <label htmlFor="product_name">כתובת הנכס</label>
        <input type="text" name="product_name" onChange={productNameOnChange} />
        <label htmlFor="product_description">תאור הנכס</label>
        <input
          type="text"
          name="product_description"
          onChange={productDescriptionOnChange}
        />
        <label htmlFor="product_price">Product price</label>
        <input
          type="text"
          name="product_price"
          onChange={productPriceOnChange}
        />{" "}
        {/* <label htmlFor="product_category">Product category</label> */}
        {/* <select
          name="product_category"
          // style={{ fontSize: "1.5rem", margin: "1rem", padding: 5 }}
          onChange={productCategoryOnChange}
        >
          <option value="sale">sale</option>
          <option value="rent">rent</option>
          <option value="rent">rent</option>
        </select> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה מרכזית</label>
        <input
          type="file"
          name="product_image"
          id="pimage1"
          onChange={onChange}
        />
        {/* <img src={fileSourceLink} alt="" style={{ maxWidth: 150 }}></img> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image2"
          id="pimage2"
          onChange={onChange2}
        />
        {/* <img src={fileSourceLink2} alt="" style={{ maxWidth: 150 }}></img> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image3"
          id="pimage3"
          onChange={onChange3}
        />
        {/* <img src={fileSourceLink3} alt="" style={{ maxWidth: 150 }}></img> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image4"
          id="pimage4"
          onChange={onChange4}
        />
        {/* <img src={fileSourceLink4} alt="" style={{ maxWidth: 150 }}></img> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image5"
          id="pimage5"
          onChange={onChange5}
        />
        {/* <img src={fileSourceLink5} alt="" style={{ maxWidth: 150 }}></img> */}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <input type="submit" placeholder="asdsa"></input> */}
        <button type="submit">הוסף נכס</button>
        {/* <h3>{newProductId}</h3> */}
        <p className="response-message">{message ? message : null}</p>
        {/* LOADER */}
      </form>
    </div>
  );
}
