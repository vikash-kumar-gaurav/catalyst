
import "../globals.css";
import axios from "axios";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import VideoPlayer from "@/components/VideoPlayer";

/* --------------------------- DATA LAYER --------------------------- */
async function getAdmissionPageData() {
    try {
        const { data } = await axios.post("/getit");
        return data;                   // assume the API gives you JSON directly
    } catch (err) {
        console.error("getAdmissionPageData →", err);
        return {};                     // graceful fallback
    }
}

/* --------------------------- PAGE --------------------------- */
export default async function AdmissionPage() {
    const data = await getAdmissionPageData();

    /* fallback hero image if API gives nothing */
    const heroSrc =
        data.imageUrl ||
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80";

    return (
        <main className="min-h-screen scroll-smooth">
            {/* ──────────────── HERO ──────────────── */}
            <section className="relative h-[70vh] w-screen max-w-none overflow-hidden">
                <img
                    src={heroSrc}
                    alt="Admission Hero"
                    className="w-full h-full object-cover brightness-75"
                />
                <div className="absolute inset-0 grid place-items-center px-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg ">
                        Admission Open&nbsp;2025
                    </h1>
                </div>
            </section>

            {/* ──────────────── HEADLINE ──────────────── */}
            <header className="py-10 text-center bg-gradient-to-b from-white via-slate-50 to-white">
                <h2 className="inline-block bg-black text-white px-4 py-2 rounded-md text-xl md:text-3xl tracking-wide">
                    BCA &nbsp;|&nbsp; BBA Admission 2025
                </h2>
            </header>

            {/* ──────────────── PLACEMENT CAROUSEL ──────────────── */}
            <section className="relative py-4">
                <Carousel
                    className="w-screen max-w-none"
                    options={{ loop: true, slides: { perView: 1 } }}
                >
                    <CarouselContent className="h-[80vh]">
                        {[
                            "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1920&q=80",
                            "https://images.unsplash.com/photo-1529070538774-1843cb3265df?auto=format&fit=crop&w=1920&q=80",
                            "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1920&q=80",
                        ].map((src, i) => (
                            <CarouselItem key={i} className="basis-full h-full flex-shrink-0">
                                <img
                                    src={src}
                                    alt={`Placement ${i + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    {/* nav buttons */}
                    <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
                    <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
                </Carousel>
            </section>

            {/* ──────────────── ENQUIRY CTA ──────────────── */}
            <section className="py-12 bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 text-center text-white">
                <h3 className="text-2xl md:text-4xl font-semibold mb-4">
                    Ready to apply?
                </h3>
                <p className="mb-6">
                    Fill the quick enquiry form or call&nbsp;
                    <strong className="whitespace-nowrap">7250&nbsp;767676</strong>
                    &nbsp;for immediate guidance.
                </p>
                <button className="rounded-lg bg-white/10 hover:bg-white/20 px-8 py-3 text-lg tracking-wide">
                    Get Callback
                </button>
            </section>

            {/* ──────────────── DESCRIPTION (REDESIGNED) ──────────────── */}
            {/* ────────────── Why CIMAGE + Process + Eligibility ────────────── */}
            <section className="mx-auto max-w-7xl px-4 py-14">
                <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-slate-800">
                    Everything You Need to Know Before Applying
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Card 1: Why CIMAGE */}
                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold text-indigo-600 text-center">Why Choose CIMAGE?</h3>
                        <ul className="space-y-3 list-disc list-inside text-slate-700 text-sm leading-relaxed">
                            <li>
                                <strong>Top-ranked</strong> institution under Aryabhatta Knowledge University & Patliputra University.
                            </li>
                            <li>
                                <strong>6500+ students</strong> placed via campus drives & industry tie-ups.
                            </li>
                            <li>
                                <strong>Modern learning</strong> infrastructure with computer labs, digital classrooms, and industry mentors.
                            </li>
                            <li>
                                Add-on <strong>certification courses</strong> in AI, Digital Marketing, Cloud Computing, and more.
                            </li>
                            <li>
                                <strong>Scholarships & Govt. Schemes</strong> via Bihar’s Student Credit Card program.
                            </li>
                        </ul>
                    </article>

                    {/* Card 2: Eligibility Criteria */}
                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold text-indigo-600 text-center">Eligibility Criteria</h3>
                        <ul className="space-y-3 list-disc list-inside text-slate-700 text-sm leading-relaxed">
                            <li>
                                Passed <strong>Intermediate / +2</strong> from any stream – Arts, Commerce, or Science.
                            </li>
                            <li>
                                Minimum <strong>45% aggregate</strong> marks (General category).
                            </li>
                            <li>
                                Minimum <strong>40% aggregate</strong> for SC / ST / EBC / Differently Abled categories.
                            </li>
                            <li>
                                Distance learning & NIOS candidates are also eligible.
                            </li>
                            <li>
                                Final-year students can apply provisionally.
                            </li>
                        </ul>
                    </article>

                    {/* Card 3: Admission Process */}
                    <article className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
                        <h3 className="mb-4 text-xl font-semibold text-indigo-600 text-center">Admission Process</h3>
                        <ol className="list-decimal list-inside text-slate-700 text-sm space-y-3 leading-relaxed">
                            <li>
                                Fill enquiry form at{" "}
                                <a href="https://www.cimage.in" target="_blank" rel="noopener noreferrer" className="text-indigo-600 underline font-medium">
                                    www.cimage.in
                                </a>
                            </li>
                            <li>Receive a call from our counselor for guidance.</li>
                            <li>Appear for <strong>Entrance-cum-Scholarship Test</strong>.</li>
                            <li>Attend a short <strong>personal interview</strong>.</li>
                            <li>
                                Selection based on <strong>merit + test + interview performance</strong>.
                            </li>
                            <li>Pay the application fee of <strong>₹800</strong>.</li>
                            <li>Admission confirmation & document submission.</li>
                        </ol>
                    </article>
                </div>

                {/* Optional call-to-action */}
                <div className="text-center mt-14">
                    <p className="text-slate-600 text-sm mb-4">
                        Need help applying? Call us at{" "}
                        <a href="tel:7250767676" className="text-indigo-600 font-semibold underline">
                            7250&nbsp;767676
                        </a>{" "}
                        or visit our campus.
                    </p>
                    <a
                        href="https://www.cimage.in"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
                    >
                        Apply Now
                    </a>
                </div>
            </section>


            {/* ──────────────── FULL-WIDTH VIDEO (ALWAYS) ──────────────── */}
            <section className="w-screen max-w-none mb-4">

                <VideoPlayer
                    videoId="Vbvj1t9s0ow"
                    start={5}
                    showOverlay

                    className="w-screen max-w-none mx-auto rounded-2xl border-white border-4"
                />
            </section>

            {/* ───────── Why Join CIMAGE ───────── */}
            <section className="py-12">
                <h2 className="mb-8 text-center text-2xl md:text-3xl font-bold">
                    Why&nbsp;Join&nbsp;CIMAGE
                </h2>

                <div className="grid gap-10 md:grid-cols-2">
                    {[
                        { id: "wdXuujTrtCU", start: 5, title: "Industry-oriented learning" },
                        { id: "scwrn6TgLvY", start: 5, title: "Strong placement record" },
                        { id: "6t6-P4vS2Ac", start: 5, title: "Modern infrastructure" },
                        { id: "jDWZEvPb7nk", start: 5, title: "Scholarship options" },
                    ].map((item, idx) => (
                        <article
                            key={idx}
                            className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-md overflow-hidden"
                        >
                            {/* width now follows the card */}
                            <VideoPlayer
                                videoId={item.id}
                                start={item.start}
                                className="!w-full"     
                            />


                        </article>
                    ))}
                </div>
            </section>


        </main>
    );
}
