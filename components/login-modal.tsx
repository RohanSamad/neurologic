'use client'

import { X, Brain } from 'lucide-react'
import Link from 'next/link'

export function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity"
                onClick={onClose}
            />

            {/* Modal Container */}
            <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 flex flex-col md:flex-row min-h-[500px]">

                {/* Left Side: Visual/Brand */}
                <div className="w-full md:w-1/2 bg-black relative flex flex-col items-center justify-center p-12 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden group">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 invert"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#CCFF00] opacity-[0.1] blur-[100px] group-hover:opacity-[0.15] transition-opacity duration-700" />

                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mb-8 ring-1 ring-[#CCFF00]/30 shadow-[0_0_40px_-10px_rgba(204,255,0,0.3)]">
                            <Brain className="w-12 h-12 text-[#CCFF00]" />
                        </div>
                        <h2 className="text-3xl font-black tracking-tighter text-white mb-2 uppercase">Neurologic</h2>
                        <p className="text-gray-500 text-sm tracking-widest uppercase">Cognitive Intelligence Interface</p>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div className="w-full md:w-1/2 bg-[#0a0a0a] p-12 flex flex-col justify-center relative">
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={24} />
                    </button>

                    <div className="mb-10">
                        <h3 className="text-2xl font-bold text-white mb-2">Welcome Back</h3>
                        <p className="text-gray-400">Connect your calendar to start the pulse.</p>
                    </div>

                    <div className="space-y-4">
                        {/* Microsoft Button */}
                        <Link href="/dashboard/leader" onClick={onClose} className="block w-full group">
                            <button className="w-full bg-[#111] hover:bg-[#222] border border-white/10 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-4 transition-all group-hover:border-white/20">
                                <svg width="24" height="24" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="1" y="1" width="9" height="9" fill="#F25022" />
                                    <rect x="11" y="1" width="9" height="9" fill="#7FBA00" />
                                    <rect x="1" y="11" width="9" height="9" fill="#00A4EF" />
                                    <rect x="11" y="11" width="9" height="9" fill="#FFB900" />
                                </svg>
                                <span>Continue with Microsoft 365</span>
                            </button>
                        </Link>

                        {/* Fake Google (Disabled) - for aesthetics */}
                        <button disabled className="w-full bg-transparent border border-white/5 text-gray-600 font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-4 cursor-not-allowed opacity-50">
                            <span>Google Workspace (Coming Soon)</span>
                        </button>
                    </div>

                    <p className="mt-8 text-center text-xs text-gray-600 leading-relaxed">
                        By connecting, you grant Neurologic access to calendar metadata.
                        <br />
                        <span className="text-gray-500 hover:text-gray-400 cursor-pointer">Read our Privacy Manifesto</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}
