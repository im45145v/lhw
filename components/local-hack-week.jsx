'use client'

import React from 'react'
import { MapPin , Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function LocalHackWeekJsx() {
  const days = [
    { 
      day: 'Sep 30ᵗʰ', 
      events: [
        { title: 'Opening Ceremony', time: '09:30 AM', date: '30-09-2024', location: 'CET-3 LAB' },
        { title: 'Streamlit', time: '10:30 AM', date: '30-09-2024', location: 'CET-3 LAB' },
        { title: 'Git and Github', time: '1:15 PM', date: '30-09-2024', location: 'CET-1 LAB' }
        
      ] 
    },
    { 
      day: 'Oct 01ˢᵗ', 
      events: [
        { title: "Bash Scripting: Beginner's Guide", time: '09:30 AM', date: '01-10-2024', location: 'CET-3 LAB' },
        { title: 'A Glimpse into ML ', time: '01:00 PM', date: '01-10-2024', location: 'CET-3 LAB' }
        
      ] 
    },
    // { 
    //   day: 'Oct 2nd', 
    //   events: [
    //     { title: 'Intro to Cloud', time: '2:00 PM', date: '02-10-2024', location: 'Online' }
    //   ] 
    // },
    // need to add networking session details
    
    { 
      day: 'Oct 04ᵗʰ', 
      events: [
        { title: 'Why Hackathons?', time: '09:30 AM', date: '04-10-2024', location: 'SH-2' },
        { title: 'Intro to Cloud', time: '1:00 PM', date: '04-10-2024', location: 'SH-2' }
        // { title: 'Open Source', time: '1:00 PM', date: '04-10-2024', location: 'SH-2' }
      ] 
    },
    { 
      day: 'Oct 05ᵗʰ', 
      events: [
        { title: 'Special Talk: How to Build better hacks at hackathons', time: '12:00 PM', date: '05-10-2024', location: 'Online' },
        { title: 'Computer Networking', time: '4:00 PM', date: '05-10-2024', location: 'Online' }
      ] 
    },
    { 
      day: 'Oct 08ᵗʰ', 
      events: [
        { title: 'Intro to APIs', time: '9:30:00 AM', date: '03-10-2024', location: 'CET-3 LAB' },
        { title: 'DSA+Resume Building', time: '1:00 PM', date: '03-10-2024', location: 'SH-2' }
      ] 
    },
    { 
      day: 'Oct 09ᵗʰ', 
      events: [
        { title: 'WebDev', time: '10:00 AM', date: '09-10-2024', location: 'Online' },
        { title: 'AI Toolz', time: '1:00 PM', date: '09-10-2024', location: 'Online' }
      ] 
    },
    { 
      day: 'Oct 10ᵗʰ', 
      events: [
        { title: 'ChatBot', time: '10:00 AM', date: '10-10-2024', location: 'Online' },
        { title: 'HardWare Session', time: '01:00 PM', date: '10-10-2024', location: 'Online' }
      ] 
    },
    { 
      day: 'Oct 11ᵗʰ', 
      events: [
        { title: 'How to use Docs/read codebase', time: '11:30 AM', date: '11-10-2024', location: 'Online' },
        { title: 'Closing Ceremony', time: '4:30 PM', date: '11-10-2024', location: 'Online' }
      ] 
    },
    
    // Add more days and events as needed
  ];
  
  const [activeDay, setActiveDay] = React.useState(days[0].day); // Default to the first day
  const [activeEvents, setActiveEvents] = React.useState(days[0].events); // Default events

  const handleDayClick = (day) => {
    setActiveDay(day.day);
    setActiveEvents(day.events);
  };

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
        <header className="flex justify-between items-center p-12 sm:p-5 md:p-8 mx-1">
          <div className="h-10 md:h-auto md:max-h-12"> 
            <a href="/">
              <img 
                src="https://i.ibb.co/gyKNL2p/Screenshot-2024-09-25-223237-removebg-preview.png" 
                alt="LHW Logo" 
                className="h-8 sm:h-10 md:max-h-12 w-auto" 
              />
            </a>
          </div>
          <nav className="flex items-center space-x-2"> {/* Removed mr-8 to reduce right gap */}
            <a href="#schedule" className="text-white hover:text-yellow-400 text-xs md:text-sm">Schedule</a>
            <div className="flex justify-center items-center">
              <Button 
                onClick={() => window.open('https://lnxok5i37d8.typeform.com/to/e6A1y0Fu', '_blank')} 
                className="bg-[#C9D9EB] text-black hover:bg-transparent hover:text-[#BDC8D4] border-2 border-transparent transition-all duration-300 h-8 px-3 sm:h-9 sm:px-4" 
              >
                Register
              </Button>
            </div>
            <Button 
              onClick={() => window.open('https://chat.whatsapp.com/IEsumqsXO0PB15tE4WRSTz', '_blank')}
              className="border-2 border-[#C9D9EB] text-[#C9D9EB] bg-transparent transition-all duration-300 h-8 px-3 sm:h-9 sm:px-4 hover:bg-[#C9D9EB] hover:text-black"
            >
              WhatsApp
            </Button>
          </nav>
        </header>

        <main className="container mx-auto px-4 py-8">
          <img 
              src="https://i.ibb.co/Bj3BSGf/Group-156-removebg-preview.png" 
              alt="Local Hack Week" 
              className="w-full max-w-5xl mx-auto mb-0 -mt-20" 
            />

          <section id="intro" className="mb-16 flex flex-col md:flex-row items-center justify-between -mt-10">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-09-26_211158-removebg-preview-vpCfjXc3CqtWyHty4Ouy2NlErOR2S6.png" 
                alt="Local Hack Week Mascot" 
                className="w-64.5 h-64.5 mx-auto"
              />
            </div>
            <div className="max-w-md mx-auto"> 
              <h2 className="text-3xl font-bold mb-4 font-manrope text-[#FED140]">About Local Hack Week</h2>
              <p className="text-lg mb-4 text-justify text-[#C9D9EB]"> 
              Inspired by <span className='text-[#FCEE90]'>MLH</span> Global Hack Week, Local Hack Week is a week-long event that brings together developers, designers, and innovators.
              </p>
              <p className="text-lg mb-4 text-justify text-[#C9D9EB]">
              It&apos;s an opportunity to learn new skills, build amazing projects, and connect with like-minded individuals passionate about technology. Completely free and open to anyone, anywhere join us for an exciting week of coding, creativity, and collaboration!
              </p>
              <div className="flex items-center justify-start">
                <p className="mr-4 text-lg font-medium">Watch our streams at:</p>
                <Button 
                  onClick={() => window.open('https://www.youtube.com/@hackerabad', '_blank')} 
                  className="bg-[#FF1D1D] text-[#FFFFFF] hover:bg-transparent hover:text-[#BDC8D4] border-2 border-transparent transition-all duration-300 h-8 px-3 sm:h-9 sm:px-4" 
                >
                  Hackerabad&apos;s YT
                </Button>
              </div>
            </div>
          </section>

          <section id="schedule" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center font-manrope text-[#FED140] max-w-md mx-auto">Schedule</h2> 
            <p className="text-lg mb-4 text-center text-[#C9D9EB] max-w-xl mx-auto">
              Everyday we have a variety of live sessions for you to tune into and learn more about. Click below to see each day&apos;s schedule.
            </p>
            <p className="text-lg mb-4 text-center text-[#FFADAD] max-w-xl mx-auto font-bold">
        Schedules & timings may change and will be updated on the website.
    </p>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {days.map((day) => (
                <div
                  key={day.day}
                  onClick={() => handleDayClick(day)}
                  className={`cursor-pointer p-2 rounded-lg select-none ${
                    activeDay === day.day ? "bg-[#FED140] text-black" : "bg-[#C9D9EB] text-black"
                  }`} // Use div for static colors
                >
                  {day.day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 max-w-md mx-auto">
              {activeEvents.map((event, index) => (
                <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-bold text-[#FED140]">{event.title}</h3>
                  <div className="flex items-center text-sm text-[#C9D9EB] mb-2"> 
                    <span className="flex items-center mr-4"> {/* Date */}
                      <span>{event.date}</span>
                    </span>
                    <span className="flex items-center mr-4"> {/* Time icon */}
                      <Clock className="mr-1" />
                      {event.time}
                    </span>
                    <span className="flex items-center"> {/* Location icon */}
                      <MapPin className="mr-1" />
                      {event.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-center font-manrope text-[#FED140]">FAQ</h2>
            <Accordion type="single" collapsible className="max-w-md mx-auto">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-[#C9D9EB]">What is Local Hack Week?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                Local Hack Week is a week-long event that brings together developers, designers, and innovators.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-[#C9D9EB]">Who can participate?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  Anyone can participate! Whether you&apos;re a beginner or an experienced developer, there&apos;s something for everyone at Local Hack Week.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-[#C9D9EB]">Is it free to join?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  Yes, Local Hack Week is completely free to join. All you need is a computer and an internet connection.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-[#C9D9EB]">Where can I watch the online streams?</AccordionTrigger>
                <AccordionContent className="text-[#FED140]">
                  You can watch the online streams at - &nbsp;
                  <Button onClick={() => window.open('https://www.youtube.com/@hackerabad', '_blank')} className="bg-[#FF4747] text-[#FFFFFF] hover:bg-transparent hover:text-[#BDC8D4] border-2 border-transparent transition-all duration-300 h-8 px-3 sm:h-9 sm:px-4">
                    Hackerabad&apos;s YT
                  </Button>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </main>

        <footer className="text-center p-4">
          <p>&copy; 2024 Local Hack Week.</p>
        </footer>
      </div>
    </div>
  )
}