import React, { useState,useRef , useEffect } from 'react';
import { Award, BookOpen, Globe, ShieldCheck, ChevronLeft, ChevronRight, GraduationCap,Calendar,
   ArrowRight, Newspaper, Phone, Users, Mail, MapPin, Building, LogIn, Sparkles,Play, Compass, Bookmark} from "lucide-react";
import './App.css';

const HERO_SLIDES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=1920&q=80', // Replace with your local ng 3 images
    title: 'Inspiring Medical Leaders for a Better Tomorrow',
    subtitle: 'Experience modern education with hands-on clinical training and mentorship.',
    primaryBtn: 'Get Started'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80',
    title: 'Study with Purpose. Serve with Passion',
    subtitle: 'Empowering tomorrow’s doctors, nurses, and healthcare leaders through world-class education.',
    primaryBtn: 'Apply Now'
  },
  {
    id: 3,
    image: 'https://elrazi.edu.ng/uploads/students/campus_690679d4529183.78077526.jpeg',
    title: 'Because Every Great Doctor Starts with a Great University',
    subtitle: 'Develop the skills to make a difference in lives and communities worldwide.',
    primaryBtn: 'Apply Now'
  }
];
function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const [current, setCurrent] = useState(0);

  // Smart Auto-play Carousel (Switches every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === HERO_SLIDES.length - 1 ? 0 : prev + 1));
    }, 9000);
    return () => clearInterval(timer);
  }, []);
