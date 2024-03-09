//ExpCarousel.js
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/carousel.scss";
import { constants } from "./constants/constants";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function ExpCarousel() {
  const experienceData = constants?.experiences;
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="h-4/5 py-10"
        loop={false}
        style={{
          "--swiper-pagination-color": "#222222",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "0.5",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
      >
        {experienceData.map((item) => (
          <SwiperSlide className="w-1/2 h-full" key={item.id}>
            <div className="p-10 flex flex-row gap-5 h-full  border-black border-8 rounded-xl bg-white">
              <div className="flex flex-col w-[50%]">
                <div className="rounded-xl">
                  <img
                    src={item.icon}
                    className="max-w-[250px] h-[250px] object-contain"
                  />
                </div>
                <div className="name font-bebas text-xl">
                  {item.name.toUpperCase()}
                </div>
                <div className="date font-bebas text-xl ">
                  {item.date.toUpperCase()}
                </div>
              </div>

              <div className="flex-1 break-words">
                <div className="jobTitle flex flex-auto font-bebas text-2xl">
                  {item.title.toUpperCase()}
                </div>
                <div className="border-b-2 border-gray-300 pb-1">
                  {item.category}
                </div>

                <div className=" pt-2">
                  <ul style={{ listStyleType: "disc" }}>
                    {item.content.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        <li className="leading-6 pb-2">{line}</li>
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
