"use client";

import useScreenSize from "@/lib/hooks/useScreenSize";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const items = [
  {name: "Home", link: "/"},
  {name: "About us", link: "aboutus"},
  {name: "Men", link: ""},
  {name: "Women", link: ""},
  {name: "Home Furnishing", link: ""},
  {name: "Brands", link: ""},
  {name: "Contact", link: ""}
];
const socials = [FaInstagram, FaFacebook, FaYoutube];

const Navbar = () => {
  const { isDesktop } = useScreenSize();

  if (isDesktop) return <DesktopNavbar items={items} socials={socials} />;
  return <MobileNavbar items={items} socials={socials} />;
};

export default Navbar;
