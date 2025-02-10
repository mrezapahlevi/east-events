/* eslint react/prop-types: 0 */

import "./Categories.css";
import { eventCategories } from "../../utils/constant";
import React, { useEffect, useRef, useState } from "react";

function Categories() {
  const elRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    elRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, []);
  return (
    <div id="categories">
      <h1 className="heading">Categories</h1>

      <section className="sliders-container">
        {eventCategories.map((data, index) => (
          <div
            className="slideItem"
            key={index}
            style={{ animationDelay: `${0.1 * index}s` }}
            ref={(el) => (elRef.current[index] = el)}
          >
            <div className="category-icon" style={{ color: data.color }}>
              {React.createElement(data.icon)}
            </div>
            <span>{data.name}</span>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Categories;
