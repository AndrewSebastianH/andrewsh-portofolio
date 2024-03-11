// InfiniteProjectSection.js

import React from "react";
import "../styles/infiniteCarousel.scss";

const InfiniteProjectSection = ({ text }) => {
  const repetitions = Array(12).fill(text);
  const carousels = document.querySelectorAll(".infinite-carousel-title");

  carousels.forEach((carousel, i) => {
    const carouselItem = carousel.querySelector(".infinite-carousel div");
    const carouselContent = Array.from(carouselItem.children);
    carouselContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      carouselItem.appendChild(duplicatedItem);
    });
  });

  return (
    <div className="infinite-carousel max-h-screen overflow-y-hidden ">
      <div className="">
        {repetitions.map((text, index) => (
          <div key={index} className="text-giant font-jockey text-white">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteProjectSection;
