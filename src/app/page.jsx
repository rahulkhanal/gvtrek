"use client";

import "./globals.scss";
import "./home.scss";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { bannerData } from "@/helpers/rough/rough";
import Image from "next/image";
import {
  Autocomplete,
  Stack,
  TextField,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useState } from "react";

const NextArrow = ({ onClick }) => (
  <div className="custom-arrow-next" onClick={onClick}>
    <GrFormNext size={20} className="arrow" color="red" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow-prev" onClick={onClick}>
    <GrFormPrevious size={20} className="arrow" />
  </div>
);
export default function Home() {
  const settings = {
    dots: false,
    // infinite: true,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: false,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true,
    pauseOnHover: false, // Ignore pause on hover
  };

  const skill = ["A", "B", "C", "D", "E"];
  const [value, setValue] = useState(null);
  return (
    <>
      <div className="home-carousel">
        <Slider {...settings}>
          {bannerData.map((item, index) => {
            return (
              <article key={index}>
                <div className="home-carousel-overlay"></div>
                <Image
                  src={item.img}
                  alt={item.title}
                  width={1920}
                  height={600}
                />
              </article>
            );
          })}
        </Slider>
        <main className="inp-txt">
          <div className="hero-overlap">
            <div className="hero-overlap-up">
              <div className="left-hero-overlap-up">
                <div style={{ textAlign: "left" }}>
                  <h1>
                    We Make Your{" "}
                    <span style={{ color: "#FF7500" }}>Travel</span> Memorable
                  </h1>
                  <br />
                  <strong>
                    Great Vision Trek and Expedition Pvt.Ltd welcomes you all
                    with great and adventurous trekking and Expedition all over
                    Nepal. Our company includes experienced and nature conscious
                    team that serves best trekking experience.
                  </strong>
                </div>
                <br />
                <br />
                {/* <input type="text" /> */}
                <Autocomplete
                  options={skill}
                  className="input"
                  key="unique-key-for-Autocomplete"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="standard"
                      placeholder="Search Here"
                    />
                  )}
                  value={value}
                  onChange={(event, newValue) => setValue(newValue)}
                />
              </div>
              <div className="carasoul-main">
                <Slider {...settings2}>
                  {bannerData.map((item, index) => {
                    return (
                      <div key={index}>
                        <Image
                          src={item.img}
                          alt={item.title}
                          width={700}
                          height={300}
                        />
                        <h4 style={{ padding: "7px", color: "#0762A9" }}>
                          {item.title}
                        </h4>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
