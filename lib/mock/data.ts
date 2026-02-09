export type StatusStr = 'online' | 'focused' | 'offline' | 'meeting'

export interface Employee {
    id: string
    name: string
    role: string
    team: string
    location: string
    avatar: string
    status: StatusStr
    burnRate: number // 0-100 (High is bad)
    battery: number // 0-100 (High is good)
    deepWorkHours: number
    meetingHours: number
}

export const TEAMS = ['Engineering', 'Product', 'Sales', 'Marketing', 'Executive']
export const LOCATIONS = ['New York', 'London', 'Remote', 'Berlin']

export const NAMES = [
    'Sarah Chen', 'Michael Ross', 'Emma Wilson', 'James Rodriguez', 'Lisa Wang',
    'David Miller', 'Jennifer Wu', 'Robert Chang', 'Maria Garcia', 'Thomas Anderson',
    'Jessica Lee', 'Kevin Park', 'Rachel Kim', 'Daniel Wright', 'Sophia Patel',
    'Chris Taylor', 'Amanda Johnson', 'Steve Jobs', 'Satya Nadella', 'Sam Altman',
    'Elon Musk', 'Jeff Bezos', 'Tim Cook', 'Mark Zuckerberg', 'Bill Gates'
]

export function generateMockEmployees(count: number = 20): Employee[] {
    return Array.from({ length: count }).map((_, i) => {
        const isBurnedOut = Math.random() > 0.8
        const statusRandom = Math.random()
        let status: StatusStr = 'offline'
        if (statusRandom > 0.7) status = 'focused'
        else if (statusRandom > 0.4) status = 'meeting'
        else if (statusRandom > 0.1) status = 'online'

        return {
            id: `emp-${i}`,
            name: NAMES[i % NAMES.length],
            role: i % 3 === 0 ? 'Senior Engineer' : i % 3 === 1 ? 'Product Manager' : 'Designer',
            team: TEAMS[Math.floor(Math.random() * TEAMS.length)],
            location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
            avatar: `https://i.pravatar.cc/150?u=${i + 10}`, // offset to get consistent but better images
            status,
            // Burn rate: High random if burned out, else moderate
            burnRate: isBurnedOut ? 85 + Math.random() * 15 : Math.random() * 60,
            // Battery: Low if burned out
            battery: isBurnedOut ? Math.random() * 30 : 50 + Math.random() * 50,
            deepWorkHours: Math.floor(Math.random() * 20),
            meetingHours: Math.floor(Math.random() * 25),
        }
    })
}
