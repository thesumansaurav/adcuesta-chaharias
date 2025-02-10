import Image from "next/image";
import TnC from "../../../public/assets/1.png"; // Replace with your image path

const AboutUs = () => {
  return (
    <div className="w-[90%] lg:w-[80%] m-auto py-10">
      <p className="text-3xl font-semibold">About us</p>

      <div className="flex flex-col lg:flex-row justify-between items-center my-10">
        {/* Content Section */}
        <div className="w-full lg:w-[50%] px-4">
          <p className="text-base font-semibold mt-2">Chaharias: A Legacy of Fashion and Tradition Since 1947</p> <br />
          <p>Welcome to <span className="text-base font-semibold mt-2">Chaharias Wholesale Bazaar</span>, a fashion destination serving the people of Padrauna, Uttar Pradesh, since 1947. We are proud to have been part of your celebrations and everyday life for over seven decades. </p>
          <br/>
          <p>At Chaharias, we offer a wide range of clothing for everyone in the family. From <span className="text-base font-semibold mt-2">beautiful sarees, suits, and lehengas</span>  for women to
          <span className="text-base font-semibold mt-2">stylish menswear</span> and <span className="text-base font-semibold mt-2">comfortable casual wear</span>, we have something for every occasion. We also carry an extensive collection of
          <span className="text-base font-semibold mt-2">dress materials, accessories</span> and <span className="text-base font-semibold mt-2">handloom fabrics</span> for those who prefer to customize their style.
          </p> <br/>
          

          <p>Our focus has always been on providing <span className="text-base font-semibold mt-2">quality clothing</span> at <span className="text-base font-semibold mt-2">affordable prices</span>, ensuring that everyone can find the perfect outfit without compromising on style or budget. Over the years, we have built a strong bond with our customers by offering personalized service and helping them choose outfits that make every occasion special.</p>
          <br />

          <p>At Chaharias, we believe that fashion is for everyone, and we are committed to bringing you the latest trends while keeping traditional values at the heart of everything we do.</p>
          <br />

          <p>Thank you for being a part of our journey. We look forward to serving you with the same dedication and love for years to come.</p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[40%] px-4">
          <Image
            src={TnC}
            className="h-[26vh] lg:h-[70vh] rounded-xl shadow-md object-cover w-full"
            alt="Terms and Conditions"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
