import React, { useRef, useState, useContext } from "react";
import axios from "axios";
import Amap from "./ashdod-map.png";

import "./leave-contact.css";

// import { GlobalContext } from "../ ../context/GlobalState";
import { GlobalContext } from "../../context/GlobalState";

export default function GetInContact() {
  const { API_URL } = useContext(GlobalContext);

  const [Message, setMessage] = useState();

  function SubmitNewEmail() {
    console.log(NewEmailAdress.current.value);
    if (
      NewEmailAdress.current.value &&
      NewPhoneNumber.current.value &&
      NewName.current.value
    )
      axios
        .post(`${API_URL}save_email`, {
          email_adress: NewEmailAdress.current.value,
          phone_number: NewPhoneNumber.current.value,
          name: NewName.current.value,
        })
        .then((res) => {
          console.log(res);
          setMessage(" !פנייתכם התקבלה תודה");
        })
        .catch((e) => setMessage("אופס..משהו קרה, אנא נסו שנית"));
  }
  const NewEmailAdress = useRef();
  const NewName = useRef();
  const NewPhoneNumber = useRef();

  return (
    <div className="contact-form-container">
      <h3>נדלן.קום</h3>
      <p>A+ קבלן רשום בסיווג</p>
      <p>מס' קבלן (רישיון)853213545</p>
      <a className="email-me" href="mailto:leonaviev@gmail.com">
        support@nadlan.com
      </a>
      <p>אשדוד</p>
      <img
        src={Amap}
        style={{
          width: "100%",
          maxWidth: 500,
          maxHeight: 150,

          marginTop: 30,
          marginBottom: 30,
          borderRadius: 10,
        }}
        alt=""
      ></img>
      <div className="contact-form-div">
        <h4>השאירו פרטים ונציגנו יחזרו אליכם בהקדם האפשרי</h4>
        <span>שם</span>
        <input ref={NewName} type="text" placeholder="John"></input>
        <span>אימייל</span>

        <input
          ref={NewEmailAdress}
          type="email"
          placeholder="John@gmail.com"
        ></input>
        <span>נייד</span>

        <input
          ref={NewPhoneNumber}
          type="text"
          placeholder="053-548-1212"
        ></input>
        <button action="#" onClick={SubmitNewEmail}>
          שלח
        </button>

        <p id="form-response-message">{Message}</p>
      </div>
    </div>
  );
}
