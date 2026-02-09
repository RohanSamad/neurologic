'use client'

import { Clock, Battery, Shield, ArrowUp, ArrowDown, Calendar } from 'lucide-react'

export default function PersonalDashboard() {
    return (
        <div className="max-w-5xl mx-auto space-y-10">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold text-white mb-1">My Capacity</h1>
                <p className="text-gray-500 text-sm">Monitor your work rhythms and protect your focus.</p>
            </div>

            {/* Top Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <MetricCard icon={<Battery />} label="Energy" value="82%" sub="High" color="text-green-500" />
                <MetricCard icon={<Clock />} label="Deep Work" value="14.5h" sub="+2h vs last week" color="text-[#CCFF00]" />
                <MetricCard icon={<Calendar />} label="Meetings" value="12h" sub="-15% vs avr" color="text-blue-500" />
                <MetricCard icon={<Shield />} label="Burn Risk" value="Low" sub="Sustainable" color="text-green-500" />
            </div>

            {/* Capacity Timeline */}
            <section>
                <h2 className="text-lg font-bold text-white mb-6 uppercase tracking-wider">Capacity Timeline</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <TimelineCard
                        period="Last Week"
                        date="Jan 22 - Jan 28"
                        load={85}
                        status="Overloaded"
                        breakdown={[30, 40, 15]} // Deep, Meeting, Shallow
                    />
                    <TimelineCard
                        period="This Week"
                        date="Jan 29 - Feb 04"
                        load={60}
                        status="Optimal"
                        isCurrent
                        breakdown={[45, 25, 30]}
                    />
                    <TimelineCard
                        period="Next Week"
                        date="Feb 05 - Feb 11"
                        load={40}
                        status="Light"
                        breakdown={[20, 50, 30]}
                    />
                </div>
            </section>

            {/* Privacy Controls */}
            <section className="bg-[#0a0a0a] rounded-2xl border border-white/5 p-8">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-lg font-bold text-white">Privacy Controls</h2>
                        <p className="text-gray-500 text-sm mt-1">Manage what your team leader can see.</p>
                    </div>
                    <Shield className="h-6 w-6 text-gray-600" />
                </div>

                <div className="space-y-6">
                    <Toggle label="Share Deep Work Score" desc="Allow leaders to see your focus hours total." checked />
                    <Toggle label="Share Burn Rate Status" desc="Allow leaders to see your red/yellow/green status." checked />
                    <Toggle label="Share Calendar Details" desc="Allow leaders to see specific meeting titles." checked={false} />
                </div>
            </section>
        </div>
    )
}

function MetricCard({ icon, label, value, sub, color }: any) {
    return (
        <div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5">
            <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-white/5 text-gray-400">{icon}</div>
                {/* Sparkline placeholder */}
                <div className="flex gap-0.5 items-end h-6">
                    <div className="w-1 bg-gray-800 h-2"></div>
                    <div className="w-1 bg-gray-800 h-4"></div>
                    <div className="w-1 bg-[#CCFF00] h-full"></div>
                </div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="flex justify-between items-center">
                <div className="text-xs text-gray-500 uppercase tracking-wide">{label}</div>
                <div className={`text-xs font-mono font-bold ${color}`}>{sub}</div>
            </div>
        </div>
    )
}

function TimelineCard({ period, date, load, status, breakdown, isCurrent }: any) {
    const total = breakdown.reduce((a: any, b: any) => a + b, 0)

    return (
        <div className={`p-6 rounded-2xl border flex flex-col h-full ${isCurrent ? 'bg-[#0f0f0f] border-[#CCFF00]/30 relative' : 'bg-[#0a0a0a] border-white/5 text-gray-400'}`}>
            {isCurrent && <div className="absolute top-0 right-0 px-3 py-1 bg-[#CCFF00] text-black text-[10px] font-bold uppercase rounded-bl-xl">Current</div>}

            <div className="mb-6">
                <div className="text-xs font-bold uppercase tracking-widest mb-1">{period}</div>
                <div className="text-sm opacity-60 font-mono">{date}</div>
            </div>

            <div className="flex-1 flex flex-col justify-end space-y-4">
                <div className="flex items-end gap-2 h-32 w-full pb-2 border-b border-white/5">
                    {/* Fake Bar Chart */}
                    <div className="w-full bg-[#CCFF00]/20 h-[30%] rounded-t-sm"></div>
                    <div className="w-full bg-[#CCFF00]/40 h-[60%] rounded-t-sm"></div>
                    <div className="w-full bg-[#CCFF00] h-[80%] rounded-t-sm relative group">
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                            {load}%
                        </div>
                    </div>
                    <div className="w-full bg-[#CCFF00]/50 h-[40%] rounded-t-sm"></div>
                    <div className="w-full bg-[#CCFF00]/30 h-[20%] rounded-t-sm"></div>
                </div>

                <div className="flex justify-between items-center pt-2">
                    <span className="text-xs uppercase">Load</span>
                    <span className={`text-sm font-bold ${load > 80 ? 'text-red-500' : 'text-white'}`}>{status}</span>
                </div>
            </div>
        </div>
    )
}

function Toggle({ label, desc, checked }: any) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <div className="text-sm font-bold text-gray-200">{label}</div>
                <div className="text-xs text-gray-500">{desc}</div>
            </div>
            <div className={`w-12 h-6 rounded-full relative transition-colors ${checked ? 'bg-[#CCFF00]' : 'bg-gray-800'}`}>
                <div className={`absolute top-1 bottom-1 w-4 h-4 bg-black rounded-full transition-transform ${checked ? 'left-7' : 'left-1'}`} />
            </div>
        </div>
    )
}
