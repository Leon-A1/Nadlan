import React, { useState } from "react";
import "./search.css";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    if (q === "") {
      setText(q);
      getQuery(q);
    } else {
      setText(q);
      getQuery("/" + q);
    }
  };

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder=".... חיפוש נכסים מהיר"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
          style={{ textAlign: "right" }}
        />
      </form>
    </section>
  );
};

export default Search;