const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const width = 340; // Balanced card step increment width
    scrollRef.current.scrollBy({
      left: direction === "right" ? width : -width,
      behavior: "smooth",
    });
  };

  const programmes = [
    {
      code: "B.Sc. HAHM",
      title: "Healthcare Administration & Hospital Management",
      desc: "Develop leadership and management expertise to run hospitals and healthcare systems efficiently.",
    },
    {
      code: "B.Sc. PH",
      title: "Public Health",
      desc: "Shape healthier communities through public health education, research, and intervention.",
    },
    {
      code: "B.Sc. HIM",
      title: "Health Information Management",
      desc: "Build skills in managing health records, data analysis, and medical information systems.",
    },
    {
      code: "B.Sc. HND",
      title: "Human Nutrition & Dietetics",
      desc: "Learn the science of nutrition and dietetics to promote wellness and manage diseases.",
    },
    {
      code: "B.Sc. EHS",
      title: "Environmental Health Science",
      desc: "Focus on environmental protection, sanitation, and sustainable public health solutions.",
    },
    {
      code: "B.Sc. Rad/Rad Sc",
      title: "Radiography & Radiation Science",
      desc: "Specialize in diagnostic imaging, radiology, and radiation safety with advanced technology.",
    },
    {
      code: "DPT",
      title: "Doctor of Physiotherapy",
      desc: "Help patients recover mobility and improve quality of life through physical therapy.",
    },
    {
      code: "B.NSc",
      title: "Bachelor of Nursing Science",
      desc: "Prepare for a rewarding nursing career through clinical practice and compassionate care.",
    },
    {
      code: "BMLS",
      title: "Medical Laboratory Science",
      desc: "Learn advanced diagnostics, laboratory technology, and biomedical research methods.",
    },
    {
      code: "B.DS",
      title: "Bachelor of Dental Surgery",
      desc: "Develop expertise in dental care, surgery, and oral health with modern clinical training.",
    },
    {
      code: "Pharm. D.",
      title: "Doctor of Pharmacy",
      desc: "Gain advanced knowledge in pharmaceutical sciences, patient care, and healthcare innovation.",
    },
    {
      code: "MBBS",
      title: "Medicine & Surgery",
      desc: "Train to become a qualified medical doctor with world-class facilities and clinical experience.",
    },
  ];
  const news = [
    {
      title: "Career Opportunities at Elrazi Medical University",
      date: "Apr 24, 2026",
      day: "24",
      month: "APR",
      desc: "Elrazi Medical University, Kano invites qualified and motivated applicants to apply for Academic and Non-Teaching positions.",
      image: "https://elrazi.edu.ng/uploads/news/690559cd17ff3.jpg",
    },
    {
      title: "Health Awareness Seminar organized by EHA Clinics",
      date: "Apr 22, 2026",
      day: "22",
      month: "APR",
      desc: "A Health Awareness Seminar was organized to educate students on preventive healthcare and community wellbeing.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Elrazi Opens Doors to Prospective Students",
      date: "Apr 21, 2026",
      day: "21",
      month: "APR",
      desc: "Healthcare remains one of the most impactful professions. Students are encouraged to join Elrazi Medical University.",
      image: "https://elrazi.edu.ng/uploads/news/1776765401_NUC3.jpeg",
    },
    {
      title: "NUC Team Visits Elrazi Medical University",
      date: "Apr 21, 2026",
      day: "21",
      month: "APR",
      desc: "We welcomed the National Universities Commission (NUC) for a full accreditation and inspection visit.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Ramadan Charity Drive Initiative",
      date: "Jan 19, 2026",
      day: "19",
      month: "JAN",
      desc: "Elrazi launches a charity drive to support patients and families in local hospitals during Ramadan.",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "University Multipurpose Hall Event",
      date: "Oct 31, 2025",
      day: "31",
      month: "OCT",
      desc: "Students gather for a global health awareness event held at the university multipurpose hall.",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "New Faculty of Basic Medical Sciences Complex",
      date: "Sep 15, 2025",
      day: "15",
      month: "SEP",
      desc: "Commissioning of the state-of-the-art laboratory complex to enhance practical medical research.",
      image: "https://elrazi.edu.ng/uploads/news/news_1776765302_7355.jpeg",
    },
    {
      title: "Orientation Ceremony for Fresh Students",
      date: "Sep 02, 2025",
      day: "02",
      month: "SEP",
      desc: "Elrazi Medical University officially welcomes the new intake of clinical and biomedical students.",
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-[#bb2924] selection:text-white">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-[#1d0d66] to-[#2914a8] text-white shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3.5">

          {/* Logo and Branding */}
          <a href="#" className="flex items-center focus:outline-none focus:ring-2 focus:ring-white/40 rounded-lg transition">
            <img
              src="https://elrazi.edu.ng/uploads/logo_header_white_1762123520.png"
              alt="Elrazi Medical University"
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
<nav className="topnav hidden lg:flex items-center lg:space-x-2 font-medium text-[15px] lg:text-base">
            <ul className="flex items-center space-x-1 lg:space-x-3">
              <li>
                <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200">
                  Home
                </a>
              </li>

              {/* Admission Dropdown */}
              <li className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200 focus:outline-none">
                  Admission
                  <svg className="w-3 h-3 ml-0.5 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white text-gray-800 rounded-xl shadow-xl mt-1 w-60 py-2 left-0 top-full z-50 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-slate-100">
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Apply for Admission</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">How to Apply</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Tuition & Fees</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Scholarship</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Contact Us</a>
                </div>
              </li>

              <li>
                <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200">
                  Programmes
                </a>
              </li>

              <li>
                <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200">
                  Campus Life
                </a>
              </li>

              {/* About Elrazi Dropdown */}
              <li className="relative group py-2">
                <button className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200 focus:outline-none">
                  About Elrazi
                  <svg className="w-3 h-3 ml-0.5 transform group-hover:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto bg-white text-gray-800 rounded-xl shadow-xl mt-1 w-64 py-4 left-0 top-full z-50 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 border border-slate-100 max-h-[80vh] overflow-y-auto">
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">The Vice Chancellor</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">The Senate</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Mission and Vision</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Hostel & Accommodation</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">About Us</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Students Attendance</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Talent LMS</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Elrazi Qur'anic School</a>
                  <a href="#" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition">Elrazi Charity</a>
                  <a href="https://elrazi.edu.sd" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-sm hover:bg-red-50 hover:text-[#bb2924] font-medium transition border-t border-slate-100 text-blue-800">Elrazi Sudan ↗</a>
                </div>
              </li>

              <li>
                <a href="#" className="px-3 py-2 rounded-lg hover:bg-white/10 hover:text-[#ffdddc] transition-all duration-200">
                  News & Events
                </a>
              </li>
            </ul>
          </nav>

          {/* Action Controls & Mobile Trigger */}
          <div className="flex items-center space-x-3">
            {/* User Profile / Login Icon */}
            <a href="#" className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200" aria-label="User Login">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.118a7.5 7.5 0 0115 0A17.933 17.933 0 0112 21.75c-2.65 0-5.175-.568-7.5-1.632z" />
              </svg>
            </a>

            {/* Hamburger Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white transition"
              aria-label="Open Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Backdrop overlay for mobile sidebar */}
        <div
          className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Sliding Mobile Sidebar */}
        <div className={`fixed top-0 left-0 w-80 max-w-[85vw] h-full bg-[#1d0d66] shadow-2xl transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 md:hidden overflow-y-auto flex flex-col`}>
          <div className="p-5 flex justify-between items-center border-b border-white/10">
            <span className="text-xl font-bold tracking-wide text-white">Navigation</span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-white/10 focus:outline-none"
              aria-label="Close Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 p-5 space-y-1 font-medium overflow-y-auto">
            <a href="#" className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Home</a>

            {/* Mobile Admission Accordion */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="px-3 py-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition flex justify-between items-center outline-none">
                <span>Admission</span>
                <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="pl-6 pr-3 mt-1 py-1 space-y-1 bg-black/10 rounded-lg text-sm text-slate-200">
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Apply for Admission</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>How to Apply</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Tuition & Fees</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Scholarship</a>
              </div>
            </details>

            <a href="#" className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Programmes</a>
            <a href="#" className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Campus Life</a>

            {/* Mobile About Accordion */}
            <details className="group [&_summary::-webkit-details-marker]:hidden">
              <summary className="px-3 py-2.5 rounded-lg hover:bg-white/10 cursor-pointer transition flex justify-between items-center outline-none">
                <span>About Elrazi</span>
                <svg className="w-4 h-4 transform group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="pl-6 pr-3 mt-1 py-1 space-y-1 bg-black/10 rounded-lg text-sm text-slate-200">
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>The Vice Chancellor</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>The Senate</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Mission and Vision</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Hostel & Accommodation</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Elrazi Community School</a>
                <a href="#" className="block py-2 hover:text-white transition" onClick={() => setIsMobileMenuOpen(false)}>Elrazi Charity Foundation</a>
              </div>
            </details>

            <a href="#" className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>News & Events</a>
            <a href="#" className="block px-3 py-2.5 rounded-lg hover:bg-white/10 transition" onClick={() => setIsMobileMenuOpen(false)}>Attendance Login</a>
          </nav>

          {/* Call to Actions inside Sidebar */}
          <div className="p-5 border-t border-white/10 flex flex-col space-y-2.5 bg-[#170a54]">
            <a href="#" className="bg-[#bb2924] text-white text-center shadow-sm py-2.5 rounded-xl font-semibold shadow-md hover:bg-[#a11f1b] transition active:scale-[0.98]">
              Apply Now
            </a>
            <a href="#" className="bg-white/10 text-white border shadow-sm border-white/20 text-center py-2.5 rounded-xl font-semibold hover:bg-white/20 transition active:scale-[0.98]">
              Login
            </a>
            <a href="#" className="bg-gradient-to-r from-amber-500 shadow-sm to-orange-600 text-white text-center py-2.5 rounded-xl font-semibold shadow-md hover:brightness-110 transition active:scale-[0.98]">
              Talent LMS
            </a>
          </div>
        </div>
      </header>
{/* hero section with ng 3 image and text and two btn apply and login smart slider or carusel */}
<div className="relative w-full h-[100vh] md:h-[calc(100vh-60px)] overflow-hidden bg-slate-950 font-poppins">
      
      {/* Premium Cinematic Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#bb2924]/15 blur-[150px] rounded-full pointer-events-none -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#1d0d66]/30 blur-[150px] rounded-full pointer-events-none translate-y-1/4" />

      {/* Dynamic Image Slides Layer */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === current 
              ? "opacity-100 scale-100 z-10" 
              : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Active Banner Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Premium High-Contrast Obsidian Mask Layer */}
          {/* This elegant dark overlay ensures your crisp white text screams premium quality */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/30" />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      ))}

      {/* Core Typography & Action Content Layer */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 max-w-7xl mx-auto sm:px-12 lg:px-16">
        <div className="max-w-3xl transform transition-all duration-700">

          {/* Clean Glassmorphic Institutional Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-[11px] font-normal text-white tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#ffb3b0] animate-pulse" />
            <span>Elrazi Medical University Kano</span>
          </div>

          {/* BIG SMART WHITE TEXT (Massive & Heavy Impact Typography) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] mb-6 select-none drop-shadow-md">
            {HERO_SLIDES[current].title.split(" ").map((word, i, arr) => {
              // Highlights the last words with the official beautiful university light-red accent tint
              if (i >= arr.length - 2) {
                return <span key={i} className="text-[#ffb3b0]"> {word}</span>;
              }
              return <span key={i}> {word}</span>;
            })}
          </h1>

          {/* Refined High-Visibility Subtitle */}
          <p className="text-sm sm:text-base text-slate-200 font-light mb-8 max-w-lg leading-relaxed opacity-90">
            {HERO_SLIDES[current].subtitle}
          </p>

          {/* SMART COMPACT BUTTONS (Small, sleek, highly clickable action cluster) */}
          <div className="flex flex-wrap items-center gap-3">
            
            {/* Small & Smart Primary Call to Action */}
            <button className="px-5 py-2.5 bg-[#bb2924] text-white text-xs font-bold rounded-lg shadow-lg shadow-red-900/20 hover:bg-[#a11f1b] active:scale-95 transition-all duration-200 inline-flex items-center gap-1.5 group">
              <span>{HERO_SLIDES[current].primaryBtn || "Apply Now"}</span>
              <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Small & Smart Transparent Institutional Login */}
            <button className="px-5 py-2.5 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-lg hover:bg-white/20 active:scale-95 transition-all duration-200 inline-flex items-center gap-1.5 shadow-sm">
              <LogIn className="w-3.5 h-3.5 text-slate-300" />
              <span>Portal Login</span>
            </button>

          </div>

        </div>
      </div>

      {/* Crystal Navigation Progress Dots Overlay */}
      <div className="absolute bottom-10 left-6 sm:left-12 lg:left-16 z-30 flex items-center gap-2 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? "w-6 h-2 bg-white"
                : "w-2 h-2 bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </div>
{/* 4 Feature Boxes in Row - Left Aligned Icons */}
{/* Modern White Feature Grid Section */}
<section className="relative bg-slate-50 py-24 font-poppins">
  
  {/* Subtle decorative mesh background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
    <div className="absolute -top-32 left-1/4 w-96 h-96 bg-blue-100/40 blur-[120px] rounded-full" />
    <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-50/50 blur-[120px] rounded-full" />
  </div>

  <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

    {/* Services Grid with top gap margin to accommodate floating center icons */}
    <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-6">

      {/* Card 1 */}
      <div className="cursor-pointer relative group rounded-2xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
        {/* Absolute Centered Floating Icon Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#1d0d66] to-[#1d0d66] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
          <Award className="w-6 h-6" />
        </div>
        <div className="pt-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950 mb-3 transition-colors duration-300 group-hover:text-[#1d0d66]">
              Top Rank University
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Ranked among the top universities in Sudan, EMUK excels in academics and research.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="cursor-pointer relative group rounded-2xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
        {/* Absolute Centered Floating Icon Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#1d0d66] to-[#1d0d66] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="pt-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950 mb-3 transition-colors duration-300 group-hover:text-[#1d0d66]">
              Standard Syllabus
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Our syllabus meets NUC standards, ensuring quality and international competitiveness.
            </p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="cursor-pointer relative group rounded-2xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
        {/* Absolute Centered Floating Icon Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#1d0d66] to-[#1d0d66] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
          <Globe className="w-6 h-6" />
        </div>
        <div className="pt-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950 mb-3 transition-colors duration-300 group-hover:text-[#1d0d66]">
              Global Certificate
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Receive internationally recognized certificates for your academic achievements.
            </p>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="cursor-pointer relative group rounded-2xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
        {/* Absolute Centered Floating Icon Badge */}
        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gradient-to-br from-[#1d0d66] to-[#1d0d66] w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-red-900/20 group-hover:scale-110 group-hover:rotate-3 transition duration-300">
          <ShieldCheck className="w-6 h-6" />
        </div>
        <div className="pt-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-950 mb-3 transition-colors duration-300 group-hover:text-[#1d0d66]">
              Safe Learning
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed font-light">
              Modern facilities and resources for a secure learning environment.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<section className="relative bg-slate-50 py-20 overflow-hidden">

      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-sky-200/30 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text side */}
        <div>
          <span className="inline-block bg-sky-100 text-sky-700 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Vice-Chancellor
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            Vice-Chancellor’s Welcome Message
          </h2>

          <p className="text-slate-600 leading-relaxed mb-4">
            It is with great pride and deep gratitude that I welcome you to Elrazi Medical University — a community built on excellence, innovation, and service.
          </p>

          <p className="text-slate-600 leading-relaxed mb-4">
            At Elrazi, we are not merely educating medical practitioners; we are nurturing compassionate healers, ethical leaders, and global citizens.
          </p>

          <div className="border-l-4 border-sky-500 pl-4 italic text-slate-700 mb-5">
            “The art of medicine extends beyond science — it is a lifelong commitment to the wellbeing of humanity.”
          </div>

          <p className="text-slate-600 leading-relaxed mb-6">
            Our mission is to prepare students to meet the challenges of a dynamic healthcare environment through evidence-based education, clinical exposure, and research.
          </p>

          {/* signature */}
          <div className="border-t border-slate-200 pt-4">
            <p className="font-semibold text-slate-900">
              Prof. Ahmed Osman Hassan Rizig
            </p>
            <p className="text-sm text-slate-500">
              Vice-Chancellor, Elrazi Medical University
            </p>
          </div>
        </div>

        {/* Image side */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-white/50">
            <img
              src="https://elrazi.edu.ng/uploads/Ahmed_rezig.jpg"
              alt="Vice Chancellor"
              className="w-full h-[480px] object-cover"
            />
          </div>

          {/* small badge */}
          <div className="absolute -bottom-5 -left-5 bg-white shadow-lg rounded-xl px-5 py-3 border border-slate-100">
            <p className="text-xs text-slate-500">Leadership Message</p>
            <p className="text-sky-600 font-semibold text-sm">
              Excellence • Ethics • Innovation
            </p>
          </div>
        </div>

      </div>
    </section>

 <section className="relative py-24 bg-white overflow-hidden font-poppins">
      
      {/* Decorative clean ambient glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/30 blur-[130px] rounded-full -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-red-100/20 blur-[130px] rounded-full -translate-y-1/2 pointer-events-none" />

      {/* Header Container Area */}
      <div className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-slate-200/60 text-xs font-semibold text-slate-800 uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-[#1d0d66]" />
            Academic Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
            Our Programmes
          </h2>
          <p className="text-slate-600 mt-2 font-light text-sm sm:text-base">
            Explore world-class medical and health science undergraduate degrees.
          </p>
        </div>

        {/* Premium Control Navigation Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition-all duration-200"
            aria-label="Scroll Carousel Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-slate-200/80 bg-white text-slate-700 shadow-sm hover:bg-slate-50 active:scale-95 transition-all duration-200"
            aria-label="Scroll Carousel Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Horizontal Carousel Viewport Slider Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2))] pb-8 scroll-smooth select-none snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden relative z-10"
      >
        {programmes.map((p, i) => (
          <div
            key={i}
            className="group min-w-[310px] max-w-[310px] bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between relative overflow-hidden snap-start"
          >
            {/* Top Border Hover Color Accent Strip */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1d0d66] to-[#bb2924] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div>
              {/* Specialized Tag Code */}
              <span className="inline-block text-xs font-bold text-[#1d0d66] bg-slate-100 px-3 py-1 rounded-lg tracking-wide group-hover:bg-blue-50 group-hover:text-[#2914a8] transition-colors duration-300">
                {p.code}
              </span>

              {/* Course Header Title */}
              <h3 className="text-lg font-bold text-slate-950 mt-4 mb-2.5 leading-snug group-hover:text-[#bb2924] transition-colors duration-300">
                {p.title}
              </h3>

              {/* Paragraph Info */}
              <p className="text-sm text-slate-600 leading-relaxed font-light line-clamp-4">
                {p.desc}
              </p>
            </div>

            {/* Dynamic Buttons Layout Frame */}
            <div className="flex items-center gap-3 mt-6 border-t border-slate-50 pt-4">
              <button className="flex-1 text-xs font-bold py-2.5 rounded-xl bg-slate-100 text-slate-800 hover:bg-slate-200 transition duration-200">
                Overview
              </button>
              <button className="flex-1 text-xs font-bold py-2.5 rounded-xl bg-[#bb2924] text-white hover:bg-[#a11f1b] shadow-md shadow-red-900/10 transition duration-200">
                Apply Now
              </button>
            </div>
          </div>
        ))}
        
        {/* Anti-squish scroll edge spacing anchor block */}
        <div className="min-w-[1px] h-full pr-2 select-none pointer-events-none" />
      </div>
    </section>

    

<section className="relative py-24 bg-slate-50 font-poppins overflow-hidden">
      
      {/* Decorative clean backplate glows */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-100/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-100/30 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-slate-200/60 text-xs font-semibold text-slate-800 uppercase tracking-wider">
          <Newspaper className="w-3.5 h-3.5 text-[#1d0d66]" />
          Media Hub
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tight">
          Latest News & Events
        </h2>
        <p className="text-slate-600 mt-2 font-light max-w-2xl text-sm sm:text-base">
          Stay updated with current activities, announcements, and key institutional milestones at Elrazi Medical University.
        </p>
      </div>

      {/* Grid Layout: Guda 4 a jere a babban screen (lg:grid-cols-4), idan sun cika hudu sauran suna sauka kasa */}
      <div className="max-w-7xl mx-auto px-6 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-6">
        {news.map((item, i) => (
          <div
            key={i}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Media Aspect Frame wrapper */}
              <div className="h-48 overflow-hidden relative bg-slate-100">
                
                {/* Floating Modern Calendar Badge Overlay */}
                <div className="absolute top-3 left-3 z-20 bg-white/95 backdrop-blur-md rounded-xl p-2 shadow-md flex flex-col items-center min-w-[48px] border border-white/50 text-center select-none">
                  <span className="text-sm font-black text-slate-950 leading-none tracking-tight">
                    {item.day}
                  </span>
                  <span className="text-[9px] font-bold text-[#bb2924] mt-0.5 tracking-wider uppercase">
                    {item.month}
                  </span>
                </div>

                <div className="w-full h-full group-hover:scale-105 transition duration-500 ease-out">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Core Context Block */}
              <div className="p-5">
                <span className="inline-flex items-center gap-1.5 text-[10px] text-[#1d0d66] font-bold bg-slate-100 px-2 py-0.5 rounded-md uppercase tracking-wide group-hover:bg-blue-50 transition-colors duration-300">
                  Update
                </span>

                <h3 className="text-base font-bold text-slate-950 mt-3 mb-2 leading-snug group-hover:text-[#bb2924] transition-colors duration-300 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed font-light line-clamp-3">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Separated Bottom Footer Bar Row */}
            <div className="px-5 pb-5 pt-3 border-t border-slate-50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3.5 h-3.5 shrink-0 text-slate-400" />
                <span>{item.date}</span>
              </div>
              
              <button className="inline-flex items-center gap-1 font-bold text-[#1d0d66] hover:text-[#bb2924] transition-colors duration-200 focus:outline-none">
                <span>Read Article</span>
                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Footer Global Navigation Route Container */}
      <div className="text-center mt-16 relative z-10">
        <button className="px-8 py-3.5 bg-[#bb2924] text-white rounded-xl font-bold hover:bg-[#a11f1b] shadow-md shadow-red-900/10 active:scale-95 transition-all duration-200">
          View All News & Events
        </button>
      </div>

    </section>

<section className="py-24 bg-white font-poppins relative overflow-hidden">
      
      {/* Background elegant accents */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-50/50 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-red-50/30 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header - Focused & High End */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#bb2924]/5 border border-[#bb2924]/10 text-xs font-bold text-[#bb2924] uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5" />
            Explore Campus Life
          </span>

          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mt-4 tracking-tight leading-none">
            Student Stories & Campus Experience
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto mt-4 font-light text-sm sm:text-base leading-relaxed">
            Discover life at Elrazi Medical University through real student experiences, 
            interactive campus tours, academic milestones, and global alumni success stories.
          </p>
        </div>

        {/* Featured Layout Matrix Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pt-6">

          {/* Large Main Feature: Video Tour Card */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-3xl group cursor-pointer border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 h-[520px]">
            <img
              src="https://elrazi.edu.ng/uploads/students/campus_69067a3da38e21.59432066.jpeg"
              alt="Campus Tour"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* High-Contrast Premium Dark Masking Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            <div className="absolute inset-0 bg-black/10" />

            {/* Content Overlay */}
            <div className="absolute bottom-8 left-8 right-8 text-white z-10">
              <span className="inline-block bg-[#bb2924] px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest">
                Campus Tour
              </span>

              {/* Big Bold White Typography */}
              <h3 className="text-2xl md:text-4xl font-black mt-4 mb-2 tracking-tight leading-tight max-w-2xl">
                A Cinematic Tour Around Elrazi Medical University, Kano
              </h3>
              <p className="text-slate-200 text-sm font-light max-w-md mb-6 opacity-90">
                Take a look at our ultramodern clinical laboratories, lecture halls, and vibrant student community spaces.
              </p>

              {/* Smart Small Button */}
              <button className="px-5 py-2.5 bg-white text-slate-950 text-xs font-bold rounded-lg hover:bg-slate-100 active:scale-95 transition-all duration-200 inline-flex items-center gap-2 shadow-md">
                <Play className="w-3.5 h-3.5 text-[#bb2924] fill-[#bb2924]" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* Right Cards Stack Column */}
          <div className="flex flex-col justify-between gap-6">

            {/* Card 1: Student Stories */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-1">
              <div className="h-44 overflow-hidden relative">
                <img
                  src="https://elrazi.edu.ng/uploads/students/campus_690679d44bb0e2.29616044.jpeg"
                  alt="Students Sharing Experience"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between items-start">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#bb2924] bg-red-50 px-2 py-0.5 rounded uppercase tracking-wide">
                    <Users className="w-3 h-3" />
                    Student Stories
                  </span>

                  <h3 className="text-lg font-bold mt-3 text-slate-950 group-hover:text-[#bb2924] transition-colors">
                    Life as an Elrazi Medical Student
                  </h3>
                  <p className="text-xs text-slate-600 font-light mt-1.5 leading-relaxed line-clamp-2">
                    Hear firsthand accounts of academic rigor, peer collaboration, and personal growth from our clinical candidates.
                  </p>
                </div>

                <button className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#1d0d66] hover:text-[#bb2924] transition-colors group/btn focus:outline-none">
                  <span>Read Stories</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 2: Alumni Stories */}
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col flex-1">
              <div className="p-6 flex-1 flex flex-col justify-between items-start">
                <div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#1d0d66] bg-blue-50 px-2 py-0.5 rounded uppercase tracking-wide">
                    <GraduationCap className="w-3 h-3" />
                    Alumni Impact
                  </span>

                  <h3 className="text-lg font-bold mt-3 text-slate-950">
                    Elrazi Medical University Alumni Network
                  </h3>

                  <p className="text-xs text-slate-600 mt-2 font-light leading-relaxed line-clamp-3">
                    Our graduates are reshaping worldwide healthcare infrastructure, clinical research fields, 
                    and community medicine boards globally.
                  </p>
                </div>

                <button className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-[#1d0d66] hover:text-[#bb2924] transition-colors group/btn focus:outline-none">
                  <span>View Alumni Profiles</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Banner - Modern High Contrast Accent Bar */}
        <div className="mt-8 bg-slate-950 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-md">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#bb2924]/10 blur-[100px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/2" />
          
          <div className="relative z-10">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold text-[#ffb3b0] uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-md mb-3">
              <Bookmark className="w-3 h-3 text-[#bb2924]" />
              Promotional Examination Update
            </span>

            <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">
              MBBS 200L Students Officially Commence Promotional Exams
            </h3>
            <p className="text-xs text-slate-400 font-light mt-1 max-w-xl">
              The management wishes all undergraduate medical candidates success in their ongoing preclinical assessments.
            </p>
          </div>

          <button className="relative z-10 shrink-0 px-5 py-2.5 bg-[#bb2924] text-white text-xs font-bold rounded-lg hover:bg-[#a11f1b] active:scale-95 transition-all duration-200 shadow-lg shadow-red-900/20">
            Learn More
          </button>
        </div>

      </div>
    </section>
    <section className="relative py-24 bg-white font-poppins overflow-hidden border-t border-b border-slate-100">
      
      {/* Kyawawan background abstract glows don fitar da tsarin Premium White */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/40 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-50/30 blur-[130px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />
      
      {/* Micro grid pattern mai siriri a baya don kara haduwar tsari */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />

      {/* Babban Rukunin Abubuwan Ciki */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge na Sanarwa */}
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1d0d66]/5 border border-[#1d0d66]/10 text-xs sm:text-sm font-bold text-[#1d0d66] mb-8 tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-[#1d0d66] animate-pulse" />
          Admissions Open 2026/2027
        </span>

        {/* Babban Taken Sashen (Hero Heading) */}
        <h2 className="text-4xl md:text-6xl font-black text-slate-950 mb-6 leading-[1.1] tracking-tight">
          Ready to Begin Your <br />
          <span className="text-[#bb2924] relative inline-block">
            Medical Journey?
            <span className="absolute bottom-2 left-0 w-full h-2 bg-[#bb2924]/10 rounded -z-10 hidden md:block" />
          </span>
        </h2>

        {/* Dan Takaitaccen Bayani */}
        <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Join Elrazi Medical University and gain the exceptional knowledge, clinical experience, 
          and medical leadership skills needed to excel in the global healthcare landscape.
        </p>

        {/* Maballan Mu’amala (Action Buttons) */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#1d0d66] text-white font-bold shadow-lg shadow-red-900/10 hover:bg-[#a11f1b] active:scale-98 transition-all duration-200 inline-flex items-center justify-center gap-2">
            <span>Apply Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-200 bg-slate-50/50 text-[#1d0d66] font-bold hover:bg-slate-50 hover:border-slate-300 active:scale-98 transition-all duration-200 inline-flex items-center justify-center gap-2">
            <Phone className="w-4 h-4 text-slate-400" />
            <span>Contact Us</span>
          </button>
        </div>

        {/* Akwatunan Lissafi (Premium Clean Cards Stats) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors duration-300 flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#1d0d66] mb-3">
              <BookOpen className="w-4 h-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">12+</h3>
            <p className="text-slate-500 text-xs mt-0.5 font-medium">Programmes</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors duration-300 flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[#bb2924] mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">5,000+</h3>
            <p className="text-slate-500 text-xs mt-0.5 font-medium">Students</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors duration-300 flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-[#1d0d66] mb-3">
              <GraduationCap className="w-4 h-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">100+</h3>
            <p className="text-slate-500 text-xs mt-0.5 font-medium">Faculty Staff</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors duration-300 flex flex-col items-center">
            <div className="w-9 h-9 rounded-xl bg-red-50 flex items-center justify-center text-[#bb2924] mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">95%</h3>
            <p className="text-slate-500 text-xs mt-0.5 font-medium">Success Rate</p>
          </div>

        </div>

      </div>
    </section>

    <footer className="bg-slate-50/70 border-t border-slate-200/60 font-bold pt-20 relative overflow-hidden">
      
      {/* Subtle branding decorative accent background blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-50 blur-[120px] rounded-full pointer-events-none translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50/60 blur-[120px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4" />

      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Column 1: About & Identity */}
          <div className="flex flex-col">
            <img
              src="https://elrazi.edu.ng/uploads/logo_header_white_1762123520.png"
              alt="Elrazi Medical University"
              className="h-14 w-auto object-contain self-start mb-6"
            />
            <p className="text-600 leading-relaxed text-sm font-normal">
              Elrazi Medical University, Kano is a hybrid child of a partnership
              between Elrazi University (Sudan) and Queen's Science Academy
              (Kano, Nigeria), combining academic excellence, innovation,
              and healthcare leadership.
            </p>
          </div>

          {/* Column 2: Admission Links */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-slate-950 mb-6 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#1d0d66]" />
              Admission
            </h3>
            <ul className="space-y-3">
              {[
                "Apply for Admission",
                "How to Apply",
                "Tuition & Fees",
                "Scholarship",
                "News & Events",
                "Campus Life",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-slate-600 hover:text-[#bb2924] font-light transition-all duration-200"
                  >
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-[#bb2924] transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-slate-950 mb-6 flex items-center gap-2">
              <Building className="w-4 h-4 text-[#1d0d66]" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                "Mission and Vision",
                "The Vice Chancellor",
                "The Senate",
                "About Us",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center gap-1 text-sm text-slate-600 hover:text-[#bb2924] font-normal transition-all duration-200"
                  >
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-[#bb2924] transform group-hover:translate-x-0.5 transition-transform" />
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Premium Contact Information Box */}
          <div>
            <h3 className="text-sm font-normal uppercase tracking-wider text-slate-950 mb-6">
              Contact Us
            </h3>
            <div className="space-y-4">

              {/* Phone Rows */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center shrink-0 text-[#bb2924] mt-0.5">
                  <Phone size={14} />
                </div>
                <div className="text-slate-600 text-sm font-normal space-y-0.5">
                  <p className="hover:text-slate-950 transition-colors">+234 902 316 8968</p>
                  <p className="hover:text-slate-950 transition-colors">+234 703 078 5761</p>
                  <p className="hover:text-slate-950 transition-colors">+234 808 427 7233</p>
                </div>
              </div>

              {/* Mail Row */}
              <div className="flex gap-3 items-center">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 text-[#1d0d66]">
                  <Mail size={14} />
                </div>
                <a href="mailto:info@elrazi.edu.ng" className="text-slate-600 text-sm font-normal hover:text-[#1d0d66] transition-colors break-all">
                  info@elrazi.edu.ng
                </a>
              </div>

              {/* Location Address Row */}
              <div className="flex gap-3 items-start">
                <div className="w-8 h-8 rounded-lg bg-slate-200/60 flex items-center justify-center shrink-0 text-slate-700 mt-0.5">
                  <MapPin size={14} />
                </div>
                <p className="text-slate-600 text-sm font-normal leading-relaxed">
                  Km 10 Maiduguri Road, Aminu Babakusa Street,
                  Yargaya District, Kano State, Nigeria.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Notice Footer Bar */}
      <div className="border-t border-slate-200/70 bg-white py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-slate-500 font-light text-center md:text-left">
            &copy; {new Date().getFullYear()} <span className="font-normal text-slate-800">Elrazi Medical University</span>. All Rights Reserved.
          </p>

          <p className="text-xs text-slate-400 text-center md:text-right font-formal">
            Powered by{" "}
            <span className="text-[#1d0d66] font-semibold hover:text-[#bb2924] transition-colors duration-200 cursor-pointer">
              Elrazi ICT Department
            </span>
          </p>

        </div>
      </div>

    </footer>
    </div>
  );
}

export default App;
