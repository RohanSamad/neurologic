'use client'

import { useState, useEffect } from 'react'
import { generateMockEmployees, Employee } from '@/lib/mock/data'
import { Search, Filter, Brain, BatteryCharging, X, Activity, Zap, Clock, TrendingUp, Calendar, Cpu, AlertTriangle, CheckCircle2 } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function LeaderDashboard() {
    const [filter, setFilter] = useState('')
    const [users, setUsers] = useState<Employee[]>([])
    const [selectedUser, setSelectedUser] = useState<Employee | null>(null)

    // Fix Hydration Error: Generate random data only on client mount
    useEffect(() => {
        setUsers(generateMockEmployees(25))
    }, [])

    return (
        <div className="space-y-10 relative">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-4xl font-black text-white mb-2 uppercase tracking-tight">Team Pulse</h1>
                    <p className="text-gray-500 text-sm tracking-wide">Cognitive Load & Energy Monitoring</p>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-hover:text-white transition-colors" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-[#0a0a0a] border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#CCFF00] transition-colors w-40 focus:w-64"
                        />
                    </div>
                    <button className="p-2 rounded-full border border-white/10 hover:bg-[#CCFF00] hover:text-black text-gray-400 transition-all hover:scale-105" title="Filter">
                        <Filter className="h-4 w-4" />
                    </button>
                    <button className="p-2 rounded-full border border-white/10 hover:bg-[#CCFF00] hover:text-black text-gray-400 transition-all hover:scale-105" title="Export CSV">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {users.map((user) => (
                    <EmployeeCard key={user.id} user={user} onSelect={() => setSelectedUser(user)} />
                ))}
            </div>

            {/* Detail Modal */}
            {selectedUser && (
                <EmployeeDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} />
            )}
        </div>
    )
}

