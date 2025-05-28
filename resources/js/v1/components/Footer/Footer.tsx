
export default function Footer() {
  return (
    <div className="bg-[#002D62]">
      <div className="md:mx-[135px] mx-6 py-16 ">


          <div className="md:grid md:grid-cols-4 items-start">

                <div>
                    <h3 className="text-[#FFD700] text-[18px] mb-4 font-extrabold">Quick Links</h3>
                    <div className="max-sm:grid text-[#ffff] max-sm:grid-cols-2 ">
                    <a className="mb-4 block" href="#home">Home</a>
                    <a className="mb-4 block" href="#about">About Us</a>
                    <a className="mb-4 block" href="#services">Services</a>
                    <a className="mb-4 block" href="#events">Events</a>
                    <a className="mb-4 block" href="#contact">Contact Us</a>
                    </div>

                </div>


                <div>

                    <h3 className="text-[#FFD700] text-[18px] max-sm:mt-8 mb-4 font-extrabold">Contact Us</h3>
                        <div className="max-sm:grid text-[#ffff] max-sm:grid-cols-2">
                          <a href="/policy/by_laws.docx" download className="mb-4 block">Legal</a>
                          <a href="/policy/privacy_policy.docx" download className="mb-4 block">Privacy Policy</a>
                          <a href="/policy/terms_and_conditions.docx" download className="mb-4 block">Terms of Services</a>
                        </div>
                </div>

                <div className="col-span-2 max-sm:mt-10">
                    <div className="text-[#ffff]">
                      <h1 className="md:text-[46px] text-[36px] leading-[50px] font-extrabold">HoseMatchless <br /> Newsletter</h1>
                      <p className="w-80 font-extrabold md:mt-1 mt-4">Subscribe to our newsletter for updates on upcoming events and services</p>
                    </div>

                    <div className="mt-6 px-4 bg-white rounded-2xl">
                        <textarea className="py-6 w-full outline-none" placeholder="Enter Email Address" />
                        <button className="bg-[#002D62] font-bold text-[20px] md:py-4 md:px-7 p-3 rounded-2xl text-[#ffff] max-sm:w-full mb-6 md:ml-[360px]">Sign Up</button>
                    </div>
                </div>

          </div>

          <h4 className=" mt-20 md:text-start md:-mt-4 text-center text-[#ffff]">© Hose Matchless 2024</h4>

        </div>
    </div>
    
  )
}
