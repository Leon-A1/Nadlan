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
        <h3>נדלן.קום</h3>
        <p>A+ קבלן רשום בסיווג</p>
        <p>מס' קבלן (רישיון)853213545</p>
        <a
          className="email-me"
          // style={{ paddingRight: 20 }}
          href="mailto:leonaviev@gmail.com"
        >
          <i className="far fa-envelope"></i>
          support@nadlan.com
        </a>
        <p>אשדוד</p>

        <GetInTouchForm />
        {/* </div> */}
      </div>
      <Footer></Footer>
    </>
  );
}
