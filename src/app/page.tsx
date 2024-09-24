"use client";
import Nav from "@/components/Nav";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Home() {
  const [slider, setSlider] = useState(true);
  return (
    <>
      <Nav />
      <main className="flex flex-col">
        <section className="container relative flex flex-col items-center pt-[126px] max-xl:overflow-x-clip max-sm:pt-[70px]">
          <div className="mb-[47px] max-sm:mb-[26px]">
            <div className="text-center font-maglony text-[77.3px] font-normal leading-[120%] text-[#0E1F38] max-sm:text-[40px]">
              Bringing the <span className="font-semibold">Next</span>
            </div>
            <div className="flex items-center font-maglony text-[77.3px] font-normal leading-[120%] text-[#0E1F38] max-sm:text-[40px]">
              <span className="font-semibold">Gen</span>
              <div className="flex items-center gap-2 rounded-[100px] bg-[#0E1F38] p-1 max-sm:gap-[5px]">
                <div className="flex -space-x-3">
                  <Avatar className="h-[55.26px] min-h-[55.26px] w-[55.26px] min-w-[55.26px] max-sm:h-[30px] max-sm:min-h-[30px] max-sm:w-[30px] max-sm:min-w-[30px]">
                    <AvatarImage src="/student1.png" />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                  <Avatar className="h-[55.26px] min-h-[55.26px] w-[55.26px] min-w-[55.26px] max-sm:h-[30px] max-sm:min-h-[30px] max-sm:w-[30px] max-sm:min-w-[30px]">
                    <AvatarImage src="/student2.png" />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                  <Avatar className="h-[55.26px] min-h-[55.26px] w-[55.26px] min-w-[55.26px] max-sm:h-[30px] max-sm:min-h-[30px] max-sm:w-[30px] max-sm:min-w-[30px]">
                    <AvatarImage src="/student3.png" />
                    {/* <AvatarFallback>CN</AvatarFallback> */}
                  </Avatar>
                </div>
                <Image
                  alt="student-arrow"
                  src="/student-arrow.svg"
                  width={56}
                  height={56}
                  className="max-sm:h-[30px] max-sm:min-h-[30px] max-sm:w-[30px] max-sm:min-w-[30px]"
                />
              </div>
               Onchain
            </div>
          </div>
          <div className="mb-[80px] flex flex-wrap items-center justify-center gap-2 font-spaceGrotesk text-[14px] leading-[120px] max-md:max-w-[300px] max-sm:mb-[60px]">
            <Badge
              variant="outline"
              className="border border-[#535353] bg-transparent text-[#535353]"
            >
              #buildonchain
            </Badge>
            <Badge
              variant="outline"
              className="border border-[#535353] bg-transparent text-[#535353]"
            >
              #web3isforeveryone
            </Badge>
            <Badge
              variant="outline"
              className="border border-[#535353] bg-transparent text-[#535353]"
            >
              #everyoneisabuilder
            </Badge>
          </div>
          <Link href="#about">
            <Button className="mb-[200px] flex h-auto items-center gap-2 rounded-[100px] bg-[#0E1F38] py-3.5 pl-[27px] pr-[32px] font-spaceGrotesk text-white max-sm:mb-[65px]">
              <Image
                alt="down-arrow"
                src="/down-arrow.svg"
                width={17}
                height={16}
              />
              Learn more
            </Button>
          </Link>
          <div className="grid grid-cols-3 items-center gap-[30px] text-[#0E1F38] max-md:grid-cols-2 max-sm:gap-x-[16px] max-sm:gap-y-[28px]">
            <div className="flex items-center gap-3.5">
              <Image
                alt="profile-icon"
                src="/profile-icon.svg"
                width={43}
                height={42}
                className="max-sm:h-[36px] max-sm:min-h-[36px] max-sm:w-[36px] max-sm:min-w-[36px]"
              />
              <div className="flex flex-col font-clashGrotesk text-[32px] leading-[39px] -tracking-[0.02em] max-sm:text-[24px] max-sm:leading-[30px]">
                300+
                <span className="text-[24px] leading-[30px] -tracking-[0.04em] max-sm:text-[16px] max-sm:leading-[20px]">
                  students sensitized
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3.5">
              <Image
                alt="trend"
                src="/trend.svg"
                width={42}
                height={42}
                className="max-sm:h-[36px] max-sm:min-h-[36px] max-sm:w-[36px] max-sm:min-w-[36px]"
              />

              <div className="flex flex-col font-clashGrotesk text-[32px] leading-[39px] -tracking-[0.02em] max-sm:text-[24px] max-sm:leading-[30px]">
                % 65
                <span className="text-[24px] leading-[30px] -tracking-[0.04em] max-sm:text-[16px] max-sm:leading-[20px]">
                  onboarded onchain
                </span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3.5 max-md:col-span-2">
              <Image
                alt="hat"
                src="/hat.svg"
                width={42}
                height={42}
                className="max-sm:h-[36px] max-sm:min-h-[36px] max-sm:w-[36px] max-sm:min-w-[36px]"
              />
              <div className="flex flex-col font-clashGrotesk text-[32px] leading-[39px] -tracking-[0.02em] max-sm:text-[24px] max-sm:leading-[30px]">
                two (2)
                <span className="text-[24px] leading-[30px] -tracking-[0.04em] max-sm:text-[16px] max-sm:leading-[20px]">
                  high schools attended
                </span>
              </div>
            </div>
          </div>
          <motion.div
            animate={{
              x: ["0px", "-400px", "400px", "0px"],
              y: ["0px", "-400px", "-400px", "0px"],
              backgroundColor: ["#01BD82", "#FEC726", "#FE3C77", "#01BD82"],
            }}
            transition={{
              duration: 9,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="absolute bottom-0 h-[163px] w-[374px] rounded-[50%] bg-[#01BD82] blur-[195px]"
          ></motion.div>
        </section>
        <section
          id="about"
          className="container flex flex-col items-center gap-[93px] pb-[100px] pt-[200px] max-sm:gap-[50px] max-sm:pb-[74px] max-sm:pt-[100px]"
        >
          <h2 className="text-center font-clashGrotesk text-[48px] leading-[90%] -tracking-[0.04em] text-[#0E1F38] max-sm:text-[32px]">
            We are advocating for <br />{" "}
            <span className="relative">
              <span className="relative z-[1]">blockchain literacy</span>
              <span className="absolute bottom-[8px] left-[-15px] z-0 h-full max-h-[34px] w-[110%] -rotate-[0.96deg] rounded-[3.8845px] bg-[#D5D5D5] max-sm:max-h-[27.6px]"></span>
            </span>
          </h2>
          <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1 max-sm:gap-[30px]">
            <Card className="rounded-[20px] border border-[#CECECE] bg-[#EDEDED]">
              <CardContent className="flex flex-col gap-4 p-4">
                <Image
                  alt="light"
                  src="/lights.png"
                  width={372}
                  height={395}
                  className="w-full"
                />
                <div className="flex flex-col gap-3 font-clashGrotesk leading-[120%] -tracking-[0.04em]">
                  <span className="text-[24px] text-[#0E1F38]">Impact</span>
                  <span className="text-[20px] text-[#8D8D8D]">
                    We impact younger generations by revealing greater
                    opportunities in web3 for brilliant minds to thrive.
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[20px] border border-[#CECECE] bg-[#EDEDED]">
              <CardContent className="flex flex-col gap-4 p-4">
                <Image
                  alt="daps"
                  src="/daps.svg"
                  width={372}
                  height={395}
                  className="w-full"
                />
                <div className="flex flex-col gap-3 font-clashGrotesk leading-[120%] -tracking-[0.04em]">
                  <span className="text-[24px] text-[#0E1F38]">Educate</span>
                  <span className="text-[20px] text-[#8D8D8D]">
                    By leveraging our resources, expertise, and passion, we
                    strive to inspire change and drive innovation.
                  </span>
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-[20px] border border-[#CECECE] bg-[#EDEDED]">
              <CardContent className="flex flex-col-reverse gap-4 p-4">
                <Image
                  alt="stairs"
                  src="/stairs.png"
                  width={372}
                  height={395}
                  className="w-full"
                />
                <div className="flex flex-col gap-3 font-clashGrotesk leading-[120%] -tracking-[0.04em]">
                  <span className="text-[24px] text-[#0E1F38]">Onboard</span>
                  <span className="text-[20px] text-[#8D8D8D]">
                    We onboard the younger generation by engaging them with
                    resources that spark their interest in Web3.
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="container flex flex-col pb-[52px] pt-[77px] max-sm:pt-0">
          <h2 className="mb-[56px] font-clashGrotesk text-[48px] font-normal leading-[90%] -tracking-[0.04em] text-[#121212] max-sm:mb-[53px] max-sm:text-[32px]">
            Some of our initiatives & achievements
          </h2>
          <Carousel className="-mr-[2rem] hidden max-sm:flex">
            <CarouselContent className="-ml-[22px]">
              <CarouselItem className="basis-[90%] pl-[22px]">
                <Card className="h-full rounded-[10px] bg-[#0E1F38]">
                  <CardContent className="flex flex-col p-[32px]">
                    <div className="mb-4 flex items-center gap-4 font-clashGrotesk text-[14px] font-medium leading-[17px] tracking-[0.1em] text-[#fafafa]">
                      <Image
                        alt="irl-icon"
                        src="irl-icon.svg"
                        width={16}
                        height={17}
                      />
                      IRL EVENT
                    </div>
                    <span className="mb-4 flex font-clashGrotesk text-[32px] font-medium leading-[100%] -tracking-[0.04em] text-white">
                      Web3 to High School Leavers
                    </span>
                    <span className="mb-[24px] flex font-clashGrotesk text-[20px] font-normal leading-[25px] -tracking-[0.04em] text-[#92A1B7]">
                      We visited two high schools to engage and educate more
                      than 300 students about Web3 and the career opportunities
                      it offers.
                    </span>
                    <span className="mb-[24px] flex font-clashGrotesk text-[20px] font-normal leading-[25px] -tracking-[0.04em] text-[#92A1B7]">
                      We empowered the high school students with Web3 education,
                      we aim to bridge the gap between traditional education and
                      the future of the internet.
                    </span>
                    <Button
                      variant="outline"
                      className="mb-4 flex items-center gap-2 rounded-full border-[#576A87] bg-transparent font-clashGrotesk text-[16px] font-medium text-[#fec726]"
                    >
                      Visit gallery
                      <Image
                        alt="right-arrow"
                        src="/right-arrow.svg"
                        width={16}
                        height={16}
                      />
                    </Button>
                    <span className="flex w-full items-center justify-center gap-1 text-center font-clashGrotesk text-[14px] text-[#92A1B7]">
                      Powered by Trybe
                      <Image
                        alt="trybe-logo"
                        src="/trybe-logo.svg"
                        width={20}
                        height={14}
                      />
                    </span>
                  </CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem className="basis-[90%] pl-[22px] pr-[2rem]">
                <Card className="h-full rounded-[10px] bg-[#C9C9C9]">
                  <CardContent className="flex flex-col p-[32px]">
                    <span className="mb-4 flex items-center gap-2 font-clashGrotesk text-[13.92px] font-medium tracking-[0.1em]">
                      <Image
                        alt="red-book"
                        src="/red-book.svg"
                        width={16}
                        height={17}
                      />
                      WEB3 RESOURCE
                    </span>
                    <span className="mb-[120px] flex font-clashGrotesk text-[31.81px] font-medium leading-[100%] -tracking-[0.04em] text-[0e1f38]">
                      e-Library by Thirdinternet
                    </span>
                    <div className="mt-auto">
                      <span className="mb-4 flex font-clashGrotesk text-[20px] font-normal -tracking-[0.04em] text-[#515151]">
                        Creating opportunities for younger generations, <br />
                        supporting their academics, and onboarding them into{" "}
                        <br />
                        the future of the internet.
                      </span>
                      <a href="https://www.thirdinternet.xyz/base-test" target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="outline"
                            className="flex w-full items-center gap-2 rounded-full border-transparent bg-[#B0B0B0] font-clashGrotesk text-[15.91px] font-medium -tracking-[0.04em] text-[#0e1f38]"
                          >
                            Visit e-library
                            <Image
                              alt="right-arrow-blue"
                              src="/right-arrow-blue.svg"
                              width={17}
                              height={17}
                            />
                          </Button>
                        </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
          </Carousel>

          <div className="mx-auto mb-[0px] flex items-center gap-4 max-sm:hidden">
            <Button
              onClick={() => setSlider(true)}
              variant="outline"
              className={`rounded-full font-clashGrotesk hover:text-[#0E1F38] ${slider ? "bg-[#FEC726] text-[#0E1F38] hover:bg-[#FEC726]" : "bg-[#D2D2D2] text-[#5C5C5C] hover:bg-[#FEC726]/20"} text-[16px] font-normal leading-[90%] -tracking-[0.04em]`}
            >
              Web3 to High School leavers
            </Button>
            <Button
              onClick={() => setSlider(false)}
              variant="outline"
              className={`rounded-full font-clashGrotesk hover:text-[#0E1F38] ${!slider ? "bg-[#FEC726] text-[#0E1F38] hover:bg-[#FEC726]" : "bg-[#D2D2D2] text-[#5C5C5C] hover:bg-[#FEC726]/20"} text-[16px] font-normal leading-[90%] -tracking-[0.04em]`}
            >
              e-Library by Thirdinternet
            </Button>
          </div>
          <div className="relative max-sm:hidden">
            <motion.div
              animate={{
                scale: !slider ? 1 : 0.9,
                y: !slider ? "15%" : "0%",
                zIndex: !slider ? 2 : 1,
                transition: { duration: 0.4 },
              }}
              className="relative flex w-full gap-[98px] rounded-[30px] bg-[#C9C9C9] pl-[95px] max-lg:p-[32px]"
            >
              <div className="flex flex-col gap-[47px] max-lg:hidden">
                <div className="rounded-b-[10px] bg-[#E4E4E4] px-[30px] py-[60px]">
                  <div className="flex flex-col gap-[57px]">
                    <Image
                      alt="book"
                      src="/book.svg"
                      width={170}
                      height={131}
                    />
                    <span></span>
                  </div>
                  <div className="font-clashGrotesk text-[23.86px] font-medium leading-[100%] -tracking-[0.04em] text-[#FE3C77]">
                    Our library parked with <br /> books varying from basic
                    <br />
                    education knowledge to <br /> blockchain education
                  </div>
                </div>
                <div className="flex flex-col rounded-t-[10px] bg-[#0E1F38] px-[30px] pt-[50px]">
                  <div className="mb-[5px] flex items-center gap-[5px] font-clashGrotesk text-[9.94px] font-normal leading-[100%] text-[#FEC726]">
                    <Image
                      alt="open-source"
                      src="/open-source.svg"
                      width={13}
                      height={13}
                    />
                    OPEN SOURCE CONTRIBUTION
                  </div>
                  <p className="mb-[12px] font-clashGrotesk text-[23.86px] font-medium leading-[100%] -tracking-[0.04em] text-white">
                    Help simplify web3 to <br /> anyone and everyone <br /> with
                    your knowledge <br /> base
                  </p>
                  <div className="flex max-w-[232px] flex-wrap items-center gap-[7.95px]">
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      Designers
                    </Badge>
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      Developers
                    </Badge>
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      Writers
                    </Badge>
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      Content creators
                    </Badge>
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      Marketers
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-[53px] flex max-w-[305px] flex-col gap-[30px] rounded-b-[10px] bg-[#0E1F38] px-[30px] pb-[30px] max-lg:hidden">
                  <div className="flex items-center gap-[8px]">
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      All builders
                    </Badge>
                    <Badge className="border-[#354D6E] bg-transparent font-clashGrotesk text-[11.93px] font-normal leading-[120%] text-[#fafafa]">
                      All creators
                    </Badge>
                  </div>
                  <Button
                    variant="outline"
                    className="rounded-full border-transparent bg-[#01BD82] font-spaceGrotesk text-[15.91px] font-medium -tracking-[0.06em] text-[#0e1f38]"
                  >
                    Contribute
                  </Button>
                </div>
                <div className="mb-[40px] flex flex-col max-lg:mb-0">
                  <span className="mb-4 flex items-center gap-2 font-clashGrotesk text-[13.92px] font-medium tracking-[0.1em]">
                    <Image
                      alt="web-book"
                      src="/web-book.svg"
                      width={16}
                      height={17}
                    />
                    WEB3 RESOURCE
                  </span>
                  <span className="flex font-clashGrotesk text-[31.81px] font-medium leading-[100%] -tracking-[0.04em] text-[0e1f38]">
                    e-Library by Thirdinternet
                  </span>
                  <span className="mb-4 flex font-clashGrotesk text-[20px] font-normal -tracking-[0.04em] text-[#515151]">
                    Creating opportunities for younger generations, <br />
                    supporting their academics, and onboarding them into <br />
                    the future of the internet.
                  </span>
                 <a href="https://www.thirdinternet.xyz/base-test" target="_blank" rel="noopener noreferrer">
                        <Button
                          variant="outline"
                          className="flex w-full items-center gap-2 rounded-full border-transparent bg-[#B0B0B0] font-clashGrotesk text-[15.91px] font-medium -tracking-[0.04em] text-[#0e1f38]"
                        >
                          Visit e-library
                          <Image
                            alt="right-arrow-blue"
                            src="/right-arrow-blue.svg"
                            width={17}
                            height={17}
                          />
                        </Button>
                      </a>

                </div>
                <div className="mr-auto flex flex-col rounded-[10px] bg-[#FEC726] px-[30px] py-[27px] max-lg:hidden">
                  <div className="mb-4 flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-transparent bg-[#FFD96A] font-clashGrotesk text-[12px] font-normal leading-[120%] text-[#121212]"
                    >
                      WAEC
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-transparent bg-[#FFD96A] font-clashGrotesk text-[12px] font-normal leading-[120%] text-[#121212]"
                    >
                      JAMB
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-transparent bg-[#FFD96A] font-clashGrotesk text-[12px] font-normal leading-[120%] text-[#121212]"
                    >
                      NECO
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-transparent bg-[#FFD96A] font-clashGrotesk text-[12px] font-normal leading-[120%] text-[#121212]"
                    >
                      Post UTME
                    </Badge>
                  </div>
                  <p className="mb-[30px] font-clashGrotesk text-[24px] font-medium leading-[100%] -tracking-[0.04em] text-[#121212]">
                    Learn with our Onchain- <br />
                    Based-Test (OBT) incl. <br /> Past questions and <br />
                    assessments
                  </p>
                  <Button className="h-auto rounded-full bg-[#FE3C77] py-2 text-[16px] font-medium leading-[20px] -tracking-[0.06em] text-[#fafafa]">
                    Take test
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              animate={{
                scale: !slider ? 0.9 : 1,
                y: !slider ? "0%" : "15%",
                zIndex: !slider ? 1 : 2,
                transition: { duration: 0.4 },
              }}
              className="absolute top-0 w-full rounded-[30px] bg-[#0E1F38] px-[97px] py-[71px] max-lg:p-[32px]"
            >
              <div className="relative flex flex-col gap-[236px] rounded-[20px] max-xl:gap-[17vw] max-lg:flex-col-reverse max-lg:gap-[24px]">
                <Image
                  alt="people"
                  src="/people.webp"
                  width={1054}
                  height={534}
                  className="absolute w-full max-xl:top-[40px] max-lg:hidden"
                />

                <div className="relative ml-auto flex max-w-[469px] flex-col gap-[35px] max-xl:max-w-[340px] max-xl:gap-[6px] max-lg:max-w-none max-lg:gap-[24px]">
                  <span className="font-clashGrotesk text-[20px] font-normal leading-[25px] -tracking-[0.04em] text-[#92A1B7]">
                    We empowered the high school students with Web3 education,
                    we aim to bridge the gap between traditional education and
                    the future of the internet.
                  </span>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 rounded-full border-[#576A87] bg-transparent font-clashGrotesk text-[16px] font-medium text-[#fec726]"
                    >
                      Visit gallery
                      <Image
                        alt="right-arrow"
                        src="/right-arrow.svg"
                        width={16}
                        height={16}
                      />
                    </Button>
                    <span className="flex items-center gap-1 font-clashGrotesk text-[14px] text-[#92A1B7]">
                      Powered by Trybe
                      <Image
                        alt="trybe-logo"
                        src="/trybe-logo.svg"
                        width={20}
                        height={14}
                      />
                    </span>
                  </div>
                </div>
                <div className="relative flex max-w-[416px] flex-col gap-4 pt-[20px] max-xl:max-w-[32vw] max-lg:max-w-none">
                  <div className="flex items-center gap-4 font-clashGrotesk text-[14px] font-medium leading-[17px] tracking-[0.1em] text-[#fafafa]">
                    <Image
                      alt="irl-icon"
                      src="irl-icon.svg"
                      width={16}
                      height={17}
                    />
                    IRL EVENT
                  </div>

                  <span className="font-clashGrotesk text-[32px] font-medium leading-[100%] -tracking-[0.04em] text-white">
                    Web3 to High School Leavers
                  </span>
                  <span className="font-clashGrotesk text-[20px] font-normal leading-[25px] -tracking-[0.04em] text-[#92A1B7]">
                    We visited two high schools to engage and educate more than
                    300 students about Web3 and the career opportunities it
                    offers.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
