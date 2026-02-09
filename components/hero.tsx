import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden pt-[12vh] pb-[8vh] bg-[#000000]">

            {/* Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vh] md:w-[100vh] h-[60vh] bg-[#CCFF00] opacity-[0.04] blur-[15vh] rounded-full pointer-events-none" />

            <div className="relative z-10 container mx-auto px-[2.5vh] max-w-[140vh] text-center">

                {/* Main Title */}
                <h1 className="text-[14vh] sm:text-[16vh] font-black tracking-tighter uppercase text-white my-[4vh] leading-[0.85]">
                    PROVE <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] to-[#666666]">
                        CAPACITY
                    </span>
                </h1>

                <p className="max-w-[70vh] mx-auto text-gray-400 text-[3vh] md:text-[2.2vh] lg:text-[2.4vh] font-medium leading-relaxed mb-[6vh]">
                    Visualize the gap between planned work and actual burnout.
                    A lean biological intelligence MVP for Microsoft-powered teams.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-[2.5vh]">
                    <Link href="/dashboard/leader">
                        <button className="group relative px-[4vh] py-[2vh] bg-[#CCFF00] text-black rounded-full font-bold uppercase tracking-widest text-[1.2vh] md:text-[1.4vh] hover:scale-105 transition-transform duration-200 shadow-[0_0_4vh_-1vh_#CCFF00]">
                            <span className="relative z-10 flex items-center gap-[1.2vh]">
                                Validate With Outlook <ArrowRight className="h-[1.6vh] w-[1.6vh]" />
                            </span>
                        </button>
                    </Link>

                    <button className="px-[4vh] py-[2vh] bg-transparent border border-white/10 text-white rounded-full font-bold uppercase tracking-widest text-[1.2vh] md:text-[1.4vh] hover:bg-white/5 hover:border-white/30 transition-all">
                        View Technical Specs
                    </button>
                </div>
            </div>

        </section>
    )
}
