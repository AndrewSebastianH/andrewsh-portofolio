//ExpCarousel.js
import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/carousel.scss";
import { constants } from "./constants/constants";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

export default function ExpCarousel() {
  // const experienceData = constants?.experiences;

  const experienceData = [...constants.experiences].sort((a, b) => b.id - a.id);
  return (
    <>
      <Swiper
        initialSlide={1}
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
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6000,
          disableOnInteraction: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={false}
        style={{
          "--swiper-pagination-color": "#f6f6f6",
          "--swiper-pagination-bullet-inactive-color": "#f6f6f6",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
          "--swiper-pagination-bullet-size": "12px",
          "--swiper-pagination-bullet-horizontal-gap": "8px",
        }}
      >
        {experienceData.map((item) => (
          <SwiperSlide
            className="w-full md:h-full md:w-1/2 pb-5 md:pb-10"
            key={item.id}
          >
            <div className="h-full p-10 flex flex-row gap-5 border-black border-8 rounded-xl bg-white">
              <div className="flex flex-col w-[30%] md:w-[50%]">
                <div className="flex h-full max-w-40 max-h-40 md:max-w-[250px] md:h-[250px] justify-center items-center">
                  <img src={item.icon} />
                </div>
                <div className="flex flex-col justify-end h-full">
                  <div className="name font-bebas text-md md:text-xl">
                    {item.name.toUpperCase()}
                  </div>
                  <div className="date font-bebas text-md md:text-xl ">
                    {item.date.toUpperCase()}
                  </div>
                </div>
              </div>

              <div className="flex-1 break-words">
                <div className="jobTitle flex flex-auto font-bebas text-md md:text-2xl">
                  {item.title.toUpperCase()}
                </div>
                <div className="border-b-2 text-xs font-thin md:text-lg border-gray-300 pb-1">
                  {item.category}
                </div>

                <div className="pt-1">
                  <ul style={{ listStyleType: "disc" }}>
                    {item.content.split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        <li className="leading-5 break-words text-xs md:text-lg md:leading-6 pb-1 md:pb-2">
                          {line}
                        </li>
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
