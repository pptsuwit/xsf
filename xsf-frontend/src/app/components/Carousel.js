"use client";
import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "240px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
};
export default function CustomCarousel() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
      <Carousel afterChange={onChange}>
        <div>
          <h3 style={contentStyle}>
            <img className="w-full object-cover" src="https://picsum.photos/300/300"></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="w-full object-cover" src="https://picsum.photos/300/400"></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="w-full object-cover" src="https://picsum.photos/300/500"></img>
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <img className="w-full object-cover" src="https://picsum.photos/300/600"></img>
          </h3>
        </div>
      </Carousel>
    </>
  );
}
