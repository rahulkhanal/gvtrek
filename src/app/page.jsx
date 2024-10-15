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
            ['', '', ''].map((item, index) => {
              return (
                <Grid.Col span={4} key={index}>
                  <Paper withBorder style={{ backgroundColor: '#fff', borderRadius: '10px', overflow: 'hidden' }}>
                    <Image src={'/imgs/shownepal.jpg'} alt="package" width={'1000'} height={350} />
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
        <Group justify="flex-end">
          <Button w={200} variant="outline" radius={30} rightSection={<IoMdArrowForward size={14} />}>View More</Button>
        </Group>
      </Box>
      {/* Services */}
      <Box px={200} my={100}>
        <Title size={'50'} fw={400} mb={20}>Our Services</Title>
        <Flex justify={'space-between'} gap={'xl'}>
          <Paper withBorder shadow="xl" radius='lg' miw={300} p={'lg'} style={{ borderBottom: "2px solid #1C7ED6" }}>
            <Image src="/imgs/hiking.png" alt="services" width={70} height={100} />
            <Title order={4}>Trekking Adventures</Title>
            <Text size="sm">Experience the thrill of trekking through stunning landscapes, from serene valleys to challenging mountain trails. Perfect for adventurers of all levels.
            </Text>
          </Paper>
          <Paper withBorder shadow="xl" radius='lg' miw={300} p={'lg'} style={{ borderBottom: "2px solid #1C7ED6" }}>
            <Image src="/imgs/heli-service.png" alt="services" width={150} height={90} />
            <Title order={4}>Heli Tour</Title>
            <Text size="sm">Soar above breathtaking landscapes with our helicopter tours. Enjoy stunning aerial views of mountains, valleys, and iconic landmarks.</Text>
          </Paper>
          <Paper withBorder shadow="xl" radius='lg' miw={300} p={'lg'} style={{ borderBottom: "2px solid #1C7ED6" }}>
            <Image src="/imgs/hotel.png" alt="services" width={150} height={100} />
            <Title order={4}>Hotel Reservation</Title>
            <Text size="sm">
              Book comfortable accommodations through our easy hotel reservation service. From luxury stays to cozy lodges, we ensure your rest is as enjoyable as your adventure.
            </Text>
          </Paper>
          <Paper withBorder shadow="xl" radius='lg' miw={300} p={'lg'} style={{ borderBottom: "2px solid #1C7ED6" }}>
            <Image src="/imgs/paragliding.png" alt="services" width={100} height={110} />
            <Title order={4}>Adventure Activities</Title>
            <Text size="sm">
              From paragliding to river rafting, enjoy a range of thrilling activities designed to give you an adrenaline rush and lasting memories.          </Text>
          </Paper>
        </Flex>
      </Box>
      {/* Book our Heli Tour */}
      <Box bg={'#F0EBFE'} pt={100}>
        <Flex gap={50}>
          <Box style={{ borderRadius: "0 70px 0 0", overflow: 'hidden' }} maw={700} miw={700}>
            <Image src={'/materials/Heli-tour-in-nepal.jpg'} width={700} height={600}></Image>
          </Box>
          <Box pr={10}>
            <Title c={'#0460C3'} size={'50'} fw={400} mb={20}>Book Heli Tour From <strong>Paurakh Travels</strong></Title>
            <Text>
              Looking for a unique and thrilling way to explore the majestic landscapes of Nepal? Book a <strong>heli tour</strong> with <strong>Paurakh Travels</strong> and embark on an unforgettable adventure! Our helicopter tours offer stunning aerial views of Nepal's most iconic landmarks, including the towering peaks of the Himalayas, serene valleys, and ancient cultural sites. Whether you're seeking a bird's-eye view of <strong>Mount Everest</strong>, <strong>the Annapurna Range</strong>, or the <strong>Langtang Valley</strong>, our heli tours provide a once-in-a-lifetime experience.
              <br />
              <br />
              At <strong>Paurakh Travels</strong>, we pride ourselves on offering safe and comfortable helicopter tours, operated by experienced pilots who know the region inside and out. Our <strong>heli tours</strong> are perfect for adventure seekers, nature lovers, and photographers looking to capture breathtaking moments from a unique perspective.
              <br />
              <br />
              Why choose a <strong>heli tour</strong>? Unlike trekking or road trips, a heli tour allows you to cover vast distances in a short amount of time while still enjoying spectacular views. It’s the perfect option for travelers with limited time or those who want a more luxurious and convenient way to explore. With <strong>Paurakh Travels</strong>, you’ll enjoy a smooth and memorable journey, with stops at key scenic points to take in the beauty of Nepal from above.            </Text>
            <br />
            Booking a <strong>heli tour</strong> with us is easy! Simply browse our available packages and select the one that fits your schedule and preferences. Whether you’re planning a solo trip, a romantic getaway, or a family adventure, we’ve got the perfect <strong>heli tour</strong> for you.
            Experience Nepal like never before! Book your heli tour with Paurakh Travels today and get ready for the adventure of a lifetime. Don’t miss out on this incredible opportunity to see the beauty of Nepal from the sky!
            <br />
            <br />
            <Group>
              <Button>Book Here</Button>
              <Button>Contact Us</Button>
            </Group>
          </Box>
        </Flex>
      </Box>
      <Space h={'xl'} />
    </>
  );
}
