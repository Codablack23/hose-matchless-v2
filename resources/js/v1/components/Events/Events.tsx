import TicketTailorWidget from "@/Components/TicketTailorWidget";

export default function Events() {
    return (

        <div id="events" className="md:mt-[800px] mt-20 md:mx-[80px]">
            <div className="relative py-10 px-5 mt-20 rounded-xl bg-[#002D62]">
                <div className="text-[#ffff]">
                    <h1 className="md:text-[40px] text-[32px] py-6 font-extrabold">Events</h1>
                </div>
            </div>
            <div className="top-0 gap-10 px-0 -mt-[200px] md:grid md:grid-cols-3 md:px-8">
                <div></div>

                <div className="min-h-96 py-8 px-5 md:mt-20 mt-12 rounded-xl bg-[#F1F1F1] drop-shadow-md">
                    <p className="md:mx-6 text-[#002D62] leading-9 md:text-[28px] text-[24px] font-extrabold mb-4">Upcoming <br /> Events</p>

                    <div className="h-[300px]">
                        <img className="h-[300px] object-contain w-full" src="/assets/img/next_gen_flyer.jpg" alt="event1" />
                    </div>

                    <div className="flex flex-col items-center">
                        {/* <p className="mt-6">
                            We specialize in discovering and nurturing young talent, organizing international events, managing creator networks, and providing social media management tools to help creators grow and succeed
                        </p> */}
                    </div>
                    <TicketTailorWidget />
                </div>


                <div className="min-h-96 py-8 px-5 md:mt-20 mt-12 rounded-xl bg-[#F1F1F1] drop-shadow-md">
                    <p className="md:mx-6 text-[#002D62] leading-9 md:text-[28px] text-[24px] font-extrabold mb-4">Past Events <br /> <span className="font-normal text-[20px]" >(Event Gallery)</span></p>

                    <img className="" src="/assets/img/events-img2.png" alt="event2" />

                    <div className="flex flex-col items-center">
                        <p className="mt-6">
                            We specialize in discovering and nurturing young talent, organizing international events, managing creator networks, and providing social media management tools to help creators grow and succeed
                        </p>
                    </div>

                </div>
            </div>
        </div>

    )
}
