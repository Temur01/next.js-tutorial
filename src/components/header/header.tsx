import Image from "next/image";
import { VscAccount } from "react-icons/vsc";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBellMinus } from "react-icons/bi";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className={`${scrolled && "bg-[#E10856] shadow-lg"}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <Image
          src={"/logo.svg"}
          alt="logo-image"
          className="cursor-pointer object-contain "
          width={56}
          height={56}
        />
        <ul className="space-x-4 md:flex hidden">
          <li className="navLink">Home</li>
          <li className="navLink">Movies</li>
          <li className="navLink">TV Shows</li>
          <li className="navLink">New</li>
          <li className="navLink">Popular</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light ">
        <AiOutlineSearch className="h-6 w-6 cursor-pointer" />
        <p className="hidden lg:inline">Kids</p>
        <BiBellMinus className="h-6 w-6 cursor-pointer" />
        <Link href={"/account"}>
          <AiOutlineSearch className="h-6 w-6 cursor-pointer" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
