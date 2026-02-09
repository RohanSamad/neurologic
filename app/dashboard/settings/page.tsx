'use client'

import { useState } from 'react'
import { Bell, Lock, User, Cloud, Shield, Check, Mail, Smartphone, RefreshCw, Eye } from 'lucide-react'

export default function SettingsPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12 pb-20">
            <div>
                <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
                <p className="text-gray-500">Manage your profile, integrations, and privacy preferences.</p>
            </div>

            {/* 1. PROFILE SECTION */}
            <section className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                        <User className="text-[#CCFF00]" size={20} />
                        <h2 className="text-lg font-bold text-white">Profile & Account</h2>
                    </div>
                    <p className="text-gray-500 text-sm ml-8">Update your personal information and role.</p>
                </div>

                <div className="p-8 space-y-8">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 rounded-full bg-gray-800 border-2 border-white/10 overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <button className="bg-white text-black px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wide hover:bg-[#CCFF00] transition-colors">
                                Change Avatar
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputGroup label="Full Name" value="Felix Henderson" />
                        <InputGroup label="Email Address" value="felix@example.com" />
                        <InputGroup label="Role" value="Senior Engineer" disabled />
                        <InputGroup label="Department" value="Product Engineering" disabled />
                    </div>
                </div>
            </section>

            {/* 2. INTEGRATIONS (Microsoft) */}
            <section className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                        <Cloud className="text-blue-500" size={20} />
                        <h2 className="text-lg font-bold text-white">Integrations</h2>
                    </div>
                    <p className="text-gray-500 text-sm ml-8">Manage connections to your calendar and work tools.</p>
                </div>

                <div className="p-8">
                    <div className="bg-[#050505] border border-white/10 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-[#2d2d2d] rounded-xl flex items-center justify-center text-white font-bold text-xl">
                                M
                            </div>
                            <div>
                                <h3 className="text-white font-bold">Microsoft 365</h3>
                                <div className="flex items-center gap-2 text-xs text-green-500 mt-1">
                                    <Check size={12} /> Connected (Syncing)
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                                <div className="text-xs text-gray-500 uppercase tracking-widest">Last Sync</div>
                                <div className="text-white font-mono text-sm">Just now</div>
                            </div>
                            <button className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                                <RefreshCw size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. NOTIFICATIONS */}
            <section className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                        <Bell className="text-yellow-500" size={20} />
                        <h2 className="text-lg font-bold text-white">Notifications</h2>
                    </div>
                    <p className="text-gray-500 text-sm ml-8">Choose how you want to be alerted about burnout risks.</p>
                </div>

                <div className="p-8 space-y-6">
                    <ToggleRow
                        icon={<Mail size={16} />}
                        title="Weekly Capacity Report"
                        desc="Receive a summary of your energy battery and deep work stats every Monday."
                        enabled={true}
                    />
                    <ToggleRow
                        icon={<Smartphone size={16} />}
                        title="Real-time Burnout Alerts"
                        desc="Get notified immediately if your battery drops below 30%."
                        enabled={false}
                    />
                </div>
            </section>

            {/* 4. PRIVACY */}
            <section className="bg-[#0a0a0a] rounded-3xl border border-white/5 overflow-hidden">
                <div className="p-8 border-b border-white/5">
                    <div className="flex items-center gap-3 mb-1">
                        <Shield className="text-[#CCFF00]" size={20} />
                        <h2 className="text-lg font-bold text-white">Privacy & Data</h2>
                    </div>
                    <p className="text-gray-500 text-sm ml-8">Control how your data is processed and shared.</p>
                </div>

                <div className="p-8 space-y-6">
                    <div className="p-4 bg-[#CCFF00]/5 border border-[#CCFF00]/10 rounded-xl mb-6">
                        <h4 className="text-[#CCFF00] font-bold text-sm mb-1 flex items-center gap-2"><Lock size={14} /> SOC2 Compliant Mode Active</h4>
                        <p className="text-[#CCFF00]/70 text-xs">Your data is currently encrypted at rest and in transit. Raw calendar events are never stored.</p>
                    </div>

                    <ToggleRow
                        icon={<Eye size={16} />}
                        title="Share Aggregate Score with Manager"
                        desc="Allow your manager to see your 'Burn Risk' score. (They still cannot see your calendar events)."
                        enabled={true}
                    />
                </div>
            </section>
        </div>
    )
}

function InputGroup({ label, value, disabled }: { label: string, value: string, disabled?: boolean }) {
    return (
        <div className="space-y-2">
            <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">{label}</label>
            <input
                type="text"
                value={value}
                disabled={disabled}
                className={`w-full bg-[#050505] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#CCFF00] transition-colors ${disabled && 'opacity-50 cursor-not-allowed'}`}
            />
        </div>
    )
}

function ToggleRow({ icon, title, desc, enabled }: { icon: any, title: string, desc: string, enabled: boolean }) {
    const [isOn, setIsOn] = useState(enabled)

    return (
        <div className="flex items-start justify-between gap-4">
            <div className="flex gap-4">
                <div className="mt-1 text-gray-400">{icon}</div>
                <div>
                    <h3 className="font-bold text-white text-sm mb-1">{title}</h3>
                    <p className="text-xs text-gray-500 max-w-md leading-relaxed">{desc}</p>
                </div>
            </div>

            <button
                onClick={() => setIsOn(!isOn)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${isOn ? 'bg-[#CCFF00]' : 'bg-gray-700'}`}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-black transition-transform ${isOn ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
        </div>
    )
}
