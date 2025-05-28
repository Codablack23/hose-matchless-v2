import { useState } from "react";

export default function Team() {
  const [slideIndex, setSlideIndex] = useState(0); // Start from the first slide

  const plusSlides = (n: number) => {
    setSlideIndex((prevIndex) => {
      const newIndex = (prevIndex + n + 4) % 4; // Ensure it wraps around correctly
      return newIndex;
    });
};


return (
    <div className="md:mt-[500px] mt-20 md:mx-[80px] mx-6" id="tean">
        <h1 className="md:text-[40px] py-6 text-[32px] font-extrabold">Meet the Team</h1>

    <div>

      <div className="">
        <div className={`mySlides fade ${slideIndex === 0 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">
                <p>C-Simon is a creative force in entertainment and digital tech, driving innovation at Hose Matchless Global LTD</p>
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <a href="https://www.tiktok.com/@hosecanada?_t=8rX22vMw8TY&_r=1" target="_blank">
                    <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  </a>
                 <a href="https://www.instagram.com/hosecanada/profilecard/?igsh=eTFxd2tyNDF6OTNo" target="_blank">
                   <img className="team" src="/assets/svg/ig-white.svg" alt="ig" />
                 </a>
                 <a href="https://x.com/hoseltd/status/1702299935037653248?s=46&t=fcw5NUP8HPMhqtlja-nFuA">
                   <img className="team" src="/assets/svg/x-white.svg" alt="x" />
                 </a>
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="https://www.tiktok.com/t/ZMhkdNV9C/">[Join Here]</a></p>
                </div>
            </div>

            <img className="max-sm:mt-8" src="/assets/img/team-img1.png" alt="team-img" />
          </div>
        </div>


        <div className={`mySlides fade ${slideIndex === 1 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] flex-1 text-[20px]">
                <p>nancy.k642 is a devoted TikTok Creator Network Manager committed to assisting creators across North America. With a strong understanding of trends and audience engagement, she helps influencers enhance their TikTok presence through customized strategies and brand collaborations.</p>
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <a href="https://www.tiktok.com/@nancy.k642?_t=ZT-8vCjjcRuMG6&_r=1" target="_blank" rel="noopener noreferrer">
                    <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  </a>
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="https://www.tiktok.com/t/ZMkdBfSs5/" target="_blank">[Join Here]</a></p>
                </div>
            </div>
            <div className="w-[300px] h-[300px] rounded-full">
              <img className="max-sm:mt-8 rounded-full h-[300px] w-full object-cover" src="/assets/img/nancy.jpg" alt="team-img2" />
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 2 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] flex-1 text-[20px]">
                <p>veratafon3@gmail.com is a dedicated TikTok Creator Network Manager helping creators across North America grow and succeed. She specializes in teaching monetization, account growth, and leveling up your TikTok journey. With a sharp eye for trends and engagement, she guides influencers through customized strategies and brand collaborations.</p>
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <a href="https://www.tiktok.com/@veratafon3gmail.com?_t=ZM-8vMPySyJvb4&_r=1 " target="_blank" rel="noopener noreferrer">
                      <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />  
                  </a>
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="https://www.tiktok.com/t/ZMBfVrpMa/">[Join Here]</a></p>
                </div>
            </div>
              <div className="w-[300px] h-[300px] rounded-full">
              <img className="max-sm:mt-8 rounded-full h-[300px] w-full object-cover" src="/assets/img/veteratafon.jpg" alt="team-img2" />
            </div>
          </div>
        </div>

        <div className={`mySlides fade ${slideIndex === 3 ? 'block' : 'hidden'} `}>
        <div className="md:flex md:flex-row flex-col items-center gap-10 py-24 px-10 md:mt-2 rounded-xl bg-[#002D62]">
            <div className="text-[#ffff] text-[20px]">
                <p>Baba Rex is dedicated, organized, and eager to learn. He communicates effectively in groups and one-on-one, listens well, embraces new ideas, and excels in solving social media challenges.  
                </p>
                <div className="flex mt-10 gap-2 items-center max-sm:w-[40px]">
                  <a href="https://www.tiktok.com/@onyeozi_rex?_t=8rXLCZmamgq&_r=1" target="_blank" rel="noopener noreferrer">
                    <img className="team" src="/assets/svg/tiktok-white.svg" alt="tiktok" />
                  </a>
                  <p className="max-sm:text-[14px] ml-auto w-96">Creator Network <a href="https://www.tiktok.com/t/ZMhAw7AMN/">[Join Here]</a></p>
                </div>

            </div>
              <img className="max-sm:mt-8" src="/assets/img/team-img4.png" alt="team-img4" />
          </div>
        </div>
        {/* Add more slides as needed */}
      </div>


    </div>

          <div className="flex items-center justify-end gap-4 mt-4">
              <div onClick={() => plusSlides(-1)} className="md:w-[82px] md:h-[89px] w-[49px] cursor-pointer h-[54px] p-3 md:p-7 rounded-full bg-[#002D62]">
                <img src="/assets/svg/arrow-left.svg" alt="arrow-left" />
              </div>
              <div onClick={() => plusSlides(1)} className="md:w-[82px] md:h-[89px] w-[49px] cursor-pointer h-[54px] p-3 md:p-7  rounded-full bg-[#002D62]">
                <img src="/assets/svg/arrow-right.svg" alt="arrow-right" />
              </div>
          </div>
    </div>
  )
}
