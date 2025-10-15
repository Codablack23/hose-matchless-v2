import { useEffect, useState } from "react";

export default function Hero() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/assets/img/hero-img1.png",
    "/assets/img/hero-img2.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="main-container" id="home">

      <div className="relative flex flex-col-reverse items-start gap-20 md:flex-row">
        <div>
          <div className="md:text-[50px] text-[36px]">
            <span className="font-extrabold">Empowering <br /> Talent</span> and <br />
            <span className="font-extrabold">Innovating<br /> Entertainment<br /> Globally</span>
          </div>

          <div className="flex flex-col items-start">
            <div className="relative">
              <a href="https://www.tiktok.com/t/ZMhkdNV9C/">
              <button className="btn1">Join Our Creator Network<br /> (UK)</button>
              </a>
              <div className="overlay" ></div>
            </div>

            <div className="relative">
               <a href="https://www.tiktok.com/t/ZS2Axk2LY/">
                  <button className="btn2">Join Our Creator Network <br/> (US and Canada)</button>
                </a>
              <div className="overlay" ></div>
            </div>
            <div className="relative">
               <a href="https://www.tiktok.com/t/ZMkpgGCQT/">
                  <button className="btn2">Join Our Creator Network <br/> (Dubai & MENA)</button>
                </a>
              <div className="overlay" ></div>
            </div>
            <div className="relative">
               <a href="https://www.tiktok.com/t/ZMSHyxHEB/">
                  <button className="btn2 max-w-[200px]">Join Our Creator Network ( GERMANY)</button>
                </a>
              <div className="overlay" ></div>
            </div>
            <div className="relative">
               <a href="https://www.tiktok.com/t/ZMAmVQAnH/">
                  <button className="btn2 max-w-[200px]">JOIN SOLOMON ISLANDS & CONGO AGENCY </button>
                </a>
              <div className="overlay" ></div>
            </div>
            <div className="relative">
               <a href="https://www.tiktok.com/t/ZMAm3cETy/">
                  <button className="btn2 max-w-[200px]">Join Our Creator Network ( FRANCE)</button>
                </a>
              <div className="overlay" ></div>
            </div>
          </div>
        </div>

        <div className="slides">
          <div className={`slide fade ${currentSlide === 0 ? 'block' : 'hidden'}`}>
            <img src="/assets/img/hero-img1.png" alt="hero-img-1" />
          </div>
          <div className={`slide fade ${currentSlide === 1 ? 'block' : 'hidden'}`}>
            <img src="/assets/img/hero-img2.png" alt="hero-img-2" />
          </div>
        </div>

      </div>

      <div
        className="sticky-btn md:w-[82px] md:h-[89px] w-[49px] h-[54px] p-3 z-10 md:p-7 rounded-full sticky bg-[#002D62] cursor-pointer"
        onClick={scrollToTop}
      >
        <img src="/assets/svg/arrow-up.svg" alt="arrow-right" />
      </div>

    </div>
  );
}
