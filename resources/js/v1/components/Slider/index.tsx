import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from 'swiper/modules';
import 'swiper/css';


const testimonials = [
    {
        quote: "I went live with zero followers, thanks to Hose Matchless. Now I’m building a real fan base!",
        author: "gbengaadeniyi28"
    },
    {
        quote: "They taught me how to grow my audience and now I get paid monthly from TikTok!",
        author: "tastebudzzurich"
    },
    {
        quote: "From zero knowledge to a full-blown creator. Hose Matchless changed my TikTok journey.",
        author: "jennystar_7"
    },
    {
        quote: "I never thought I could make money from TikTok until I joined this amazing team!",
        author: "babarexstonyeozi"
    },
    {
        quote: "The mentorship here is gold! I now go live confidently and earn consistently.",
        author: "lady_van_essa"
    },
    {
        quote: "Hose Matchless made it possible for me to stream without waiting to hit 1k followers.",
        author: "winerymeemsfinewine"
    },
    {
        quote: "I was stuck at 500 followers until I joined. Now I’m at 5k and counting!",
        author: "najite_001"
    },
    {
        quote: "They made the process of monetizing so easy. TikTok now pays me monthly!",
        author: "reiyovla"
    },
    {
        quote: "I didn’t believe in creator support until Hose Matchless showed me results!",
        author: "veratafon3gmail.com"
    },
    {
        quote: "This network got me verified and taught me how to avoid account bans.",
        author: "miemie02_"
    },
    {
        quote: "Joining Hose Matchless was the best decision for my online career.",
        author: "joyceihiju"
    },
    {
        quote: "They helped recover my banned account and taught me how to stay safe on TikTok.",
        author: "callmetemi"
    },
    {
        quote: "From basic videos to professional content creation — I owe it to their coaching.",
        author: "chelsea_blac"
    },
    {
        quote: "The team gave me direct access to TikTok tools I never knew existed.",
        author: "@runtea6610"
    },
    {
        quote: "This is more than a network — it’s a family that uplifts creators!",
        author: "smhos6"
    }
];


export default function Testimonials() {

    return (
        <div className="main-container">
            <h1 className="md:text-[40px] text-[32px] mb-8 font-extrabold text-[#002D62]">Testimonials</h1>
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={3.5}
                speed={8000}
                autoplay={{
                    delay: 0
                }}
            >
                {testimonials.map((testimony,index) => (
                    <SwiperSlide key={`testimony-${index + 1}`}>
                        <div className="min-h-[200px] rounded-lg font-bold text-sm sm:text-xl text-white sm:p-8 bg-primary">
                            “{testimony.quote}” - <span>{testimony.author}</span> 
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}