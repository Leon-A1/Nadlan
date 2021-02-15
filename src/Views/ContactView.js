import React from "react";
import "../Assets/css/views/contact-view.css";
import headerBackgroundImg from "../Assets/img/page-header-image.jpg";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import GetInTouchForm from "../Components/GetInTouchForm/GetInTouchForm";
// import Header from "../Components/Header";

export default function ContactView() {
  return (
    <>
      <NavBar />
      <div className="contact-page-container">
        <div className="contact-page-header">
          <img src={headerBackgroundImg} alt=""></img>
        </div>

        <div className="access-navbar">
          <a href="/">דף הבית</a> » <a href="/contact">צרו קשר</a>
        </div>

        <h2>צרו קשר</h2>
        <GetInTouchForm />
        {/* </div> */}
      </div>
      <Footer></Footer>
    </>
  );
}
