"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "dotenv/config";
require("dotenv").config();

function Swip() {
  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img
          src={process.env.IMG ? process.env.IMG : "./bg.jpg"}
          style={{ height: "50vh", objectFit: "cover", width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src={"./bg.jpg"}
          style={{ height: "50vh", objectFit: "cover", width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Swip;
