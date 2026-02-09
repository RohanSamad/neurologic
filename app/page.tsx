'use client'

import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Brain, Zap, Shield, ArrowRight, Activity, Check, Twitter, Linkedin, Github, ChevronLeft, ChevronRight, Plus } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const container = useRef(null)

  useGSAP(() => {


    // Footer Parallax
    gsap.to('.footer-brand-text', {
      scrollTrigger: {
        trigger: 'footer',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1
      },
      y: -50,
      opacity: 0.4
    })

  }, { scope: container })

  return (
    <main ref={container} className="min-h-screen bg-[#000000] text-white selection:bg-[#CCFF00] selection:text-black font-sans">
      <Navbar />

      {/* 1. HERO (Black) */}
      <div className="sticky top-0 z-0">
        <Hero />
      </div>

      {/* 3. section */}
      <section className="min-h-screen w-full bg-white flex justify-center px-[3vh] relative z-10">
        <div className="w-full max-w-[150vh] relative text-black pt-[10vh]">

          {/* TEXT AREA */}
          <div className="py-[8vh]">
            <h1 className="text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1]">
              Validate capacity with real data.
            </h1>

            <p className="py-[3vh] text-[2.6vh] max-w-[95vh] text-gray-700 leading-relaxed">
              Neurologic is a lean, bootstrapped MVP designed to prove the Capacity Timeline + Live Pulse concept using your actual Microsoft data. No over-engineering, just clear biological intelligence.
            </p>
          </div>

          {/* IMAGE AREA */}
          <div className="relative w-full h-[65vh] rounded-[2vh] overflow-hidden">

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30 z-10 rounded-[2vh]"></div>

            <img
              src="/assets/3.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

        </div>
      </section>

      {/* section 4 */}
      <section className='min-h-screen w-full bg-white flex flex-col justify-center overflow-hidden relative z-10'>
        <div className="w-full max-w-[150vh] mx-auto px-[3vh] relative text-black pt-[10vh]">

          {/* TEXT AREA */}
          <div className="py-[8vh]">
            <h1 className="text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1]">
              Technical Milestones & Components
            </h1>

            <p className="py-[3vh] text-[2.6vh] max-w-[95vh] text-gray-700 leading-relaxed">
              We are building a lightweight signal engine to ingest Outlook Calendar data, normalize it, and visualize team burnout and focus depth.
            </p>
          </div>
        </div>

        {/* CAROUSEL AREA */}
        <div className="w-full pb-[10vh]">
          <Section4Carousel />
        </div>
      </section>
      {/* section 5 */}
       <section className='min-h-screen w-full bg-black flex flex-col justify-center overflow-hidden relative z-10'>
        <div className='w-full max-w-[150vh] mx-auto px-[3vh] relative text-white pt-[10vh]'>
          <h1 className='text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1] mb-10'>MVP Dashboards</h1>
        </div>

        <Section5Cards />

      </section>

      {/* section 6 */}
       <section className='min-h-screen w-full bg-white flex justify-center overflow-hidden relative z-10 px-[3vh]'>
        <div className="w-full max-w-[150vh] relative text-black pt-[10vh]">

          {/* TEXT AREA */}
          <div className="py-[8vh]">
            <h1 className="text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1]">
              Why this lean approach works
            </h1>

            <p className="py-[3vh] text-[2.6vh] max-w-[95vh] text-gray-700 leading-relaxed">
              We avoid enterprise bloat to focus on the core insight: Visualizing the gap between planned capacity and actual burnout.
            </p>
          </div>

          {/* Gallery Grid - Column Based */}
          <div className="w-full flex gap-[2vh] pb-[10vh] flex-col md:flex-row">

            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-[2vh]">
              <div className="w-full h-[45vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/1.png" alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full h-[25vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/5.png" alt="Gallery 5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full h-[25vh] relative rounded-[2vh] overflow-hidden bg-gray-50 flex flex-col justify-center p-[3vh] transition-all duration-500 hover:bg-[#CCFF00] group">
                <div className="w-[4vh] absolute bottom-0 right-5 h-[4vh] bg-black rounded-full mb-[2vh] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Plus size={16} />
                </div>
                <h3 className="text-[3vh] font-bold leading-tight mb-[1vh]">Proven</h3>
                <p className="text-[1.8vh] text-gray-600 leading-tight group-hover:text-black/80">Validates insights fast.</p>
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-[2vh]">
              <div className="w-full h-[45vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/2.png" alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full relative h-[25vh] rounded-[2vh] overflow-hidden bg-gray-50 flex flex-col justify-center p-[3vh] transition-all duration-500 hover:bg-[#CCFF00] group">
                <div className="w-[4vh] absolute bottom-0 right-5 h-[4vh] bg-black rounded-full mb-[2vh] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Plus size={16} />
                </div>
                <h3 className="text-[3vh] font-bold leading-tight mb-[1vh]">Explainable</h3>
                <p className="text-[1.8vh] text-gray-600 leading-tight group-hover:text-black/80">Trust through clarity.</p>
              </div>
              <div className="w-full h-[25vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/6.png" alt="Gallery 6" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-[2vh]">
              <div className="w-full h-[25vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/3.png" alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full h-[45vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/7.png" alt="Gallery 7" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full h-[25vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/9.png" alt="Gallery 9" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
            </div>

            {/* Column 4 */}
            <div className="flex-1 flex flex-col gap-[2vh]">
              <div className="w-full relative h-[25vh] rounded-[2vh] overflow-hidden bg-gray-50 flex flex-col justify-center p-[3vh] transition-all duration-500 hover:bg-[#CCFF00] group">
                <div className="w-[4vh] absolute bottom-0 right-5 h-[4vh] bg-black rounded-full mb-[2vh] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Plus size={16} />
                </div>
                <h3 className="text-[3vh] font-bold leading-tight mb-[1vh]">Focused</h3>
                <p className="text-[1.8vh] text-gray-600 leading-tight group-hover:text-black/80">No over-engineering.</p>
              </div>
              <div className="w-full h-[45vh] rounded-[2vh] overflow-hidden relative group">
                <img src="/assets/8.png" alt="Gallery 8" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500" />
              </div>
              <div className="w-full relative h-[25vh] rounded-[2vh] overflow-hidden bg-gray-50 flex flex-col justify-center p-[3vh] transition-all duration-500 hover:bg-[#CCFF00] group">
                <div className="w-[4vh] absolute bottom-0 right-5 h-[4vh] bg-black rounded-full mb-[2vh] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                  <Plus size={16} />
                </div>
                <h3 className="text-[3vh] font-bold leading-tight mb-[1vh]">Secure</h3>
                <p className="text-[1.8vh] text-gray-600 leading-tight group-hover:text-black/80">Single-tenant safety.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* section 7 */}
 <section className='min-h-screen w-full bg-black flex flex-col justify-center overflow-hidden relative z-10'>
        <div className='w-full max-w-[150vh] mx-auto px-[3vh] relative text-white pt-[10vh]'>
          <h1 className='text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1] mb-10'>Development Roadmap</h1>
        </div>


        <div className="w-full max-w-[150vh] mx-auto pb-[10vh]">
          <Section7Steps />
        </div>
      </section>

      {/* section 8 */}
       <section className='min-h-screen w-full bg-white flex flex-col justify-center overflow-hidden relative z-10 px-[3vh]'>

        <div className='w-full max-w-[150vh] mx-auto px-[3vh] relative text-white pt-[10vh]'>
          <h1 className='text-[6vh] sm:text-[6.5vh] lg:text-[10vh]  leading-[1.1] text-black mb-10'>Core Functionality</h1>
        </div>

        <div className="w-full max-w-[150vh] mx-auto pb-[10vh]">
          <Section8Steps />
        </div>
      </section>

      {/* section 9 */}
       <section className='min-h-screen w-full bg-white  flex  justify-center overflow-hidden relative z-10'>
        <Section9Trial />
      </section>

      {/* section 10 */}
       <section className='min-h-screen w-full bg-white  flex  justify-center overflow-hidden relative z-10 p-[3vh]'>
        <Section10Labs />
      </section>

      {/* section 11 - Medical Info */}
      <section className=' w-full bg-black  flex  justify-center overflow-hidden relative z-10 text-[#848484] py-[10vh] px-[3vh] border-t border-white/10'>
        <Section11MedicalInfo />
      </section>

      {/* 11. FOOTER (Massive with Center Text) */}
      <footer className="pt-[12vh] pb- bg-[#000000] text-white border-t border-white/10 relative overflow-hidden z-[90]">
        <div className="container mx-auto px-[2vh] max-w-[130vh] relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[3vh] mb-[2.5vh] md:mb-[6vh]">
            <div className="col-span-1 md:col-span-2">
              <div className="text-[2.5vh] font-bold tracking-tighter mb-[1.5vh] flex items-center gap-[0.5vh]">
                <Brain className="text-[#CCFF00]" /> Neurologic
              </div>
              <p className="text-gray-500 max-w-[40vh] mb-[2vh]">
                Lean bootstrapped intelligence for engineering teams.
                Visualize burnout before it happens.
              </p>
              <div className="flex gap-[1.5vh]">
                <SocialIcon icon={<Twitter size="2vh" />} />
                <SocialIcon icon={<Linkedin size="2vh" />} />
                <SocialIcon icon={<Github size="2vh" />} />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-[1.5vh] uppercase tracking-widest text-[1.4vh]">Product</h4>
              <ul className="space-y-[1vh] text-gray-500 text-[1.4vh]">
                <FooterLink>Deep Work Analysis</FooterLink>
                <FooterLink>Energy Battery</FooterLink>
                <FooterLink>ROI Calculator</FooterLink>
                <FooterLink>Integrations</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-[1.5vh] uppercase tracking-widest text-[1.4vh]">Company</h4>
              <ul className="space-y-[1vh] text-gray-500 text-[1.4vh]">
                <FooterLink>Manifesto</FooterLink>
                <FooterLink>Science</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Legal</FooterLink>
              </ul>
            </div>
          </div>

          {/* MASSIVE CENTER TEXT */}
          <div className="flex justify-center items-center relative pt-10 md:pt-40 ">
            <h1 className="footer-brand-text text-[15vw] leading-none font-black md:absolute -bottom-14 tracking-tighter text-white opacity-10 select-none hover:opacity-20 transition-opacity duration-500">
              NEUROLOGIC
            </h1>
          </div>


        </div>
      </footer>

    </main>
  )
}




function SocialIcon({ icon }: any) {
  return (
    <div className="w-[4vh] h-[4vh] rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all cursor-pointer">
      {icon}
    </div>
  )
}

function FooterLink({ children }: any) {
  return (
    <li className="hover:text-white transition-colors cursor-pointer block">
      {children}
    </li>
  )
}

function Section4Carousel() {
  const containerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = window.innerWidth * 0.2
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const carouselItems = [
    { num: 18, title: "Executive Overview" },
    { num: 15, title: "Outlook Integration" },
    { num: 13, title: "Leader Dashboard" },
    { num: 14, title: "Burnout Analysis" },
    { num: 12, title: "Deep Work Score" },
    { num: 16, title: "Team Heatmaps" },
    { num: 10, title: "Raw Signal Data" }
  ]

  return (
    <div className="relative group w-full">
      {/* Controls */}
      <div className="absolute top-1/2 -translate-y-1/2 left-[4vh] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scroll('left')}
          className="p-[2vh] bg-white/10 hover:bg-black hover:text-white text-black border border-black/10 rounded-full backdrop-blur-md transition-all scale-90 hover:scale-100 shadow-xl"
        >
          <ChevronLeft size="3vh" />
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-[4vh] z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scroll('right')}
          className="p-[2vh] bg-white/10 hover:bg-black hover:text-white text-black border border-black/10 rounded-full backdrop-blur-md transition-all scale-90 hover:scale-100 shadow-xl"
        >
          <ChevronRight size="3vh" />
        </button>
      </div>

      {/* Carousel Track */}
      <div
        ref={containerRef}
        className="flex gap-[2.4vh] overflow-x-auto pl-[25vh] py-[4vh] pr-[4vh] [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {carouselItems.map((item) => (
          <div key={item.num} className="relative shrink-0 w-[50vh] h-[60vh] rounded-[3vh] overflow-hidden select-none">
            <img
              src={`/assets/${item.num}.png`}
              alt={`Carousel Image ${item.num}`}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-black/60 pointer-events-none"></div>

            {/* Top Text (One Line) */}
            <div className="absolute top-[3vh] left-[3vh] right-[3vh] mx-auto">
              <h3 className="text-black text-[3vh] font-bold truncate tracking-tight">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
        {/* Spacer for end padding balance */}
        <div className="w-[25vh] shrink-0" />
      </div>
    </div>
  )
}

function Section5Cards() {
  const cards = [
    {
      title: "EMPLOYEE",
      desc: "Private insights for individuals to manage their own energy and focus.",
      bgClass: "bg-gradient-to-b from-gray-200 to-white",
      imgIds: 12,
      features: [
        "Daily Burn-rate Indicators",
        "Deep Work Score Analysis",
        "Privacy-first employee dashboard",
        "Top contributing signals analysis",
        "Personal recommendations"
      ]
    },
    {
      title: "LEADER",
      desc: "Comprehensive view for team leads to monitor burn-rate and capacity.",
      bgClass: "bg-gradient-to-b from-blue-200 to-white",
      imgIds: 13,
      features: [
        "Team Live Pulse Dashboard",
        "Capacity Timeline (Last/This/Next)",
        "Drill-down to individual profiles",
        "Role & Location filtering",
        "Lightweight CSV Export"
      ]
    },
    {
      title: "FOUNDATION",
      desc: "The technical backbone powering the entire MVP ecosystem.",
      bgClass: "bg-gradient-to-b from-emerald-100 to-white",
      imgIds: 14,
      features: [
        "Microsoft OAuth (Single Tenant)",
        "Secure Token Lifecycle Management",
        "Outlook Calendar Ingestion",
        "EU Deployment Compatibility",
        "Rule-based Signal Engine"
      ]
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[2.5vh] w-full max-w-[170vh] mx-auto px-[3vh] pb-[10vh]">
      {cards.map((card, i) => (
        <div key={i} className={`rounded-[4vh] p-[2.5vh] lg:p-[3vh] ${card.bgClass} text-black flex flex-col items-center text-center relative overflow-hidden group transition-transform hover:-translate-y-[0.8vh] duration-500`}>

          <h3 className="text-[3vh] font-bold uppercase tracking-[0.2em] mb-[1.6vh] text-black">{card.title}</h3>
          <p className="text-[1.4vh] font-medium leading-relaxed max-w-[25vh] mb-[3vh] min-h-[6vh] text-gray-800">
            {card.desc}
          </p>

          {/* Image Placeholder */}
          <div className="w-full h-[20vh] mb-[2.5vh] flex items-center justify-center relative">
            <img
              src={`/assets/${card.imgIds}.png`}
              alt={card.title}
              className="max-h-full rounded-[1vh] object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Features */}
          <div className="w-full space-y-[1.2vh] mb-[4vh] text-left pl-[1vh]">
            {card.features.map((feat, j) => (
              <div key={j} className="flex items-start gap-[1.2vh]">
                <div className="mt-[0.4vh] bg-black text-white rounded-full p-[0.2vh] shrink-0 flex items-center justify-center w-[1.6vh] h-[1.6vh]">
                  <Check size="1vh" strokeWidth={4} />
                </div>
                <span className="text-[1.2vh] font-bold leading-tight text-gray-900">{feat}</span>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="w-full mt-auto space-y-[1.2vh]">
            <button className="w-full py-[1.6vh] bg-black text-white rounded-full font-black text-[1.2vh] uppercase tracking-widest hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
              Start with {card.title}
            </button>
            <button className="w-full py-[1.6vh] bg-transparent border-2 border-black text-black rounded-full font-black text-[1.2vh] uppercase tracking-widest hover:bg-black hover:text-white transition-all">
              View Specs
            </button>
          </div>

        </div>
      ))}
    </div>
  )
}

function Section7Steps() {
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)

  const steps = [
    {
      title: "Foundations",
      desc: "Backend infrastructure & Microsoft OAuth"
    },
    {
      title: "Ingestion",
      desc: "Calendar data normalization & time-zones"
    },
    {
      title: "Engine",
      desc: "Capacity & Burn-rate computation logic"
    },
    {
      title: "Dashboards",
      desc: "Leader and Employee UI Implementation"
    }
  ]

  useEffect(() => {
    // Reset progress when step changes
    setProgress(0)

    // Animate progress from 0 to 100 over 5 seconds
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100
        return prev + 2 // Increment by 2% every 100ms = 5 seconds total
      })
    }, 100)

    // Change step every 5 seconds
    const stepTimeout = setTimeout(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => {
      clearInterval(progressInterval)
      clearTimeout(stepTimeout)
    }
  }, [activeStep, steps.length])


  return (
    <div className="w-full flex flex-col lg:flex-row gap-[8vh] items-center px-[3vh]">
      {/* Left Side - Steps */}
      <div className="flex-1 w-full">
        <div className="flex flex-col gap-[2vh]">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative flex items-center gap-[1vh] group transition-all duration-700"
            >
              {/* Animated Line */}
              <div className={`relative w-[0.2vh] bg-white/20 rounded-full overflow-hidden flex flex-col justify-end transition-all smooth ease-in-out duration-700 ${activeStep === index ? 'h-[10vh]' : 'h-[3vh]'}`}>
                {activeStep === index ? (
                  <div
                    className="w-full  bg-white  transition-all ease-linear"
                    style={{
                      height: `${progress}%`,
                      transition: 'height 0.1s linear'
                    }}
                  />
                ) : (
                  <div className="w-full h-[2vh]  rounded-full" />
                )}
              </div>

              {/* Text Content */}
              <div className="flex-1 transition-all duration-700">
                <h2
                  className={`font-bold leading-tight transition-all duration-700 ${activeStep === index
                    ? 'text-[6vh] text-white'
                    : 'text-[3vh] text-gray-500'
                    }`}
                >
                  {step.title}
                </h2>
                <p
                  className={`transition-all duration-700 leading-tight ${activeStep === index
                    ? 'text-[2vh] text-white opacity-100 mt-[1vh]'
                    : 'text-[1.3vh] text-white opacity-0 h-0'
                    }`}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 w-full h-[60vh] rounded-[3vh] overflow-hidden relative group">
        <img
          src="/assets/4.png"
          alt="Steps Illustration"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </div>
  )
}

function Section8Steps() {
  const [activeIndex, setActiveIndex] = useState(0)

  const steps = [
    {
      title: "Microsoft Integration",
      desc: "Direct single-tenant OAuth integration with Outlook Calendar. We ingest your schedule signals to establish a baseline for capacity without needing manual input.",
      icon: <Activity className="w-[2.4vh] h-[2.4vh]" />,
      image: "/assets/10.png"
    },
    {
      title: "Capacity Timeline",
      desc: "Visualize Last week's strain, This week's load, and Next week's available capacity. A rule-based engine flags potential burnout risks in your schedule.",
      icon: <Shield className="w-[2.4vh] h-[2.4vh]" />,
      image: "/assets/11.png"
    },
    {
      title: "Live Pulse & Privacy",
      desc: "Leaders see a team heat-map of burn rates. Employees see their own private deep-work score. Granular privacy controls ensure trust is maintained.",
      icon: <Zap className="w-[2.4vh] h-[2.4vh]" />,
      image: "/assets/12.png"
    }
  ]

  return (
    <div className="w-full flex flex-col lg:flex-row gap-[8vh] items-center text-black">
      {/* Left Side - Image */}
      <div className="flex-1 w-full h-[60vh] rounded-[3rem] overflow-hidden relative group">
        <img
          src={steps[activeIndex].image}
          alt={steps[activeIndex].title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* Right Side - Content */}
      <div className="flex-1 w-full flex flex-col justify-center items-center lg:items-start text-center lg:text-left">

        {/* Pill Buttons Row */}
        <div className="flex flex-wrap gap-[1.5vh] mb-[5vh]">
          {steps.map((step, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-[3.2vh] py-[1.6vh] rounded-full font-black text-[1.2vh] uppercase tracking-widest transition-all duration-300 border ${activeIndex === index
                ? 'bg-black text-white border-black'
                : 'bg-white text-gray-400 border-gray-200 hover:border-black hover:text-black'
                }`}
            >
              {step.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Text Content */}
        <div className="max-w-[50vh] transition-all duration-500">
          <h2 className="text-[4vh] lg:text-[5vh] font-bold leading-[1.2]  ">
            {steps[activeIndex].title}
          </h2>
          <p className="text-[2vh] text-gray-600 leading-relaxed">
            {steps[activeIndex].desc}
          </p>
        </div>

      </div>
    </div>
  )
}

function Section9Trial() {
  return (
    <div className="w-full max-w-[150vh] my-[10vh] bg-[#F3F5F7] rounded-[3rem] p-[5vh] lg:p-[8vh] flex flex-col md:flex-row items-center gap-[5vh] overflow-hidden">
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-center text-center gap-[3vh] z-10">
        <h2 className="text-[4vh] px-4 font-bold leading-[1.1] text-black ">
          Validate the core insight with your own data
        </h2>
        <p className="text-[2vh] text-gray-600  leading-relaxed">
          Get a functional MVP environment deployed for your team. Connect your Microsoft Outlook Calendar and see the Capacity Timeline and Live Pulse dashboards in action.
        </p>
        <button className="px-[3.2vh] py-[1.6vh] border-[0.2vh] border-black rounded-[1vh] text-black font-bold text-[1.2vh] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 mt-[2vh]">
          Start Validation Pilot
        </button>
      </div>

      {/* Right Images */}
      <div className="flex-1 flex justify-center items-center gap-[2.5vh] relative">
        <img src="/assets/17.png" className="h-[45vh] rounded-[3vh] w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" alt="App Interface" />
      </div>
    </div>
  )
}

function Section10Labs() {
  return (
    <div className="w-full max-w-[150vh] flex flex-col lg:flex-row items-center gap-[8vh]">
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-[4vh]">
        <h2 className="text-[5vh] font-bold leading-[1.1] text-black">
          Post-MVP Expansion Roadmap
        </h2>

        <div className="flex flex-col gap-[2vh]">
          {[
            "Slack Ingestion integration for communication signals",
            "SharePoint deep analytics for document collaboration",
            "Advanced Machine Learning for predictive burnout",
            "Manager alerts and proactive retention strategies"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-[1.5vh]">
              <div className="mt-[0.5vh] bg-teal-100 text-teal-600 rounded-md p-[0.5vh] shrink-0">
                <Check size="1.4vh" strokeWidth={4} />
              </div>
              <p className="text-[2vh] text-gray-700 leading-tight">{item}</p>
            </div>
          ))}
        </div>

        <button className="w-full md:w-fit px-[3.2vh] py-[1.6vh] border-[0.2vh] border-black rounded-[0.5vh] text-black font-bold text-[1.2vh] tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-300 mt-[1vh]">
          View Expansion Strategy
        </button>
      </div>

      {/* Right Image area */}
      <div className="flex-1 relative group">
        <div className="relative rounded-[3rem] overflow-hidden">
          <img src="/assets/18.png" alt="Advanced Labs" className="w-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </div>
    </div>
  )
}

function Section11MedicalInfo() {
  const items = [
    {
      title: "MVP Scope",
      text: "This bootstrapped plan is intentionally lean. It validates the Capacity Timeline + Live Pulse concept with real Microsoft data, not a full enterprise platform."
    },
    {
      title: "Data Constraints",
      text: "Primary signal is Outlook Calendar. Visualizes Last/This/Next week capacity. Does not yet include Slack or SharePoint deep analytics."
    },
    {
      title: "Privacy Controls",
      text: "Individual privacy toggles allow employees to limit what leaders can see per company policy, ensuring trust is maintained during the pilot."
    },
    {
      title: "Deployment",
      text: "EU deployment in a single environment. Single-tenant Microsoft OAuth architecture."
    },
    {
      title: "Non-Goals (Deferred)",
      text: "Advanced ML model training, Admin role interfaces, Enterprise security audits, and Email notifications are explicitly deferred to post-MVP."
    },
    {
      title: "Technical Requirements",
      text: "Requires valid Microsoft Tenant ID for OAuth configuration. Backend will store normalized calendar events for capacity calculations."
    }
  ]

  return (
    <div className="w-full max-w-[150vh] mx-auto flex flex-col gap-[6vh]">
      <h3 className="text-[2vh] font-bold text-gray-500">MVP Constraints & Technical Notes:</h3>

      <div className="flex flex-col gap-[3vh]">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 text-[1.6vh] leading-relaxed">
            <span className="font-bold shrink-0">{index + 1}. {item.title}:</span>
            <span>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
