import { BestSellerData } from "@/lib/data";
import Image, { StaticImageData } from "next/image";
import Heading from "../Heading";
import InnerWrapper from "../InnerWrapper";

const BestSellerCard = ({ imageUrl }: { imageUrl: StaticImageData }) => {
  return (
    <div className="">
      <Image
        className="rounded-md object-cover m-auto"
        src={imageUrl}
        width={300}
        height={300}
        alt="Placeholder"
        placeholder="blur"
      />
    </div>
  );
};

const BestSeller = () => {
  return (
    <InnerWrapper>
      <Heading>Best Seller</Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {BestSellerData.slice(0, 4).map((product) => (
          <BestSellerCard key={product.id} imageUrl={product.imagePath}  />
        ))}
      </div>
    </InnerWrapper>
  );
};

export default BestSeller;
