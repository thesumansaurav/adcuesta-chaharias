"use client";

import { CatalogData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

type PRODUCT = {
  id: number; title: string; description: string; imagePath: StaticImageData;
}

const BestSellerCard = ({ product }: { product: PRODUCT }) => {
  console.log(product)
  return (
    <div className="">
      <Image
        className="rounded-md h-80 object-cover w-80"
        src={
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
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
      <Heading>BestSellers</Heading>

    <div className="hidden md:block">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {CatalogData.slice(0, 4).map((product) => (
          <BestSellerCard key={product.id} product={product} />
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
                {CatalogData.map((product) => (
                  <SwiperSlide className="product-box" key={product.id}>
                    <BestSellerCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
      </div>

    </InnerWrapper>
  );
};

export default BestSeller;
