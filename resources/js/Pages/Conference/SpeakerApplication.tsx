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
            <SpeakersApplications />
            <Footer />
        </>
    );
}
