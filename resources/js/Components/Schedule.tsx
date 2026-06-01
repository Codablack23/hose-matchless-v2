import { useState } from "react";

const days = [
    {
        id: "d1",
        cls: "ol",
        dt: "Thursday, Nov 20",
        num: "Day 1",
        theme: "Welcome & Opening",
        badge: "db-ol",
        bl: "Online",
        note: "All sessions online via Zoom — log in from anywhere in the world",
        rows: [
            [
                "10:00 AM",
                "Platform opens — virtual welcome",
                "Delegates log in worldwide. Welcome video plays.",
            ],
            [
                "10:30 AM",
                "Official opening address",
                "Hose Matchless Global Ltd opens ICEC Canada 2026",
                "k",
            ],
            [
                "11:00 AM",
                "The African Creator in the Global Economy",
                "How African creators are reshaping the global landscape",
                "k",
            ],
            [
                "12:00 PM",
                "The Creator Economy in 2026 — What Changed?",
                "Platform shifts, algorithm updates, and where the money is",
            ],
            [
                "1:30 PM",
                "Workshop: Building Your Creator Foundation",
                "Personal brand basics — niche, voice, consistency",
            ],
            [
                "3:30 PM",
                "Q&A + Virtual Networking",
                "Live Q&A and breakout rooms by country",
            ],
        ],
    },
    {
        id: "d2",
        cls: "ip",
        dt: "Friday, Nov 21",
        num: "Day 2",
        theme: "The Main Stage",
        badge: "db-ip",
        bl: "In-Person",
        note: "Grand Victorian Convention Centre, Mississauga — also livestreamed for online delegates",
        rows: [
            [
                "8:30 AM",
                "Registration & check-in at venue",
                "Badge, welcome pack, T-shirt, bag, lanyard, booklet",
            ],
            [
                "10:00 AM",
                "Grand opening ceremony on stage",
                "Official welcome, acknowledgement of sponsors",
            ],
            [
                "10:45 AM",
                "International Keynote Speaker #1",
                "Topic: Growth, Influence & the Creator Revolution",
                "k",
            ],
            [
                "12:00 PM",
                "Networking lunch at venue",
                "Catered lunch. Creator speed-networking rounds.",
            ],
            [
                "1:30 PM",
                "International Keynote Speaker #2",
                "Topic: Monetization at Scale",
                "k",
            ],
            [
                "2:45 PM",
                "Panel: Creators Who Made It",
                "4–5 successful creators share their stories on stage",
            ],
            [
                "4:00 PM",
                "Masterclass: Content That Converts",
                "Hooks, scripts, and strategy for viral content",
            ],
            [
                "5:30 PM",
                "Exhibition & Brand Meet-and-Greet",
                "Brands meet creators. Collaborations started.",
            ],
            [
                "7:00 PM",
                "VIP Dinner (MVP/VIP & Speaker letter holders)",
                "Exclusive dinner with speakers and executives",
            ],
        ],
    },
    {
        id: "d3",
        cls: "ip",
        dt: "Saturday, Nov 22",
        num: "Day 3",
        theme: "Skills & Connections",
        badge: "db-ip",
        bl: "In-Person",
        note: "Grand Victorian Convention Centre, Mississauga — also livestreamed",
        rows: [
            [
                "9:00 AM",
                "Morning networking & breakfast at venue",
                "Open breakfast. Delegates connect.",
            ],
            [
                "10:00 AM",
                "International Keynote Speaker #3",
                "Topic: AI, Automation & the Human Creator",
                "k",
            ],
            [
                "11:15 AM",
                "Masterclass Track A: Video Creation & Editing",
                "Shooting, editing, hooks, transitions",
            ],
            [
                "11:15 AM",
                "Masterclass Track B: Graphic Design & Branding",
                "Canva Pro, Adobe, brand identity, thumbnails",
            ],
            [
                "1:00 PM",
                "Lunch & Creator Market",
                "Catered lunch + creator merchandise market",
            ],
            [
                "2:30 PM",
                "Workshop: Livestreaming for Money",
                "Bigo Live & TikTok Live — gifts, subscriptions, deals",
            ],
            [
                "4:00 PM",
                "Brand Speed-Dating Session",
                "Creators meet brands in 10-minute sessions",
            ],
            [
                "5:30 PM",
                "International Keynote Speaker #4",
                "Topic: Your Global Creator Career Starts Now",
                "k",
            ],
            [
                "6:30 PM",
                "Official group photo + farewell dinner",
                "In-person days complete. Online days continue.",
            ],
        ],
    },
    {
        id: "d4",
        cls: "ol",
        dt: "Sunday, Nov 23",
        num: "Day 4",
        theme: "Monetization & Growth",
        badge: "db-ol",
        bl: "Online",
        note: "All sessions online via Zoom",
        rows: [
            [
                "11:00 AM",
                "Platform opens — in-person recap",
                "All delegates log in. Highlights shown.",
            ],
            [
                "11:30 AM",
                "Turning Followers into Income",
                "Monetization blueprint — ads, brand deals, products",
                "k",
            ],
            [
                "12:30 PM",
                "Masterclass: Landing Brand Deals",
                "Media kit, pitching, negotiation, closing",
            ],
            [
                "2:00 PM",
                "Workshop: Digital Products",
                "Courses, e-books, paid communities",
            ],
            [
                "3:00 PM",
                "YouTube Monetization Blueprint",
                "AdSense, memberships, Super Thanks, brand deals",
            ],
            [
                "4:00 PM",
                "Panel: Diaspora Creators Going Global",
                "Creators in Africa who broke into international markets",
            ],
            [
                "5:00 PM",
                "Q&A & Virtual Networking",
                "Live Q&A. Breakout rooms by niche and country.",
            ],
        ],
    },
    {
        id: "d5",
        cls: "aw",
        dt: "Monday, Nov 24",
        num: "Day 5",
        theme: "Creator Awards Night",
        badge: "db-aw",
        bl: "Awards Night",
        note: "Fully online. Streamed live. Formal night — dress up encouraged.",
        rows: [
            [
                "7:00 PM",
                "Virtual red carpet pre-show",
                "Cameras on. Best dressed competition.",
            ],
            [
                "7:30 PM",
                "Welcome & opening performance",
                "Host opens the ICEC 2026 Creator Awards",
            ],
            [
                "8:00 PM",
                "Award: Best Content Creator of the Year",
                "Nominees, tributes, winner announced live",
            ],
            [
                "8:15 PM",
                "Award: Best Newcomer Creator 2026",
                "For creators who broke through in 2026",
            ],
            ["8:30 PM", "Award: Most Inspiring Creator", "Community voted"],
            ["8:45 PM", "Award: Best Content Strategy", "Judge voted"],
            [
                "9:00 PM",
                "Award: Best Livestream Creator",
                "Excellence on Bigo Live, TikTok Live, Favourited",
            ],
            [
                "9:15 PM",
                "Award: Hose Matchless Creator of the Year",
                "Top award — presented by Hose Matchless Global Ltd",
            ],
            [
                "9:30 PM",
                "ICEC 2026 International Excellence in Creator Economy Award",
                "Presented to keynote speakers on stage",
            ],
            ["9:45 PM", "Closing performance & celebration", ""],
        ],
    },
    {
        id: "d6",
        cls: "ol",
        dt: "Tuesday, Nov 25",
        num: "Day 6",
        theme: "Closing & Certificates",
        badge: "db-ol",
        bl: "Online",
        note: "Final online day — certificates issued",
        rows: [
            [
                "11:00 AM",
                "Final check-in — Awards highlights shown",
                "All delegates log in",
            ],
            [
                "11:30 AM",
                "Your 90-Day Creator Action Plan",
                "Leave with a concrete 90-day plan",
            ],
            [
                "12:30 PM",
                "Workshop: AI Tools for Creators in 2026",
                "ChatGPT, Midjourney, Sora, ElevenLabs live demo",
            ],
            [
                "3:00 PM",
                "Closing Keynote — The Creator You Were Always Meant to Be",
                "Inspirational closing address",
                "k",
            ],
            [
                "4:00 PM",
                "Certificate ceremony",
                "All delegates receive digital certificate by email",
            ],
            [
                "4:30 PM",
                "Final virtual group photo",
                "All cameras on. Official screenshot.",
            ],
            [
                "5:00 PM",
                "Official close of ICEC Canada 2026",
                "ICEC 2027 teased.",
            ],
        ],
    },
];

