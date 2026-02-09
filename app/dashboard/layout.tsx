'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Activity, LayoutGrid, Users, Settings, LogOut } from 'lucide-react'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <div className="flex h-screen bg-[#000000] text-white overflow-hidden">
            {/* Sidebar */}
            <aside className="w-20 lg:w-64 border-r border-white/10 flex flex-col justify-between p-4">
                <div>
                    <div className="flex items-center gap-3 mb-10 px-2 text-[#CCFF00]">
                        <Activity className="h-6 w-6" />
                        <span className="hidden lg:block font-bold tracking-widest uppercase">Neurologic</span>
                    </div>

                    <nav className="space-y-2">
                        <NavLink
                            href="/dashboard/leader"
                            icon={<Users />}
                            label="Team Pulse"
                            active={pathname === '/dashboard/leader'}
                        />
                        <NavLink
                            href="/dashboard/personal"
                            icon={<LayoutGrid />}
                            label="My Capacity"
                            active={pathname === '/dashboard/personal'}
                        />
                        <NavLink
                            href="/dashboard/settings"
                            icon={<Settings />}
                            label="Settings"
                            active={pathname === '/dashboard/settings'}
                        />
                    </nav>
                </div>

                <button className="flex items-center gap-3 px-4 py-3 text-gray-500 hover:text-white transition-colors">
                    <LogOut className="h-5 w-5" />
                    <span className="hidden lg:block font-medium text-sm">Sign Out</span>
                </button>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-8 relative">
                {/* Background Glow */}
                <div className="absolute top-0 left-0 w-full h-[300px] bg-[#CCFF00] opacity-[0.03] blur-[100px] pointer-events-none" />
                {children}
            </main>
        </div>
    )
}

function NavLink({ href, icon, label, active }: { href: string, icon: React.ReactNode, label: string, active?: boolean }) {
    return (
        <Link
            href={href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active
                ? 'bg-[#CCFF00] text-black font-bold'
                : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
        >
            {icon}
            <span className="hidden lg:block text-sm uppercase tracking-wide">{label}</span>
        </Link>
    )
}
