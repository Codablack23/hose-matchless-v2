
export default function Intro() {
  return (
    <div className="main-container">

      <div className="gap-10">
        <h1 className="md:text-[40px] text-[32px] font-extrabold text-[#002D62]">Introduction to <br /> HOSE MATCHLESS GLOBAL LTD</h1>

        <div className="md:py-20 py-10 px-8 mt-8 rounded-xl bg-[#002D62] text-[#ffff]" >
          <p className="md:text-[22px] text-[15px]">We Operate between <span className="font-bold"> Canada, United Kingdom,</span>  and the <span className="font-bold">United States,</span> <br className="md:hidden" />
          <span className="font-bold hose-yellow"> HOSE MATCHLESS GLOBAL LTD</span> is a dynamic enterprise focused on creating opportunities for young talent in the entertainment industry and hosting international events.</p>

          <div className="flex flex-row justify-around mt-6">
            <img className="md:w-[500px] rounded-2xl" src="/assets/svg/canada.svg" alt="canada"/>
            <img className="md:w-[500px] rounded-2xl" src="/assets/svg/uk.svg" alt="uk"/>
            <img className="md:w-[500px] rounded-2xl" src="/assets/svg/us.svg" alt="us"/>
          </div>
        </div>



        <div className="relative py-10 mt-20 ">

          <div className="text-[#ffff] min-h-[150px] rounded-xl  px-5 pt-10 pb-10 bg-[#002D62]">
            <h1 className="md:text-[36px] text-[26px] font-extrabold">Core Services</h1>
          </div>



          <div className="gap-10 px-0 -mt-28 md:grid md:grid-cols-10 md:px-8">
            <div></div>

            <div className="min-h-96 md:col-span-3 py-8 px-5 md:mt-20 mt-12 rounded-xl bg-[#F1F1F1] drop-shadow-md">
              <div className="h-28 px-5 pt-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[19px] text-[19px] font-bold">
                <p>Creator Network <br /> & Social Media <br /> Management</p>
              </div>
              <div className="flex flex-col items-center">
              <p className="mt-6">
              We specialize in discovering and nurturing young talent, organizing international events, managing creator networks, and providing social media management tools to help creators grow and succeed
              </p>
                <a className="block w-full" href="https://www.tiktok.com/t/ZMhkdNV9C/">
                  <button className="py-3 w-full px-3 md:text-[18px] text-[14px] rounded-xl mt-10 font-bold inset-0 bg-[#002D62] text-[#ffff]">Join Our Creator Network <br /> UK</button>
                </a>
              </div>

            </div>
            <div className="min-h-96 md:col-span-3 py-8 px-5 md:mt-20 mt-12 rounded-xl bg-[#F1F1F1] drop-shadow-md">
              <div className="h-28 px-5 pt-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[19px] text-[19px] font-bold">
                <p>FAVOURITED AGENCY</p>
              </div>
              <div className="flex flex-col items-center">
              <p className="mt-6">
              We specialize in discovering and nurturing young talent, organizing international events, managing creator networks, and providing social media management tools to help creators grow and succeed
              </p>
                <a className="block w-full" href="https://fav.gg/AGec075a59-1f8a-48cd-a1df-ea8776fb4e31">
                  <button className="py-3 w-full px-3 md:text-[18px] text-[14px] rounded-xl mt-10 font-bold inset-0 bg-[#002D62] text-[#ffff] capitalize">{"JOIN OUR FAVOURITED AGENCY".toLowerCase()} </button>
                </a>
              </div>

            </div>

            <div className="min-h-96 md:col-span-3 py-8 px-5 md:mt-20 mt-12 rounded-xl bg-[#F1F1F1] drop-shadow-md">
              <div className="h-28 px-5 pt-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[19px] text-[19px] font-bold">
                  <p>Event <br /> Hosting</p>
              </div>
              <div className="flex flex-col items-center">
              <p className="mt-6">
              We specialize in discovering and nurturing young talent, organizing international events, managing creator networks, and providing social media management tools to help creators grow and succeed
              </p>
                <a className="block w-full" href="https://www.tiktok.com/t/ZS2Axk2LY/">
                  <button className="py-3 px-3 w-full md:text-[18px] text-[14px] rounded-xl mt-10 font-bold inset-0 bg-[#002D62] text-[#ffff]">Join Our Creator Network <br /> US and Canada</button>
                </a>
              </div>

            </div>
          </div>


        </div>


      </div>
    </div>
  )
}
