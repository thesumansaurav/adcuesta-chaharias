"use client";

import { BestSellerData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

const BestSellerCard = ({ imageUrl }: { imageUrl: StaticImageData }) => {
  return (
    <div className="">
      <Image
        className="rounded-md h-80 object-cover w-80"
        src={imageUrl}
        width={300}
        height={300}
        alt="Placeholder"
      />
    </div>
  );
};

const BestSeller = () => {
  return (
    <InnerWrapper>
      <Heading>BestSeller</Heading>

    <div className="hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {BestSellerData.slice(0, 7).map((product) => (
          <BestSellerCard key={product.id} imageUrl={product.imagePath} />
        ))}
      </div>
    </div>

      <div className="block md:hidden">
              <Swiper
                loop={true}
                cssMode={true}
                slidesPerView={1.2}
                slidesPerGroup={1}
                spaceBetween= {16}
              >
                {BestSellerData.map((product) => (
                  <SwiperSlide className="product-box" key={product.id}>
                    <BestSellerCard imageUrl={product.imagePath} />
                  </SwiperSlide>
                ))}
              </Swiper>
      </div>

    </InnerWrapper>
  );
};

export default BestSeller;
