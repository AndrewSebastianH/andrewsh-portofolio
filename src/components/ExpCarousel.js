//ExpCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/carousel.scss";
import { constants } from "./constants/constants";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

const CATEGORY_CONFIG = {
  "Full-time Job": { color: "#60a5fa", label: "FULL-TIME" },
  Internship: { color: "#4ade80", label: "INTERNSHIP" },
  "Education - Bachelor's Degree": { color: "#a78bfa", label: "EDUCATION" },
  "Contract Work": { color: "#fb923c", label: "CONTRACT" },
};

const getTextSizes = (content) => {
  const lines = content.split("\n").length;
  if (lines >= 2)
    return {
      name: "text-lg   md:text-xl",
      title: "text-xl   md:text-2xl",
      bullet: "text-xs   md:text-sm   leading-[18px] md:leading-5",
    };
  return {
    name: "text-xl   md:text-2xl",
    title: "text-2xl  md:text-3xl",
    bullet: "text-sm   md:text-base leading-5 md:leading-6",
  };
};

export default function ExpCarousel() {
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
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000, disableOnInteraction: true }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        loop={false}
        style={{
          "--swiper-pagination-color": "#f6f6f6",
          "--swiper-pagination-bullet-inactive-color": "#f6f6f6",
          "--swiper-pagination-bullet-inactive-opacity": "0.4",
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-horizontal-gap": "5px",
          "--swiper-pagination-bottom": "20px",
        }}
      >
        {experienceData.map((item) => {
          const sizes = getTextSizes(item.content);
          const cat = CATEGORY_CONFIG[item.category] ?? {
            color: "#94a3b8",
            label: item.category.toUpperCase(),
          };
          return (
            <SwiperSlide
              className="w-full md:h-full md:w-1/2 pb-5 md:pb-10"
              key={item.id}
            >
              <div className="h-full border-4 border-black rounded-xl overflow-hidden bg-white flex flex-col">
                {/* Header strip */}
                <div className="shrink-0 bg-black px-3 py-2 flex justify-between items-center">
                  <span className="font-jockey text-white text-xs tracking-[0.2em]">
                    {cat.label}
                  </span>
                  <span
                    className="font-jockey text-xs tracking-wider"
                    style={{ color: cat.color }}
                  >
                    {item.date}
                  </span>
                </div>

                {/* Category accent line */}
                <div
                  className="h-[3px] shrink-0"
                  style={{ background: cat.color }}
                />

                {/* Card body */}
                <div className="flex-1 flex flex-col p-2.5 md:p-4 min-h-0">
                  {/* Logo + company + title */}
                  <div className="flex gap-2.5 md:gap-3 items-center shrink-0 mb-2 md:mb-3">
                    <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 flex items-center justify-center rounded-lg border border-gray-200 bg-gray-50 p-2">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div
                        className={`font-bebas leading-tight text-gray-800 ${sizes.name}`}
                      >
                        {item.name.toUpperCase()}
                      </div>
                      <div
                        className={`font-bebas leading-tight ${sizes.title}`}
                        style={{ color: cat.color }}
                      >
                        {item.title.toUpperCase()}
                      </div>
                    </div>
                  </div>

                  {/* Dashed divider */}
                  <div className="border-t-2 border-dashed border-gray-200 mb-2 shrink-0" />

                  {/* Bullet points */}
                  <div className="flex-1 overflow-hidden min-h-0">
                    <ul className="list-disc pl-4">
                      {item.content.split("\n").map((line, index) => (
                        <li
                          key={index}
                          className={`break-words text-gray-700 ${sizes.bullet}`}
                        >
                          {line.trim()}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
