'use client'

import React from 'react'
import { Zap, CalendarDays, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function LocalHackWeekJsx() {
  const days = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7', 'Day 8']
  const [activeDay, setActiveDay] = React.useState('Day 7')

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L100 50 M50 0 L50 100 M0 0 L100 100 M100 0 L0 100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)">
            <animate attributeName="x" from="0" to="100" dur="20s" repeatCount="indefinite" />
            <animate attributeName="y" from="0" to="100" dur="30s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <header className="flex justify-between items-center p-5">
          <div className="h-12 ml-8">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-09-25_223237-removebg-preview-opvnvTMi6pzoFTGzti9YVUbZMk5CzC.png" 
              alt="LHW Logo" 
              className="h-full"
            />
          </div>
          <nav className="flex items-center space-x-8 mr-8">
            <a href="#schedule" className="text-white hover:text-yellow-400">Schedule</a>
            <a href="#faq" className="text-white hover:text-yellow-400">FAQ</a>
            <Button 
              className="bg-[#C9D9EB] text-black hover:bg-transparent hover:text-[#BDC8D4] hover:border-[#C9D9EB] border-2 border-transparent transition-all duration-300"
            >
              Register
            </Button>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <img 
              src="https://i.ibb.co/Bj3BSGf/Group-156-removebg-preview.png" 
              alt="LHW Logo" 
              className="w-full max-w-5xl mx-auto mb-0" // Removed bottom margin
            />

          <section id="intro" className="mb-16 flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-09-26_211158-removebg-preview-vpCfjXc3CqtWyHty4Ouy2NlErOR2S6.png" 
                alt="Local Hack Week Mascot" 
                className="w-64.5 h-64.5 mx-auto"
              />
            </div>
            <div className="max-w-md mx-auto"> {/* Set a max width for alignment */}
              <h2 className="text-3xl font-bold mb-4 font-manrope text-[#FED140]">About Local Hack Week</h2>
              <p className="text-lg mb-4 text-justify text-[#C9D9EB]"> {/* Justified text */}
                Local Hack Week is a week-long hackathon that brings together developers, designers, and innovators from all over the world. It's an opportunity to learn new skills, build amazing projects, and connect with like-minded individuals passionate about technology.
              </p>
              <p className="text-lg text-justify text-[#C9D9EB]"> {/* Justified text */}
                Whether you're a beginner or an experienced hacker, Local Hack Week has something for everyone. Join us for an exciting week of coding, creativity, and collaboration!
              </p>
            </div>
          </section>

          <section id="schedule" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center font-manrope text-[#FED140] max-w-md mx-auto">Schedule</h2> {/* Set max width */}
            <p className="text-lg mb-4 text-center text-[#C9D9EB] max-w-xl mx-auto">
              Everyday we have a variety of live sessions for you to tune into and learn more about. Click below to see each day's schedule.
            </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {days.map((day) => (
                <Button
                  key={day}
                  variant={activeDay === day ? "default" : "secondary"}
                  onClick={() => setActiveDay(day)}
                  className={`${activeDay === day ? "bg-yellow-400 text-black" : "bg-gray-700"} transition-all duration-300 ease-in-out hover:scale-105`}
                >
                  {day}
                </Button>
              ))}
            </div>

            <div className="bg-gray-800 bg-opacity-80 rounded-lg p-6 backdrop-blur-sm max-w-md mx-auto">
              <div className="flex items-center mb-4">
                <CalendarDays className="mr-2" />
                <span>Sep 11, 2024</span>
                <span className="ml-4">9:30pm IST</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" />
                <span>Virtual Event</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Today in Global Hack Week {activeDay}</h3>
              <p className="mb-4">
                Tune in to hear everything going on today at GHW! At this stream, you'll hear about which workshops are coming up and have a chance to get any questions you have answered!
              </p>
            </div>
          </section>

          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center font-manrope text-[#FED140]">FAQ</h2>
            <Accordion type="single" collapsible className="max-w-md mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#C9D9EB]">What is Local Hack Week?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  Local Hack Week is a week-long hackathon event where participants from around the world come together to learn, build, and share their projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#C9D9EB]">Who can participate?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  Anyone can participate! Whether you're a beginner or an experienced developer, there's something for everyone at Local Hack Week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#C9D9EB]">Is it free to join?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  Yes, Local Hack Week is completely free to join. All you need is a computer and an internet connection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </main>

        <footer className="text-center p-4">
          <p>&copy; 2024 Local Hack Week. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}