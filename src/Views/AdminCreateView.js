import React, { useState } from "react";
import axios from "axios";
import "../Assets/css/landing-page-form.css";

export default function AdminCreateView() {
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [filename2, setFilename2] = useState("Choose File");
  const [message, setMessage] = useState("");
  const [fileSourceLink, setFileSourceLink] = useState("");
  const [fileSourceLink2, setFileSourceLink2] = useState("");
  const [productName, setProductName] = useState("");

  const [newProductId, setNewProductId] = useState("");

  const onChange = (e) => {
    // console.log(e);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
    console.log(setFile);
    // console.log(setFile)
  };
  const onChange2 = (e) => {
    // console.log(e);
    setFile2(e.target.files[0]);
    setFilename2(e.target.files[0].name);
    console.log(setFile2);
    // console.log(setFile)
  };

  const productNameOnChange = (e) => {
    e.preventDefault();
    setProductName(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(filename);
    console.log(filename2);
    formData.append("profile_image", file);
    formData.append("profile_image2", file2);
    formData.append("productname", productName);

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
      console.log(res.data.image_link);
      setFileSourceLink("http://localhost:5000" + res.data.image_link);
      setFileSourceLink2("http://localhost:5000" + res.data.image_link2);
      setNewProductId(res.data.product_id);

      setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      <form
        method="POST"
        action="/create"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <h3>Create new product</h3>
        <br></br>
        <br></br>

        <label>Product Name</label>
        <input type="text" name="productName" onChange={productNameOnChange} />

        <label>Product Image 1</label>
        <input type="file" name="profile_image" onChange={onChange} />
        <img src={fileSourceLink} alt="" style={{ maxWidth: 150 }}></img>

        <label>Product Image 2</label>
        <input type="file" name="profile_image2" onChange={onChange2} />
        <img src={fileSourceLink2} alt="" style={{ maxWidth: 150 }}></img>
        <input type="submit" />
        <h3>{newProductId}</h3>
        {message ? message : null}

        {/* LOADER */}
      </form>
    </div>
  );
}
