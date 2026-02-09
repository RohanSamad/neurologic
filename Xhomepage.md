'use client'

import { Navbar } from '../components/navbar'
import { Hero } from '../components/hero'
import { Brain, Zap, Shield, ArrowRight, Activity, Check, X, Calendar, Plus, MessageCircle, Eye, DollarSign, Twitter, Linkedin, Github } from 'lucide-react'
import Link from 'next/link'
import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const container = useRef(null)

  useGSAP(() => {
    // Problem Section: Staggered list
    gsap.from('.problem-item', {
      scrollTrigger: {
        trigger: '#problem-section',
        start: 'top 70%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })

    // Deep Work: Bars grow (using scaleY for better performance)
    gsap.from('.deep-work-bar', {
      scrollTrigger: {
        trigger: '#deep-work-section',
        start: 'top 60%',
      },
      scaleY: 0,
      transformOrigin: 'bottom',
      duration: 1.5,
      ease: 'power2.out',
      stagger: 0.1
    })

    // Comparison: Stagger items
    gsap.from('.comp-item', {
      scrollTrigger: {
        trigger: '#comparison-section',
        start: 'top 70%',
      },
      x: -20,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1
    })

    // ROI: Counter animation (simulated with opacity/y for now, real counter needs state or complex gsap)
    gsap.from('.roi-number', {
      scrollTrigger: {
        trigger: '#roi-section',
        start: 'top 75%',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.2
    })

    // Battery: Fill animation
    gsap.from('.battery-fill', {
      scrollTrigger: {
        trigger: '#battery-section',
        start: 'top 60%',
      },
      height: '0%',
      duration: 2,
      ease: 'power1.inOut'
    })

    // Process Steps: Fade in Up
    gsap.from('.process-step', {
      scrollTrigger: {
        trigger: '#process-section',
        start: 'top 70%',
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    })

    // Manifesto: Text Reveal
    const manifestoText = document.querySelectorAll('.manifesto-text')
    // Simple fade for now, split-text needs plugins or custom code
    gsap.from('.manifesto-text', {
      scrollTrigger: {
        trigger: '#manifesto-section',
        start: 'top 80%',
      },
      opacity: 0,
      y: 20,
      duration: 1.5,
      ease: 'power2.out'
    })

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
      {/* <Navbar />   */}

      {/* 1. HERO (Black) */}
      <Hero />

      {/* 2. TICKER (Black) */}
      <section className="py-12 border-y border-white/5 bg-[#050505] overflow-hidden relative z-[5]">
        <div className="flex w-full whitespace-nowrap overflow-hidden">
          <div className="flex gap-20 items-center justify-center animate-marquee opacity-30 grayscale hover:grayscale-0 transition-all duration-700 mx-10">
            <span className="text-xl font-bold tracking-widest uppercase">Microsoft</span>
            <span className="text-xl font-bold tracking-widest uppercase">Spotify</span>
            <span className="text-xl font-bold tracking-widest uppercase">Shopify</span>
            <span className="text-xl font-bold tracking-widest uppercase">Airbnb</span>
            <span className="text-xl font-bold tracking-widest uppercase">Linear</span>
            <span className="text-xl font-bold tracking-widest uppercase">Netflix</span>
            <span className="text-xl font-bold tracking-widest uppercase">Uber</span>
            <span className="text-xl font-bold tracking-widest uppercase">Adobe</span>
            <span className="text-xl font-bold tracking-widest uppercase">Stripe</span>
          </div>
          <div className="flex gap-20 items-center justify-center animate-marquee opacity-30 grayscale hover:grayscale-0 transition-all duration-700 mx-10" aria-hidden="true">
            <span className="text-xl font-bold tracking-widest uppercase">Microsoft</span>
            <span className="text-xl font-bold tracking-widest uppercase">Spotify</span>
            <span className="text-xl font-bold tracking-widest uppercase">Shopify</span>
            <span className="text-xl font-bold tracking-widest uppercase">Airbnb</span>
            <span className="text-xl font-bold tracking-widest uppercase">Linear</span>
            <span className="text-xl font-bold tracking-widest uppercase">Netflix</span>
            <span className="text-xl font-bold tracking-widest uppercase">Uber</span>
            <span className="text-xl font-bold tracking-widest uppercase">Adobe</span>
            <span className="text-xl font-bold tracking-widest uppercase">Stripe</span>
          </div>
        </div>
      </section>

      {/* 3. section */}

      <section className="min-h-screen w-full bg-white flex justify-center px-[3vh]">
  <div className="w-full max-w-[140vh] relative text-black pt-[10vh]">

    {/* TEXT AREA */}
    <div className="py-[8vh]">
      <h1 className="text-[6vh] sm:text-[6.5vh] lg:text-[12vh] font-semibold leading-[1.1]">
        Lorem ipsum dolor sit amet, consectetur
      </h1>

      <p className="py-[3vh] text-[2.6vh] max-w-[95vh] text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero,
        iure natus quia blanditiis ex doloribus accusamus quos tempora alias sequi
        dolor nihil hic dignissimos ipsam ut dolores numquam facilis?
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

<section className='min-h-screen w-full bg-red-500'>
  crosuel 
</section>


<section className='min-h-screen w-full bg-amber-500'>
cards
</section>


 {/* 3. section */}

      <section className="min-h-screen w-full bg-white flex justify-center px-[3vh]">
  <div className="w-full max-w-[140vh] relative text-black pt-[10vh]">

    {/* TEXT AREA */}
    <div className="py-[8vh]">
      <h1 className="text-[6vh] sm:text-[6.5vh] lg:text-[12vh] font-semibold leading-[1.1]">
        Lorem ipsum dolor sit amet, consectetur
      </h1>

      <p className="py-[3vh] text-[2.6vh] max-w-[95vh] text-gray-700 leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit libero,
        iure natus quia blanditiis ex doloribus accusamus quos tempora alias sequi
        dolor nihil hic dignissimos ipsam ut dolores numquam facilis?
      </p>
    </div>

    <div className="relative w-full p-10 min-h-[65vh] gap-5 rounded-[2vh] bg-red-500 grid grid-cols-4 overflow-hidden">
      
      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/30 z-10 rounded-[2vh]"></div> */}

      <div className='bg-amber-500 rounded-xl   h-[300px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[300px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
 
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl relative bottom-[100px]   h-[300px] w-[200px]'></div>
       <div className='bg-amber-500 rounded-xl relative bottom-[100px]   h-[300px] w-[200px]'></div>

      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>
      <div className='bg-amber-500 rounded-xl   h-[200px] w-[200px]'></div>



     
    </div>

  </div>
</section>













    <section className='min-h-screen w-full bg-white'></section>


      {/* 3. PROBLEM (White) */}
      {/* <section id="problem-section" className="py-20 lg:py-40 bg-white text-black relative lg:sticky lg:top-0 z-[10] min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <div className="text-black font-black text-9xl leading-none mb-8 ">
                84%
              </div>
              <h2 className="text-6xl font-bold tracking-tighter leading-[0.9] mb-8">
                Of your team is running on empty.
              </h2>
              <div className="h-1 w-24 bg-black mb-8"></div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                Burnout isn't a weakness; it's a math problem.
                Meeting density + Context switching - Recovery time = Cognitive Debt.
              </p>
            </div>
            <div className="lg:w-1/2 pt-20">
              <div className="space-y-16">
                <div className="problem-item">
                  <ProblemItem
                    title="Calendar Tetris"
                    desc="Back-to-back meetings leave zero time for recovery, creating a physiological stress response that accumulates throughout the week."
                  />
                </div>
                <div className="problem-item">
                  <ProblemItem
                    title="The &quot;Green&quot; Illusion"
                    desc="Your team says they're 'Fine'. Their commit logs and response times say otherwise. Subjective reporting is lagging data."
                  />
                </div>
                <div className="problem-item">
                  <ProblemItem
                    title="Retention Crisis"
                    desc="By the time they resign, it's too late. The warning signs were visible in their work patterns 3 months ago."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 4. DEEP WORK (Black) */}
      {/* <section id="deep-work-section" className="py-20 lg:py-40 bg-black relative border-b border-white/10 lg:sticky lg:top-0 z-[20] min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row items-baseline gap-8 mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              Protect <span className="text-[#CCFF00]">Deep Work</span>.
            </h2>
            <div className="text-gray-500 font-mono uppercase tracking-widest text-sm">Signal Type: Focus</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="w-full h-[400px] border-l-2 border-[#CCFF00] bg-gradient-to-r from-[#CCFF00]/10 to-transparent flex flex-col justify-center pl-10">
                <div className="text-6xl font-black text-white mb-2">12.5h</div>
                <div className="text-gray-400 text-lg">Uninterrupted Focus / Week</div>

                <div className="mt-12 flex gap-2 items-end h-20">
                  <div className="deep-work-bar w-12 bg-[#CCFF00]" style={{ height: '70%' }}></div>
                  <div className="deep-work-bar w-12 bg-[#CCFF00]" style={{ height: '90%' }}></div>
                  <div className="deep-work-bar w-12 bg-[#CCFF00]" style={{ height: '60%' }}></div>
                  <div className="deep-work-bar w-12 bg-[#CCFF00]/20" style={{ height: '30%' }}></div>
                  <div className="deep-work-bar w-12 bg-[#CCFF00]/20" style={{ height: '20%' }}></div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">The Flow State Engine</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Every interruption costs 23 minutes of refocus time. Neurologic identifies fragmented calendars and suggests optimized "Maker Times" to restore productivity.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* 5. COMPARISON (Light Gray/White) */}
      {/* <section id="comparison-section" className="py-20 lg:py-40 bg-gray-50 text-black lg:sticky lg:top-0 z-[30] min-h-screen flex flex-col justify-center">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-center text-4xl font-bold text-black mb-24 uppercase tracking-wider">Evolution of Management</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="opacity-60 hover:opacity-100 transition-opacity">
              <h3 className="text-xl font-bold text-gray-400 mb-8 border-b border-gray-300 pb-4">Classic HR Tools</h3>
              <div className="space-y-6">
                <div className="comp-item"><CompItem negative text="Annual Surveys (Too slow)" dark /></div>
                <div className="comp-item"><CompItem negative text="Subjective 1:1 reporting" dark /></div>
                <div className="comp-item"><CompItem negative text="Lines of Code / Tickets" dark /></div>
                <div className="comp-item"><CompItem negative text="Reactive (Fix it after they quit)" dark /></div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black mb-8 border-b border-black pb-4">Neurologic</h3>
              <div className="space-y-6">
                <div className="comp-item"><CompItem text="Real-time Passive Signal" dark /></div>
                <div className="comp-item"><CompItem text="Objective Calendar Data" dark /></div>
                <div className="comp-item"><CompItem text="Cognitive Load & Focus Scores" dark /></div>
                <div className="comp-item"><CompItem text="Predictive (Fix it before they break)" dark /></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 6. ROI / IMPACT (Light) */}
      {/* <section id="roi-section" className="py-20 bg-white text-black border-t border-gray-100 relative z-[40]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="bg-black text-white rounded-[3rem] p-12 md:p-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CCFF00] rounded-full text-black mb-6">
                  <DollarSign />
                </div>
                <div className="text-5xl font-black mb-2 roi-number">$32k</div>
                <div className="opacity-60 uppercase text-xs tracking-widest leading-loose">Saved per engineer<br />annually in retention</div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CCFF00] rounded-full text-black mb-6">
                  <Zap />
                </div>
                <div className="text-5xl font-black mb-2 roi-number">24%</div>
                <div className="opacity-60 uppercase text-xs tracking-widest leading-loose">Increase in<br />Deep Work blocks</div>
              </div>
              <div>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#CCFF00] rounded-full text-black mb-6">
                  <Eye />
                </div>
                <div className="text-5xl font-black mb-2 roi-number">0</div>
                <div className="opacity-60 uppercase text-xs tracking-widest leading-loose">Private messages<br />read or analyzed</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}


      {/* 7. ENERGY BATTERY (Black) */}
      {/* <section id="battery-section" className="py-40 bg-black relative z-[50]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row-reverse items-baseline justify-between gap-8 mb-20">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight text-right">
              Human <span className="text-blue-500">Batteries</span>.
            </h2>
            <div className="text-gray-500 font-mono uppercase tracking-widest text-sm">Signal Type: Recovery</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">Dynamic Recovery Metrics</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Humans are not machines. We cycle through ultradian rhythms.
                Neurologic assigns a personalized "Battery Score" to every employee, updating in real-time based on their calendar intensity.
              </p>
            </div>

            <div className="relative flex justify-end">
              <div className="w-[400px] h-[400px] rounded-full border border-blue-500/30 flex items-center justify-center relative">
                <div className="w-[300px] h-[300px] rounded-full border border-blue-500/50 flex items-center justify-center relative animate-pulse">
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                    <div className="text-4xl font-bold text-white">92%</div>
                    <div className="text-xs uppercase tracking-widest text-blue-500">Charged</div>
                  </div>
                </div>
                <div className="battery-fill absolute top-0 w-1 h-20 bg-gradient-to-b from-blue-500 to-transparent box-content"></div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 8. MANIFESTO (Black Typography) */}
      {/* <section id="manifesto-section" className="py-60 bg-black flex items-center justify-center relative overflow-hidden text-center z-[60]">
        <div className="absolute inset-0 bg-[#CCFF00] opacity-[0.02]" />
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <h2 className="manifesto-text text-4xl md:text-6xl font-serif italic text-gray-500 mb-8 leading-tight">
            "The era of measuring productivity by hours sat in a chair is dead.
            <span className="text-white not-italic font-sans font-bold block mt-4">We are building for the cognitive athlete."</span>
          </h2>
          <div className="w-20 h-1 bg-[#CCFF00] mx-auto"></div>
        </div>
      </section> */}

      {/* 9. PROCESS (White) */}
      {/* <section id="process-section" className="py-40 bg-white text-black relative z-[70]">
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-8xl font-black text-black/10 absolute right-0 -mt-22 z-0 select-none">PROCESS</h2>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="process-step">
              <Step
                num="01"
                title="Connect"
                desc="Single-click OAuth integration with Microsoft 365. No agents to install. Privacy by design."
              />
            </div>
            <div className="process-step">
              <Step
                num="02"
                title="Analzye"
                desc="Our engine ingests 12 months of calendar history to establish baseline rhythms and detect anomalies."
              />
            </div>
            <div className="process-step">
              <Step
                num="03"
                title="Optimize"
                desc="Receive weekly Pulse Reports. Managers see burn risks; Employees see protection plans."
              />
            </div>
          </div>
        </div>
      </section> */}

      {/* 10. FINAL CTA (Black) */}
      {/* <section className="py-40 bg-black text-white text-center border-t border-white/10 relative z-[80]">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-white">
            Ready to optimize?
          </h2>
          <Link href="/dashboard/leader">
            <button className="px-12 py-6 bg-white text-black rounded-full font-bold uppercase tracking-widest text-lg hover:bg-[#CCFF00] transition-colors flex items-center gap-4 mx-auto">
              Deploy Neural Engine
            </button>
          </Link>
          <p className="mt-8 text-sm text-gray-500 uppercase tracking-widest">No credit card required for pilot</p>
        </div>
      </section> */}

      {/* 11. FOOTER (Massive with Center Text) */}
      <footer className="pt-32 pb- bg-[#000000] text-white border-t border-white/10 relative overflow-hidden z-[90]">
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10 md:mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-bold tracking-tighter mb-6 flex items-center gap-2">
                <Brain className="text-[#CCFF00]" /> Neurologic
              </div>
              <p className="text-gray-500 max-w-sm mb-8">
                The world's first biological intelligence platform for engineering teams.
                Stop burning out your best people.
              </p>
              <div className="flex gap-4">
                <SocialIcon icon={<Twitter size={20} />} />
                <SocialIcon icon={<Linkedin size={20} />} />
                <SocialIcon icon={<Github size={20} />} />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Product</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <FooterLink>Deep Work Analysis</FooterLink>
                <FooterLink>Energy Battery</FooterLink>
                <FooterLink>ROI Calculator</FooterLink>
                <FooterLink>Integrations</FooterLink>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-sm">Company</h4>
              <ul className="space-y-4 text-gray-500 text-sm">
                <FooterLink>Manifesto</FooterLink>
                <FooterLink>Science</FooterLink>
                <FooterLink>Careers</FooterLink>
                <FooterLink>Legal</FooterLink>
              </ul>
            </div>
          </div>

          {/* MASSIVE CENTER TEXT */}
          <div className="flex justify-center items-center relative md:pt-32 ">
            <h1 className="footer-brand-text text-[15vw] leading-none font-black md:absolute -bottom-14 tracking-tighter text-white opacity-10 select-none hover:opacity-20 transition-opacity duration-500">
              NEUROLOGIC
            </h1>
          </div>


        </div>
      </footer>
    </main>
  )
}

function ProblemItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="group">
      <h3 className="text-2xl font-bold mb-2 group-hover:text-red-600 transition-colors">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-lg">{desc}</p>
    </div>
  )
}

function CompItem({ text, negative, dark }: { text: string, negative?: boolean, dark?: boolean }) {
  return (
    <div className="flex items-center gap-6">
      {negative
        ? <X className="text-red-500 shrink-0" />
        : <Check className={`shrink-0 ${dark ? 'text-black' : 'text-[#CCFF00]'}`} />
      }
      <span className={`text-xl font-medium ${negative ? 'border-b-2 border-red-500/20 text-gray-500' : (dark ? 'text-black' : 'text-white')}`}>{text}</span>
    </div>
  )
}

function Step({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="border-t-4 border-black pt-8">
      <div className="text-6xl font-black text-black mb-4">{num}</div>
      <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{title}</h3>
      <p className="text-gray-600 font-medium leading-relaxed">{desc}</p>
    </div>
  )
}

function IntegrationCard({ icon, title }: any) {
  return (
    <div className="p-8 border border-gray-200 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-black transition-colors">
      <div className="text-gray-400">{icon}</div>
      <div className="font-bold">{title}</div>
    </div>
  )
}

function FAQItem({ q, a }: { q: string, a: string }) {
  return (
    <div className="border-b border-white/10 pb-6 mb-6">
      <h3 className="text-xl font-bold mb-2 text-white">{q}</h3>
      <p className="text-gray-400 leading-relaxed">{a}</p>
    </div>
  )
}

function PrivacyCard({ title, desc }: any) {
  return (
    <div className="p-8 border border-white/10 rounded-2xl bg-[#0a0a0a]">
      <div className="text-xl font-bold text-white mb-2">{title}</div>
      <div className="text-gray-500">{desc}</div>
    </div>
  )
}

function SocialIcon({ icon }: any) {
  return (
    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black transition-all cursor-pointer">
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
