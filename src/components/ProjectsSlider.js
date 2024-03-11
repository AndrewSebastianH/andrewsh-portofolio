//ProjectsSlider.js

import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
// import "../styles/carousel.scss";
import { constants } from "./constants/constants";
import { EffectCreative, Pagination, Autoplay } from "swiper/modules";

export default function ProjectSlider() {
  const projectsData = constants?.projects;
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        modules={[EffectCreative, Pagination, Autoplay]}
        className="h-full w-full"
        style={{
          "--swiper-pagination-color": "#f2f2f2",
          "--swiper-pagination-bullet-inactive-color": "#f6f6f6",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
      >
        {projectsData.map((page) => (
          <SwiperSlide key={page.page} className="w-full">
            <div className=" w-full h-full grid grid-cols-2 gap-2 grid-rows-2">
              {page.data.map((item) => (
                <div
                  className="flex relative font-bebas text-2xl text-white items-center justify-center hover:scale-105 transition-transform bg-cover bg-center"
                  key={item.id}
                  style={{ backgroundImage: `url(${item.bgimage})` }}
                >
                  <a className="decoration-0" href={item.links} target="_blank">
                    <div className="absolute inset-0 bg-black opacity-70 hover:opacity-30  transition-opacity" />
                    <div className="relative flex w-72">
                      <p>{item.name}</p>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
