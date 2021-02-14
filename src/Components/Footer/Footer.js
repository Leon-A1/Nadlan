import React from "react";
import "./footer.css";
// import facebook_logo from "../Assets/img/facebook_sad.png";
// import instagram_logo from "../Assets/img/instagram_sad.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="row">
      <div className="col">
        <div className="info-footer">
          <div className="info-footer-div">
            <p className="adress">אשדוד</p>

            <i
              className="fab fa-facebook-square"
              style={{ fontSize: "150%", padding: 10 }}
            ></i>
            <i
              className="fab fa-instagram"
              style={{ fontSize: "150%", padding: 10 }}
            ></i>

            <ul>
              <li>
                <NavLink to="/about">צור קשר</NavLink>
              </li>
              <li>
                <NavLink to="/about">פרופיל חברה</NavLink>
              </li>
              <li>
                <a href="/" exact="true">
                  עמוד הבית
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
