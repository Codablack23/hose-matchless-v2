import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="bg-[#002D62] py-8 w-full">
        <div className="flex items-center gap-56 ml-8 md:ml-20">
          <div className="flex flex-row logo">
            <img
              className="mr-5 cursor-pointer menu lg:hidden"
              src="/assets/svg/menu.svg"
              alt="menu"
              onClick={toggleMenu}
            />
            <a href="#" className="flex items-center">
              <img className="logo" src="/assets/svg/hose-logo.svg" alt="logo" />
              <img className="pl-2 logo-name md:pl-4" src="/assets/img/logo-name.png" alt="logo-name" />
            </a>
          </div>

          <div className="hidden gap-20 links lg:flex">
            <a href="#"><p>Home</p></a>
            <a href="#about"><p>About Us</p></a>
            <a href="#services"><p>Services</p></a>
            <a href="#events"><p>Events</p></a>
            <a href="#contact"><p>Contact Us</p></a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu py-6 bg-[#ffff] mt-10 rounded-tr-3xl lg:hidden">
          <div className="flex flex-col px-6">
            <button onClick={toggleMenu} className="mb-10 ml-auto">X</button>

            <a href="#"><p className="bg-[#002D62] px-6 font-medium text-[#ffff] text-[19px] py-2 rounded-2xl w-full mb-5">Home</p></a>
            <a href="#about"><p className="bg-[#002D62] px-6 font-medium text-[#ffff] text-[19px] py-2 rounded-2xl w-full mb-5">About Us</p></a>
            <a href="#services"><p className="bg-[#002D62] px-6 font-medium text-[#ffff] text-[19px] py-2 rounded-2xl w-full mb-5">Services</p></a>
            <a href="#events"><p className="bg-[#002D62] px-6 font-medium text-[#ffff] text-[19px] py-2 rounded-2xl w-full mb-5">Events</p></a>
            <a href="#contact"><p className="bg-[#002D62] px-6 font-medium text-[#ffff] text-[19px] py-2 rounded-2xl w-full mb-5">Contact Us</p></a>
          </div>
        </div>
      )}
    </div>
  );
}
