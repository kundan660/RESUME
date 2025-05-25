import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, HeartPulse, Bone, UserCircle2, Search, CalendarClock, Brain, Eye } from 'lucide-react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { GiTooth } from 'react-icons/gi';

const activityData = [
  { name: 'Mon', value: 5 },
  { name: 'Tue', value: 9 },
  { name: 'Wed', value: 6 },
  { name: 'Thu', value: 7 },
  { name: 'Fri', value: 10 },
  { name: 'Sat', value: 4 },
  { name: 'Sun', value: 3 },
];

const menuItems = ['Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics'];
const toolItems = ['Chat', 'Support', 'Setting'];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-gray-100">
      <aside className="col-span-2 bg-white shadow-lg p-4 space-y-6">
        <h2 className="text-2xl font-bold text-blue-600">Healthcare.</h2>
        <nav className="space-y-3">
          {menuItems.map((item, index) => (
            <div key={index} className="text-gray-700 hover:text-blue-500 cursor-pointer">{item}</div>
          ))}
          <div className="border-t pt-3 space-y-3">
            {toolItems.map((item, index) => (
              <div key={index} className="text-gray-600 hover:text-blue-400 cursor-pointer">{item}</div>
            ))}
          </div>
        </nav>
      </aside>

      <main className="col-span-10 p-6 space-y-6">
        <header className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-600 w-6 h-6" />
            <UserCircle2 className="w-8 h-8 text-blue-500" />
          </div>
        </header>

        <section className="grid grid-cols-12 gap-6">
          <div className="col-span-4">
            <Card className="h-full">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <img src="https://www.pngall.com/wp-content/uploads/6/Human-Body-PNG-Photo.png" alt="Body" className="h-60 object-contain" />
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="text-sm border border-green-600 text-green-600">Healthy Heart</Button>
                  <Button variant="outline" className="text-sm border border-cyan-600 text-cyan-600">Healthy Leg</Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="col-span-8 space-y-4">
            <div className="grid grid-cols-3 gap-4">
              {[{ icon: HeartPulse, label: 'Lungs', date: '26 Oct 2021', color: 'text-red-500' },
                { icon: GiTooth, label: 'Teeth', date: '26 Oct 2021', color: 'text-blue-400' },
                { icon: Bone, label: 'Bone', date: '26 Oct 2021', color: 'text-orange-400' }
              ].map((item, idx) => (
                <Card key={idx}>
                  <CardContent className="flex items-center gap-4 p-4">
                    <item.icon className={${item.color} w-6 h-6} />
                    <div>
                      <p className="text-sm font-semibold">{item.label}</p>
                      <p className="text-xs text-gray-500">{item.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-blue-600 text-white">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">Dentist</h4>
                  <p>09:00–11:00</p>
                  <p className="text-sm">Dr. Cameron Williamson</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-100">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-lg">Physiotherapy</h4>
                  <p>11:00–12:00</p>
                  <p className="text-sm">Dr. Kevin Djones</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-lg font-semibold">The Upcoming Schedule</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {["Health checkup - 11:00 AM", "Ophthalmologist - 14:00 PM", "Cardiologist - 00:00 AM", "Neurologist - 16:00 PM"].map((event, index) => (
                  <Card key={index}><CardContent className="p-3">{event}</CardContent></Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Activity</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={activityData}>
                  <XAxis dataKey="name" stroke="#8884d8" />
                  <Tooltip />
                  <Bar dataKey="value" fill="#4F46E5" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}