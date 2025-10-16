import { Download, ChevronDown, Linkedin, Github, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

// =======================================================================================================
// === KOMPONEN TYPEWRITER ===
// =======================================================================================================
interface TypewriterProps {
  roles: string[];
  speed: number;
  delay: number;
}

const Typewriter = ({ roles, speed, delay }: TypewriterProps) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index === roles.length) setIndex(0);

    if (subIndex === roles[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, roles, speed, delay]);

  useEffect(() => {
    const cursorTimer = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <>
      {roles[index].substring(0, subIndex)}
      <span
        className={`border-r-2 border-sky-400 font-normal ${
          blink ? 'opacity-100' : 'opacity-0'
        } transition-opacity duration-100`}
        aria-hidden="true"
      >
        &nbsp;
      </span>
    </>
  );
};

// =======================================================================================================
// === KOMPONEN HERO UTAMA ===
// =======================================================================================================
export default function Hero() {
  const myRoles = [
    'Backend Developer',
    'Full Stack Developer',
    'Frontend Engineer',
    'Mobile Developer',
    'System Analyst',
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden"
    >
      {/* === Background Animasi === */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* === Konten Utama === */}
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 w-full flex flex-col justify-center">
        <div className="grid md:grid-cols-2 gap-x-8 lg:gap-x-12 items-center justify-center">
          
          {/* === Kolom Kiri: Teks & Tombol === */}
          <div className="space-y-6 text-center md:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center bg-gradient-to-r from-slate-800/90 to-slate-800/70 border border-sky-400/30 backdrop-blur-md px-5 py-2.5 rounded-full shadow-lg shadow-sky-500/10">
              <div className="w-2 h-2 bg-sky-400 rounded-full mr-3 animate-pulse"></div>
              <p className="text-sm text-sky-300 font-medium tracking-wide">
                Kode yang Indah, lahir dari ketekunan.
              </p>
            </div>

            {/* Judul */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight">
              <span className="text-slate-200">Hai, Saya</span>
              <span className="block mt-2 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Fani Illahi
              </span>
            </h1>

            {/* Typewriter */}
            <div className="flex justify-center md:justify-start items-center gap-2 min-h-[48px]">
              <div className="w-1 h-8 bg-gradient-to-b from-sky-400 to-indigo-400 rounded-full"></div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
                  <Typewriter roles={myRoles} speed={100} delay={1500} />
                </span>
              </p>
            </div>

            {/* Tombol */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-6">
              <a
                href="https://drive.google.com/drive/folders/1lMtRW_KXTzOCuIVoIayLnkaZIgDhWlb4?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-7 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg shadow-indigo-600/40 hover:shadow-xl hover:shadow-indigo-600/60"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                MY RESUME
              </a>

              <button
                onClick={() => scrollToSection('portfolio-showcase')}
                className="group flex items-center gap-2 bg-slate-800/50 hover:bg-slate-700/50 border-2 border-sky-400/50 hover:border-sky-300 text-sky-300 hover:text-sky-200 px-7 py-3.5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
              >
                Lihat Portofolio
                <ChevronDown
                  size={20}
                  className="group-hover:translate-y-1 transition-transform"
                />
              </button>
            </div>

            {/* Sosial Media */}
            <div className="pt-6 space-y-4">
              <p className="text-lg text-slate-300 font-semibold flex items-center justify-center md:justify-start gap-2">
                <span className="w-8 h-px bg-gradient-to-r from-sky-400 to-transparent"></span>
                Let's Connect With Me
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/in/fani-illahi-711927328/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-300 transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-sky-500/50 hover:-translate-y-1"
                >
                  <Linkedin size={22} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/faniillahi24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-300 transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-sky-500/50 hover:-translate-y-1"
                >
                  <Github size={22} className="group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://www.instagram.com/faniilh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-slate-800/80 backdrop-blur-sm rounded-xl text-slate-300 transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-600 hover:to-indigo-600 hover:text-white hover:shadow-lg hover:shadow-sky-500/50 hover:-translate-y-1"
                >
                  <Instagram size={22} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* === Kolom Kanan: Foto Profil === */}
          <div className="flex justify-center md:justify-end items-center mt-12 md:mt-0">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-sky-400/20 via-indigo-500/20 to-violet-600/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-all duration-500"></div>
              <div className="relative transform group-hover:scale-105 transition-transform duration-500">
                <img
                  src="/profil-fani.jpeg"
                  alt="Profile"
                  className="relative rounded-2xl w-64 sm:w-72 lg:w-96 h-auto object-cover border-4 border-slate-900 shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
