import React, { useState, useEffect } from "react";
import data from "./data";
import "./index.css";

function Slider() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    console.log(setPeople);
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 12000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section-center">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;

        let position = "nextSlide";
        if (personIndex === index) {
          position = "activeSlide";
        }
        if (
          personIndex === index - 1 ||
          (index === 0 && personIndex === people.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className="person-img" />

            <p className="title">{title}</p>
            <p className="text">{quote}</p>
          </article>
        );
      })}
      <button className="prev" onClick={() => setIndex(index - 1)}>
        <i className="fas fa-arrow-left"></i>
      </button>
      <button className="next" onClick={() => setIndex(index + 1)}>
        <i className="fas fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default Slider;
