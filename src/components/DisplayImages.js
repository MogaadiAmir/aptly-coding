import React, { useState } from "react";
import { ImagesData } from "./ImagesData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import axios from "axios";

const DisplayImages = ({ slides }) => {

  const [state, setState] = useState({
    joke: "",
  });

  //Get Random jokes 
  
  const fetchData = async () => {
    const result = await axios.get("https://api.icndb.com/jokes/random");
    setState({
      ...state,
      joke: result.data.value.joke,
    });
  };

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Slide right
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  // Slide left
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // Press to get random jokes
  const RandomSlide = () => {
    setCurrent(Math.floor(Math.random() * slides.length));
    fetchData();
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      <div>
        {ImagesData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <img src={slide.image} alt="chuck" className="image" />
              )}
            </div>
          );
        })}
      </div>
        <div>
          <p className="title">{state.joke}</p>
          <button className="btn btn-primary" onClick={RandomSlide}>
            Press to get random joke
          </button>
        </div>
    </section>
  );
};

export default DisplayImages;
