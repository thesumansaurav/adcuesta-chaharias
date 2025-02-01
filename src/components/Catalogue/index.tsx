"use client";
import { IProduct } from "@/lib/types/Product";
import Image from "next/image";
import { FC } from "react";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";
import { CatalogData } from "@/lib/data";

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';


type CardProps = {
  product: IProduct;
};

const Card: FC<CardProps> = ({ product }) => {
  return (
    <div className="">
      <Image
        className="rounded-md h-96 m-auto"
        src={product.imagePath}
        width={300}
        height={300}
        alt="Placeholder"
        placeholder="blur"
      />
      <div className="py-4">
        <p className="text-xl font-semibold text-center">{product.title}</p>
        <p className="text-center text-lg ">{product.description} </p>
      </div>
    </div>
  );
};

const Catalogue = () => {
  return (
    <InnerWrapper>
      <Heading>Catalogue</Heading>
      <div className="hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {CatalogData.map((product, index) => (
            <Card key={index} product={product} />
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
          {CatalogData.map((product, index) => (
            <SwiperSlide className="product-box" key={index}> {/* Set the key on SwiperSlide */}
              <Card product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </InnerWrapper>
  );
};

export default Catalogue;
