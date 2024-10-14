"use client";

import "./globals.scss";
import "./home.scss";
import Slider from "react-slick";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { bannerData } from "@/helpers/rough/rough";
import Image from "next/image";
import { useState } from "react";
import { useGlobalContext } from "./_context/NavContext";
import { BarLoader, ScaleLoader } from "react-spinners";
import { Autocomplete, Box, Center, Flex, Select } from "@mantine/core";
import Lottie from "react-lottie";
import * as animationData from '../../loading.json'

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
  const { loader } = useGlobalContext();

  function handleDestinationSelect(e) {
    console.log(e)
  }

  // Lottifie
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  //slick carasoul
  const settings = {
    dots: false,
    fade: true,
    cssEase: "linear",
    autoplay: true,
    speed: 500,
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
    pauseOnHover: false,
  };
  if (loader) {
    return (
      <Flex w={200} m={'auto'} direction='column' align={'center'} justify={'center'} mt={'xl'}>
        <Lottie options={defaultOptions} height={250} width={200} style={{marginTop: "100px"}}/>
        <BarLoader
          color={'blue'}
          loading={true}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={{marginTop: "-70px"}}
        />
      </Flex>
    );
  }
  return (
    <>
      <div className="home-carousel" style={{width: "98%", height:'', margin: "auto", borderRadius: "30px", overflow: "hidden"}}>
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
                  priority={true}
                />
              </article>
            );
          })}
        </Slider>
        <main className="inp-txt">
          <div className="hero-overlap">
            <div className="hero-overlap-up">
              <div className="left-hero-overlap-up">
                <div>
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
                <Select
                  label="Search your destination"
                  placeholder="Search here"
                  data={['React', 'Angular', 'Vue', 'Svelte']}
                  onChange={handleDestinationSelect}
                  searchable
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
                          priority={true}
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
