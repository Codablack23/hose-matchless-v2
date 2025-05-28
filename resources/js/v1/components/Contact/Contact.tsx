
export default function Contact() {
  return (
    <div id="contact" className="bg-[#FFD700]">

      <div className="md:mt-36 mt-20 md:mx-[80px] mx-6 py-16 text-center ">
        <h1 className="md:text-[40px] text-[34px] font-extrabold text-[#002D62]">Contact Us</h1>

          <div className="md:flex md:flex-row md:mx-14 mt-10 gap-20">


              <div className="md:flex md:items-center md:gap-8 mt-6 max-sm:min-h-72 flex-col py-5 px-4 w-full rounded-xl bg-[#ffff] drop-shadow-md">     
                  <div className="px-5 w-full md:py-[18px] py-2 rounded-xl bg-[#002D62] text-[#ffff] md:text-[20px] text-[22px] font-extrabold ">
                    <div className="flex items-center gap-2">
                      <img className="w-10" src="/assets/svg/canada.svg" alt="canada" />
                      <p className="text-[16px]">Canada Office</p>
                    </div>
                  </div>

                  <div className="max-sm:mt-6 text-start text-[16px] font-semibold">

                      <div className="flex items-start gap-4">
                        <img className="" src="/assets/svg/location.svg" alt="location" />
                        <p className="">40 County Court Blvd
                            Brampton ON L6W 3X5
                            Canada
                        </p>
                      </div>

                      <div className="flex items-center mt-3 gap-2 max-sm:mt-2">
                        <img className="" src="/assets/svg/phone.svg" alt="phone"/>
                        <p className="">+16476711360
                        </p>
                      </div>

                      <div className="flex items-center mt-3 gap-3 max-sm:mt-2">
                        <img className="" src="/assets/svg/mail.svg" alt="mail"/>
                        <p className="">hosematchless@gmail.com
                        </p>
                      </div>

                  

                  </div>
                  
              </div>

              <div className="md:flex md:items-center md:gap-8 mt-6 max-sm:min-h-72 flex-col py-5 px-4 w-full rounded-xl bg-[#ffff] drop-shadow-md">     
                  <div className="px-5 w-full md:py-[18px] py-2 rounded-xl bg-[#002D62] text-[#ffff] md:text-[20px] text-[22px] font-extrabold ">
                    <div className="flex items-center gap-2">
                      <img className="w-10" src="/assets/svg/uk.svg" alt="uk" />
                      <p className="text-[16px]">UK Office</p>
                    </div>
                  </div>

                  <div className="max-sm:mt-6 text-start text-[16px] font-semibold">

                      <div className="flex items-start gap-4">
                        <img className="" src="/assets/svg/location.svg" alt="location" />
                        <p className="">128 City Road, London EC1V 2NX
                        </p>
                      </div>

                      <div className="flex items-start mt-3 gap-2 max-sm:mt-2">
                        <img className="" src="/assets/svg/phone.svg" alt="phone"/>
                        <p className="">+44 20 1234 5678
                        </p>
                      </div>

                      <div className="flex items-center mt-3 gap-4 max-sm:mt-2">
                        <img className="" src="/assets/svg/mail.svg" alt="mail"/>
                        <p className="">info@hosematchless.com
                        </p>
                      </div>

                  

                  </div>
                  
              </div>

              <div className="md:flex md:items-center md:gap-8 mt-6 max-sm:min-h-72 flex-col py-5 px-4 w-full rounded-xl bg-[#ffff] drop-shadow-md">     
                  <div className="md:pr-32 px-5 w-full md:py-[16px] py-2 rounded-xl bg-[#002D62] text-[#ffff] md:text-[20px] text-[22px] font-extrabold ">
                    <div className="flex items-center py-2">
                      <p className="text-[16px]">Follow Us</p>
                    </div>
                  </div>

                  <div className="max-sm:mt-6 flex md:flex-wrap gap-4">

                      <div className="flex items-center gap-2 max-sm:mt-2">
                        <a href="https://www.instagram.com/hosecanada/profilecard/?igsh=eTFxd2tyNDF6OTNo"><img className="w-16" src="/assets/svg/ig.svg" alt="ig" /></a>
                      </div>

                      <div className="flex items-center gap-2 max-sm:mt-2">
                        <a href="https://www.tiktok.com/@hosecanada?_t=8rX22vMw8TY&_r=1"><img className="w-16" src="/assets/svg/tiktok.svg" alt="tiktok"/></a>
                      </div>

                      <div className="flex items-center gap-2 max-sm:mt-2">
                        <a href="https://www.facebook.com/Simsaintv?mibextid=LQQJ4d">
                          <img className="w-16" src="/assets/svg/facebook.svg" alt="facebook"/>
                        </a>
                      </div>

                      <div className="flex items-center gap-2 max-sm:mt-2">
                        <a href="https://www.threads.net/@hosecanada">
                              <img className="w-16" src="/assets/svg/threads.svg" alt="threads"/>
                        </a>
                      </div>

                      <div className="flex items-center gap-2 max-sm:mt-2">
                        <a href="https://x.com/hoseltd/status/1702299935037653248?s=46&t=fcw5NUP8HPMhqtlja-nFuA">
                          <img className="w-16" src="/assets/svg/x.svg" alt="x"/>
                        </a>
                      </div>

                  

                  </div>
                  
              </div>

      
          </div>

          <div className="bg-[#008080] md:mx-14 mt-6 rounded-xl py-10 px-6">
            <div>
              
              <h1 className="md:text-[40px] text-[24px] font-extrabold text-[#ffff] mb-6 ">Contact Form</h1>

              <form action="">
                <div className="md:flex w-full items-center gap-4">
                <input className="w-full mb-4 p-4 rounded-2xl " type="text" placeholder="Name" />

                <input className="w-full mb-4 p-4 rounded-2xl" type="email" placeholder="Email" />

                <input className="w-full mb-4 p-4 rounded-2xl" type="text" placeholder="Subject" />
                </div>

                <div className="px-4 bg-white rounded-2xl   ">
                <textarea className="py-4 w-full outline-none" placeholder="Message" />
                <button className="bg-[#008080] font-medium text-[#ffff] text-[20px] md:py-4 md:px-8 p-3 rounded-2xl max-sm:w-full mb-6 md:ml-[860px]">Send</button>
                </div>

              </form>
            </div>
          </div>


        </div>
    </div>
    
)
}
