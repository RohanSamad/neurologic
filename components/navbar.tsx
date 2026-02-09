'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Activity, Brain } from 'lucide-react'
import { LoginModal } from './login-modal'

export function Navbar() {
    const [isLoginOpen, setIsLoginOpen] = useState(false)

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
                <div className="flex items-center gap-12 rounded-full border border-white/10 bg-[#050505]/80 px-8 py-3 backdrop-blur-md">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Brain className="h-5 w-5 text-[#CCFF00] transition-transform group-hover:scale-110" />
                        <span className="text-sm font-bold tracking-widest uppercase text-white">
                            Neurologic
                        </span>
                    </Link>

                    {/* Links */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-xs font-medium tracking-wide text-gray-400 hover:text-white transition-colors uppercase">
                            Product
                        </Link>
                        <Link href="#mission" className="text-xs font-medium tracking-wide text-gray-400 hover:text-white transition-colors uppercase">
                            Mission
                        </Link>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => setIsLoginOpen(true)}
                        className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-[#CCFF00] transition-colors"
                    >
                        Sign In
                    </button>
                </div>
            </nav>

            <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
        </>
    )
}