function DayPanel({ day }: { day: Record<string, any> }) {
    return (
        <div className={`sched-day sched-bg-${day.cls}`}>
            <div className={`sched-header sched-hdr-${day.cls}`}>
                <div className="sched-header-left">
                    <h3>
                        {day.num}: {day.theme}
                    </h3>
                    <p>
                        {day.dt} &nbsp;·&nbsp;
                        <span className={`day-badge ${day.badge}`}>
                            {day.bl}
                        </span>
                    </p>
                </div>
                <div className="sched-note">{day.note}</div>
            </div>
            <table className="sched-table">
                <tbody>
                    {day.rows.map((r: any, i: any) => (
                        <tr
                            key={i}
                            className={r[3] === "k" ? "keynote-row" : ""}
                        >
                            <td className="sched-time">{r[0]}</td>
                            <td className="sched-title">
                                {r[1]}
                                {r[3] === "k" && (
                                    <span className="keynote-star"> ★</span>
                                )}
                            </td>
                            <td className="sched-desc">{r[2] || ""}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export function Schedule() {
    const [activeId, setActiveId] = useState<string | null>(null);

    function toggleDay(id: string) {
        setActiveId((prev) => (prev === id ? null : id));
    }

    const activeDay = days.find((d) => d.id === activeId);

    return (
        <section id="programme">
            <div className="sec-label">Event Schedule</div>
            <h2 className="sec-title">Full 6-day programme</h2>
            <div className="sec-div"></div>
            <p className="sec-sub">
                Click any day to expand the full schedule. Green = online, blue
                = in-person at venue, gold = awards night.
            </p>

            <div className="days-grid" id="days-grid">
                {days.map((d) => (
                    <div
                        key={d.id}
                        className={`day-card ${d.cls}${activeId === d.id ? " active" : ""}`}
                        onClick={() => toggleDay(d.id)}
                    >
                        <div className="day-dt">{d.dt}</div>
                        <div className="day-num">{d.num}</div>
                        <div className="day-theme">{d.theme}</div>
                        <span className={`day-badge ${d.badge}`}>{d.bl}</span>
                    </div>
                ))}
            </div>

            <div id="sched-panel">
                {activeId && activeDay && <DayPanel day={activeDay} />}
            </div>
        </section>
    );
}
