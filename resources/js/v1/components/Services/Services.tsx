
export default function Services() {
  return (
    <div id="services" className="main-container relative py-10 px-5 rounded-xl bg-[#002D62]">
      <div className="text-[#ffff]">
        <h1 className="md:text-[40px] py-6 text-[32px] font-extrabold">Services</h1>
      </div>

      <div className="md:grid md:grid-cols-4 md:absolute top-0 gap-10 md:px-8 px-0">
        
        <div></div>

        <div className=" md:col-span-3 min-h-96 py-8 px-5 md:mt-20 mt-6 rounded-xl bg-[#F1F1F1] drop-shadow-md">
        <p className="md:mx-10 text-[#002D62] leading-8 md:text-[26px] text-[22px] font-extrabold mb-4">Creator Network & <br /> Social Media Management</p>
          
          <div className="w-full md:px-10 px-4 py-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[24px] text-[22px] md:font-bold font-medium">
            <p>Creator <br  className="md:hidden"/> Network <br  className="md:hidden"/> Management</p>
          </div>
          <div className="flex flex-col items-center">
          <div className="mt-2 md:mx-10">
          <p>We help young creators expand their reach by providing the platform, tools, and mentorship needed to grow their audience and monetize their content.
          </p>

          <ul className="mt-4">
              <li className="list-decimal list-inside">Talent discovery and development</li>
              <li className="list-decimal list-inside">Audience growth strategies</li>
              <li className="list-decimal list-inside">Monetization opportunities</li>
              <li className="list-decimal list-inside">Live event management and participation</li>
            </ul>
          </div>         


          <div className="mt-20 w-full md:px-10  px-4 py-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[24px] text-[22px] md:font-bold font-medium">
          <p>Social Media Management</p>
          </div>
          <div className="flex flex-col items-center">
              <div className="mt-2 md:mx-10">
              <p>
              Offering creators the resources and guidance to maximize their online presence across social media platforms, ensuring consistent growth and brand development          
              </p>  
              <button className="py-3 mr-auto md:px-20 px-4 max-sm:w-full md:text-[16px] text-[18px] rounded-xl mt-10 md:font-bold font-medium inset-0 bg-[#002D62] text-[#ffff]">Learn More</button>  
              </div>
          </div>


          <div className="mt-20 w-full md:px-10  px-4 py-4 rounded-xl bg-[#002D62] text-[#ffff] md:text-[24px] text-[22px] md:font-bold font-medium">
          <p>International <br className="md:hidden" /> Events & <br className="md:hidden" /> Summits</p>
          </div>
          <div className="flex flex-col items-center">
              <div className="mt-2 md:mx-10">
              <p>
              Our international events connect global talent, foster collaboration, and provide opportunities for creators to engage with audiences worldwide.              </p>  
              </div>
          </div>
          

        </div>
      
      </div>

      </div>

  </div>
  )
}
