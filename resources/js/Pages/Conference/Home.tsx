import {
    Hero,
    Schedule,
    Stats,
    Packages,
    SpeakersApplications,
    Speakers,
    Register,
    Faqs,
    Footer,
    Navbar,
} from "@/Components";
import { Head } from "@inertiajs/react";

export default function Home() {
    return (
        <>
            <Head title="The International Creator Economy Conference 2026" />
            <Navbar />
            <div className="notice">
                &#9679; Limited spaces available — secure your official
                invitation letter today &nbsp;|&nbsp; November 20–25, 2026
                &nbsp;|&nbsp; Mississauga, Ontario, Canada
            </div>
            <Hero />
            <Stats />
            <Packages />
            <Schedule />
            <Speakers />
            <Faqs />
            <Footer />
        </>
    );
}
