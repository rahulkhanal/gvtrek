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
import { Autocomplete, Box, Button, Center, Divider, Flex, Grid, Group, Paper, Select, Space, Text, Title } from "@mantine/core";
import Lottie from "react-lottie";
import * as animationData from '../../loading.json'
import { MdOutlineTravelExplore } from "react-icons/md";
import { MdModeOfTravel } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import { LuClock3 } from "react-icons/lu";
import { FiPieChart } from "react-icons/fi";

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
        <Lottie options={defaultOptions} height={250} width={200} style={{ marginTop: "100px" }} />
        <BarLoader
          color={'blue'}
          loading={true}
          size={200}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={{ marginTop: "-70px" }}
        />
      </Flex>
    );
  }
  return (
    <>
      <div className="home-carousel" style={{ width: "98%", height: '', margin: "auto", borderRadius: "30px", overflow: "hidden" }}>
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
                    Paurakh Travels welcomes you all
                    with great and adventurous trekking and Expedition all over
                    Nepal. Our company includes experienced and nature conscious
                    team that serves best trekking experience.
                  </strong>
                </div>
                <Select
                  label="Search your destination"
                  placeholder="Search here"
                  data={['Annapurna', 'Manaslu', 'Dhaulagiri']}
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
      <Space h={'xl'} />
      <Flex py={80} px={200} justify={'space-between'} align={'center'}>
        <Box w={700}>
          <Title c='#0057D9' size={60}>Paurakh Travels</Title>
          <Text>Are you ready to explore the world, try new experiences, and make unforgettable memories? At Paurakh Travels, we offer exciting packages that bring you closer to nature, adventure, and discovery. Whether you're looking for thrilling treks through the mountains, relaxing trips to breathtaking destinations, or adrenaline-pumping activities, we have something for everyone.</Text>
          <Space h={'lg'} />
          <Button
            variant="light"
            leftSection={<MdOutlineTravelExplore size={14} />}
            rightSection={<IoMdArrowForward size={14} />}
          >
            Explore by your preference
          </Button>
        </Box>
        <Flex direction={'column'} bg={'#F0F6FF'} p={'xl'} align={'center'} w={600}>
          <MdModeOfTravel size={50} />
          <Title size={22}>Are you planning to travel in Nepal ?</Title>
          <Space h={'lg'} />
          <Text ta={'center'}>With Paurakh Travels, booking your next trip is easy and stress-free. Let us plan for you.</Text>
          <Space h={'lg'} />
          <Button>Take a free consultant</Button>
        </Flex>
      </Flex>

      {/* Popular package */}
      <Box bg={'#F0F6FF'} px={200} py={100}>
        <Title size={'50'} fw={400}>Popular Tour Package</Title>
        <Text w={700}>
          Explore the beauty of Nepal with Luxury Holidays Nepal, your trusted partner for unforgettable treks and tours. From breathtaking Everest views to rich cultural experiences, we ensure top-notch service and ethical adventures. Book your dream holiday now!
        </Text>
        <Grid py={10} gutter={30}>
          {
            ['', '', '', ''].map(() => {
              return (
                <Grid.Col span={4}>
                  <Paper withBorder style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image src={'/imgs/shownepal.jpg'} alt="package" width={'1000'} layout="responsive" height={200} />
                    <Flex direction={'column'}>
                      <Space w={'lg'} />
                      <Flex direction={'column'} p={10}>
                        <Text fw="600" size="xl">Annapurna Base Camp</Text>
                        <Group align="center">
                          <LuClock3 /><Text>Duration: 7 Days</Text>
                        </Group>
                        <Divider my="sm" />
                        <Flex justify={'space-between'} align={'center'}>
                          <Flex direction={'column'} w={300}>
                            <Text fw="400" size="sm">
                              Starting from
                            </Text>
                            <Text c={'#1C7ED6'} size="lg">
                              <b >$ 500</b>
                            </Text>
                          </Flex>
                          <Button w={150}>Book Now</Button>
                        </Flex>
                      </Flex>
                    </Flex>
                  </Paper>
                </Grid.Col>
              )
            })
          }
        </Grid>
      </Box>
    </>
  );
}
