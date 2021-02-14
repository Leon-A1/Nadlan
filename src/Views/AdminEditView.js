import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../Assets/css/views/admin-view.css";
import Sidebar from "../Components/AdminSideBar/AdminSidebar";

// TIMER Function
// setTimeout(() => console.log("file2:", file2), 2000);

export default function AdminEditView() {
  let { productid } = useParams();

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const imageHostingUrl = "http://localhost:5000/file/";

  // eslint-disable-next-line
  const [file, setFile] = useState("");
  // eslint-disable-next-line
  const [file2, setFile2] = useState("");
  // eslint-disable-next-line
  const [file3, setFile3] = useState("");

  const [message, setMessage] = useState("");

  const [fileSourceLink, setFileSourceLink] = useState("");
  const [fileSourceLink2, setFileSourceLink2] = useState("");
  const [fileSourceLink3, setFileSourceLink3] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      const result = await axios(
        `http://localhost:5000/api/get_product/${productid}`
      );
      // console.log(result.data);
      setProductName(result.data.product_name);
      setProductDescription(result.data.product_description);
      setProductPrice(result.data.product_price);
      setFileSourceLink(result.data.product_image1);
      setFileSourceLink2(result.data.product_image2);
      setFileSourceLink3(result.data.product_image3);
    };

    fetchItem();
  }, [productid]);

  // Instant image upload to backend
  const onChangeImageFileUpload = async (e) => {
    e.preventDefault();
    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    let imageNameConvertion = document.querySelector("#pimage1");
    let file = imageNameConvertion.files[0];
    let blob = file.slice(0, file.size, "image/png");
    let newFile = new File([blob], newProductUniqeName, { type: "image/png" });
    setFile(newFile);
    let formData = new FormData();
    formData.append("product_image", file);
    try {
      let res = await axios.post(
        "http://localhost:5000/api/create_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFileSourceLink(res.data.message);
      console.log(res);
    } catch (err) {
      setMessage(err.response.data.message);
    }
  };

  const onChangeImage2FileUpload = async (e) => {
    e.preventDefault();

    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    try {
      let imageNameConvertion = document.querySelector("#pimage2");
      let file = imageNameConvertion.files[0];
      let blob = file.slice(0, file.size, "image/jpeg");
      let newFile = new File([blob], newProductUniqeName, {
        type: "image/jpeg",
      });

      setFile2(newFile);
      let formData = new FormData();

      formData.append("product_image", newFile);

      let res = await axios.post(
        "http://localhost:5000/api/create_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFileSourceLink2(res.data.message);
      console.log(res);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      }
    }
  };
  const onChangeImage3FileUpload = async (e) => {
    e.preventDefault();

    let newProductUniqeName =
      e.target.files[0].name.split(".")[0] +
      String(Date.now() + "." + e.target.files[0].name.split(".")[1]);

    try {
      let imageNameConvertion = document.querySelector("#pimage3");
      let file = imageNameConvertion.files[0];
      let blob = file.slice(0, file.size, "image/jpeg");
      let newFile = new File([blob], newProductUniqeName, {
        type: "image/jpeg",
      });
      setFile3(newFile);
      let formData = new FormData();
      formData.append("product_image", newFile);

      let res = await axios.post(
        "http://localhost:5000/api/create_image",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFileSourceLink3(res.data.message);
      console.log(res);
    } catch (err) {
      if (err.response) {
        setMessage(err.response.data.message);
      }
    }
  };
  // Product information state seting
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

  // Sending form data to backend, and redirecting back to dashboard
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("product_id", productid);
    formData.append("product_name", productName);
    formData.append("product_description", productDescription);
    formData.append("product_price", productPrice);
    formData.append("product_image", fileSourceLink);
    formData.append("product_image2", fileSourceLink2);
    formData.append("product_image3", fileSourceLink3);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/update_product",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      setTimeout(
        () => (window.location.href = "http://127.0.0.1:3000/admin"),
        500
      );
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
        <p className="response-message">{message ? message : null}</p>
        <h1>ערוך נכס</h1>
        <br></br>
        <br></br>
        <label htmlFor="product_name">כתובת הנכס</label>
        <input
          type="text"
          defaultValue={productName}
          name="product_name"
          onChange={productNameOnChange}
          style={{ textAlign: "right" }}
        />
        <label htmlFor="product_description">תאור הנכס</label>
        <input
          type="text"
          defaultValue={productDescription}
          name="product_description"
          onChange={productDescriptionOnChange}
          style={{ textAlign: "right" }}
        />
        <label htmlFor="product_price">Product price</label>
        <input
          type="text"
          defaultValue={productPrice}
          name="product_price"
          onChange={productPriceOnChange}
          style={{ textAlign: "right" }}
        />{" "}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה מרכזית</label>
        <input
          type="file"
          name="product_image"
          id="pimage1"
          onChange={onChangeImageFileUpload}
        />
        <img
          src={imageHostingUrl + fileSourceLink}
          alt=""
          style={{ maxWidth: 150 }}
        ></img>
        {message}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image2"
          id="pimage2"
          onChange={onChangeImage2FileUpload}
        />
        <img
          src={imageHostingUrl + fileSourceLink2}
          alt=""
          style={{ maxWidth: 150 }}
        ></img>
        {message}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <label>תמונה נוספת</label>
        <input
          type="file"
          name="product_image3"
          id="pimage3"
          onChange={onChangeImage3FileUpload}
        />
        <img
          src={imageHostingUrl + fileSourceLink3}
          alt=""
          style={{ maxWidth: 150 }}
        ></img>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <button type="submit">שמור נכס</button>
        {/* LOADER */}
      </form>
    </div>
  );
}