function EmployeeCard({ user, onSelect }: { user: Employee, onSelect: () => void }) {
    // Color logic
    const batteryColor = user.battery < 30 ? 'text-red-500' : user.battery < 60 ? 'text-yellow-500' : 'text-[#CCFF00]'
    const batteryBg = user.battery < 30 ? 'bg-red-500' : user.battery < 60 ? 'bg-yellow-500' : 'bg-[#CCFF00]'
    const isCritical = user.burnRate > 80

    return (
        <div
            onClick={onSelect}
            className="group relative flex flex-col p-6 rounded-3xl bg-gradient-to-b from-[#0f0f0f] to-[#050505] border border-white/5 hover:border-[#CCFF00]/30 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#CCFF00]/5 cursor-pointer overflow-hidden"
        >
            {/* Hover Glow Effect */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:via-[#CCFF00]/50 transition-all duration-500" />
            <div className="absolute -inset-0.5 bg-gradient-to-br from-[#CCFF00]/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500" />

            <div className="relative z-10 flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-[#CCFF00] transition-colors">
                            <img src={user.avatar} alt="avatar" className="w-full h-full object-cover" />
                        </div>
                        <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-[#0a0a0a] ${user.status === 'online' ? 'bg-[#CCFF00]' : 'bg-gray-500'}`} />
                    </div>
                    <div>
                        <h3 className="font-bold text-white text-base leading-tight group-hover:text-[#CCFF00] transition-colors">{user.name}</h3>
                        <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mt-0.5">{user.role}</p>
                    </div>
                </div>

                {/* Status Badge */}
                <div className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide border ${user.status === 'online' ? 'bg-[#CCFF00]/10 border-[#CCFF00]/20 text-[#CCFF00]' : 'bg-white/5 border-white/5 text-gray-500'}`}>
                    {user.status}
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3 mb-4">
                {/* Battery Metric */}
                <div className="bg-white/[0.03] rounded-xl p-3 border border-white/5 group-hover:bg-white/[0.06] transition-colors">
                    <div className="flex items-center gap-2 mb-2">
                        <BatteryCharging className={`h-3.5 w-3.5 ${batteryColor}`} />
                        <span className="text-xs text-gray-400 font-medium">Energy</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <span className="text-lg font-mono font-bold text-white leading-none">{Math.round(user.battery)}%</span>
                        <div className="flex gap-0.5 h-1.5 mb-1">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={`w-1.5 rounded-sm ${i * 20 <= user.battery ? batteryBg : 'bg-white/10'}`} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Burn Rate Metric */}
                <div className={`rounded-xl p-3 border transition-colors ${isCritical ? 'bg-red-500/10 border-red-500/20' : 'bg-white/[0.03] border-white/5'}`}>
                    <div className="flex items-center gap-2 mb-2">
                        <Brain className={`h-3.5 w-3.5 ${isCritical ? 'text-red-500' : 'text-gray-400'}`} />
                        <span className="text-xs text-gray-400 font-medium">Load</span>
                    </div>
                    <div className="flex items-end justify-between">
                        <span className={`text-lg font-mono font-bold leading-none ${isCritical ? 'text-red-500' : 'text-white'}`}>{Math.round(user.burnRate)}</span>
                        <div className="w-10 h-1 bg-white/10 rounded-full overflow-hidden mb-1">
                            <div className={`h-full ${isCritical ? 'bg-red-500' : 'bg-gray-400'} transition-all`} style={{ width: `${user.burnRate}%` }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10 flex items-center justify-between pt-4 border-t border-white/5 text-xs text-gray-500">
                <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>{user.location}</span>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#CCFF00]">
                    <span className="font-bold">Detail</span>
                    <TrendingUp className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </div>
    )
}

function EmployeeDetailModal({ user, onClose }: { user: Employee, onClose: () => void }) {
    const [timeframe, setTimeframe] = useState<'1H' | '24H' | '7D'>('7D')

    // Generate chart data based on selected timeframe
    const chartData = {
        '1H': [
            { day: '10m', value: Math.max(0, user.battery - 5) },
            { day: '20m', value: Math.max(0, user.battery - 8) },
            { day: '30m', value: Math.max(0, user.battery - 4) },
            { day: '40m', value: Math.max(0, user.battery - 6) },
            { day: '50m', value: Math.max(0, user.battery - 2) },
            { day: 'Now', value: user.battery },
        ],
        '24H': [
            { day: '00:00', value: Math.max(0, user.battery - 15) },
            { day: '04:00', value: Math.max(0, user.battery - 12) },
            { day: '08:00', value: Math.max(0, user.battery - 20) },
            { day: '12:00', value: Math.max(0, user.battery - 5) },
            { day: '16:00', value: Math.max(0, user.battery + 5) },
            { day: '20:00', value: user.battery },
        ],
        '7D': [
            { day: 'Mon', value: Math.max(0, user.battery - 20) },
            { day: 'Tue', value: Math.max(0, user.battery - 15) },
            { day: 'Wed', value: Math.max(0, user.battery - 5) },
            { day: 'Thu', value: Math.max(0, user.battery - 10) },
            { day: 'Fri', value: Math.max(0, user.battery + 5) },
            { day: 'Sat', value: Math.max(0, user.battery - 5) },
            { day: 'Sun', value: user.battery },
        ]
    }[timeframe]

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
                onClick={onClose}
            />

            <div className="relative w-full max-w-5xl bg-[#0a0a0a]/90 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in-95 duration-300 ring-1 ring-white/5">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-all hover:rotate-90"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left Panel: Identity & Core Status */}
                <div className="w-full md:w-80 bg-[#0f0f0f]/50 border-r border-white/5 p-8 flex flex-col relative overflow-hidden">
                    {/* Background Gradients */}
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#CCFF00]/5 to-transparent opacity-50" />

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="relative mb-6 group">
                            <div className="absolute inset-0 bg-[#CCFF00] blur-3xl opacity-20 rounded-full group-hover:opacity-30 transition-opacity" />
                            <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-br from-[#CCFF00] to-transparent">
                                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0a0a0a]">
                                    <img src={user.avatar} alt="avatar" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                            </div>
                            <div className={`absolute bottom-1 right-2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] ${user.status === 'online' ? 'bg-[#CCFF00]' :
                                user.status === 'focused' ? 'bg-purple-500' :
                                    user.status === 'meeting' ? 'bg-blue-500' : 'bg-gray-500'
                                }`} />
                        </div>

                        <h2 className="text-2xl font-black text-white mb-2 tracking-tight">{user.name}</h2>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 text-xs font-mono text-gray-400 mb-8">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse" />
                            {user.role}
                        </div>

                        <div className="w-full space-y-4">
                            <StatusCard
                                icon={<Activity className="w-4 h-4 text-[#CCFF00]" />}
                                label="Cognitive Load"
                                value={user.burnRate}
                                suffix="%"
                                color="text-[#CCFF00]"
                            />
                            <StatusCard
                                icon={<BatteryCharging className="w-4 h-4 text-emerald-400" />}
                                label="Energy Bank"
                                value={user.battery}
                                suffix="%"
                                color="text-emerald-400"
                            />
                        </div>
                    </div>

                    <div className="mt-auto pt-8">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                            <div className="flex items-start gap-3">
                                <div className="p-2 rounded-lg bg-[#CCFF00]/10 text-[#CCFF00]">
                                    <Zap className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-white text-sm font-bold mb-1">Recommendation</p>
                                    <p className="text-gray-400 text-xs leading-relaxed">
                                        Detecting high cognitive load. Schedule a 15min reset break before next meeting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Advanced Analytics */}
                <div className="flex-1 p-8 bg-[#0a0a0a] overflow-y-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                <TrendingUp className="w-5 h-5 text-[#CCFF00]" />
                                Neural Performance
                            </h3>
                            <p className="text-gray-500 text-sm mt-1">Real-time biometric & productivity analysis</p>
                        </div>
                        <div className="flex gap-2">
                            {(['1H', '24H', '7D'] as const).map((period) => (
                                <button
                                    key={period}
                                    onClick={() => setTimeframe(period)}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${timeframe === period ? 'bg-[#CCFF00] text-black' : 'bg-white/5 text-gray-500 hover:bg-white/10'}`}
                                >
                                    {period}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                        <MetricBox
                            label="Focus Hours"
                            value={user.deepWorkHours}
                            total={20}
                            icon={<Brain className="w-4 h-4" />}
                            color="bg-purple-500"
                        />
                        <MetricBox
                            label="Meeting Load"
                            value={user.meetingHours}
                            total={40}
                            icon={<Calendar className="w-4 h-4" />}
                            color="bg-blue-500"
                        />
                        <MetricBox
                            label="Efficiency"
                            value={85}
                            total={100}
                            suffix="%"
                            icon={<Cpu className="w-4 h-4" />}
                            color="bg-emerald-500"
                        />
                    </div>

                    <div className="mb-8 p-6 rounded-3xl bg-white/[0.02] border border-white/5 relative overflow-hidden">
                        <div className="flex justify-between items-end mb-6 relative z-10">
                            <div>
                                <h4 className="text-white font-bold mb-1">Energy Trend</h4>
                                <p className="text-gray-500 text-xs">Biometric battery levels over last {timeframe}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-mono text-[#CCFF00] font-bold">
                                    <Counter value={user.battery} />%
                                </div>
                                <div className="text-xs text-emerald-500 font-bold flex items-center justify-end gap-1">
                                    <TrendingUp className="w-3 h-3" /> +2.4%
                                </div>
                            </div>
                        </div>

                        <div className="h-64 w-full relative z-10">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={chartData}>
                                    <defs>
                                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#CCFF00" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#CCFF00" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                    <XAxis
                                        dataKey="day"
                                        stroke="#666"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                    />
                                    <YAxis
                                        stroke="#666"
                                        fontSize={12}
                                        tickLine={false}
                                        axisLine={false}
                                        domain={[0, 100]}
                                        hide
                                    />
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#0a0a0a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                        itemStyle={{ color: '#CCFF00' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="value"
                                        stroke="#CCFF00"
                                        strokeWidth={3}
                                        fillOpacity={1}
                                        fill="url(#colorValue)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                <AlertTriangle className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">Risk Factor</div>
                                <div className="text-red-400 text-xs">High context switching detected</div>
                            </div>
                        </div>
                        <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500">
                                <CheckCircle2 className="w-5 h-5" />
                            </div>
                            <div>
                                <div className="text-white font-bold text-sm">On Track</div>
                                <div className="text-emerald-400 text-xs">Project Alpha milestones met</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// ----------------------------------------------------------------------
// Helper Components
// ----------------------------------------------------------------------

function Counter({ value, duration = 1500 }: { value: number, duration?: number }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        let startTime: number
        let animationFrame: number

        const update = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = timestamp - startTime
            const percentage = Math.min(progress / duration, 1)
            const ease = 1 - Math.pow(1 - percentage, 3) // Cubic ease out

            setCount(Math.round(ease * value))

            if (progress < duration) {
                animationFrame = requestAnimationFrame(update)
            }
        }

        animationFrame = requestAnimationFrame(update)
        return () => cancelAnimationFrame(animationFrame)
    }, [value, duration])

    return <>{count}</>
}

function StatusCard({ icon, label, value, suffix, color }: any) {
    return (
        <div className="w-full bg-[#0a0a0a] rounded-xl p-4 border border-white/5 flex items-center justify-between group hover:border-white/10 transition-colors">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white transition-colors">{icon}</div>
                <span className="text-sm text-gray-400 font-medium">{label}</span>
            </div>
            <div className={`text-xl font-mono font-bold ${color}`}>
                <Counter value={value} />
                <span className="text-sm ml-0.5 opacity-50">{suffix}</span>
            </div>
        </div>
    )
}

function MetricBox({ label, value, total, icon, color, suffix = 'h' }: any) {
    const percentage = Math.min((value / total) * 100, 100)
    return (
        <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400 flex items-center gap-2">
                    {icon} {label}
                </span>
                <span className="text-white font-mono font-bold">{value}{suffix}</span>
            </div>
            <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div
                    className={`h-full ${color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

function Sparkline({ data }: { data: number[] }) {
    const max = 100
    const points = data.map((val, i) => {
        const x = (i / (data.length - 1)) * 100
        const y = 100 - (val / max) * 100
        return `${x},${y}`
    }).join(' ')

    const areaPoints = `0,100 ${points} 100,100`

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible preserve-3d">
            <defs>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
                </linearGradient>
            </defs>
            <polygon points={areaPoints} fill="url(#gradient)" className="opacity-20 animate-pulse" />
            <polyline
                points={points}
                fill="none"
                stroke="#CCFF00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-[0_0_10px_rgba(204,255,0,0.5)]"
            />
            {data.map((val, i) => (
                <circle
                    key={i}
                    cx={(i / (data.length - 1)) * 100}
                    cy={100 - (val / max) * 100}
                    r="3"
                    className="fill-[#0a0a0a] stroke-[#CCFF00] stroke-[2px] transition-all hover:r-4"
                />
            ))}
        </svg>
    )
}
