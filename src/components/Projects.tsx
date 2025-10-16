import { Briefcase, Award, Code, ExternalLink, Github, // Ikon dasar
         Activity, // untuk React, Next.js (generik)
         Brush, // untuk Tailwind CSS
         Type, // untuk TypeScript, JavaScript
         Server, // untuk Node.js, PHP, Laravel, C#
         Smartphone, // untuk Flutter, Dart, Kotlin, Java
         Database, // untuk MySQL
         GitFork, // untuk Git
         LayoutGrid, // untuk Figma (generik)
         Monitor, // untuk Visual Studio Code, Android Studio
         Gauge // untuk Postman
       } from 'lucide-react';
import { useState } from 'react';

// --- DATA DUMMY (GANTI DENGAN DATA ASLI ANDA) ---
const projectsData = [
  // Contoh Proyek (sesuai format data Anda yang sudah ada)
{
    id: 1,
    title: 'Website Wisata',
    role: 'Full Stack Developer',
    description: 'Website ini untuk menampilkan informasi terkait wisata kesehatan pemandian air panas dan juga pemesanan tiket secara online.',
    tags: ['Laravel', 'PHP', 'Boostrap'],
    image: '/Projek/wisata3.jpg',
    githubLink: 'https://github.com/faniillahi24/artaden_si'
  },  
{
    id: 2,
    title: 'Portfolio Website',
    role: 'Full Stack Developer',
    description: 'Website ini untuk menampilkan informasi pribadi, pengalaman, keterampilan, dan proyek-proyek yang telah saya kerjakan sebagai seorang pengembang perangkat lunak.',
    tags: ['Next.js', 'React', 'Tailwind CSS'],
    image: '/Projek/portfolio.jpg',
    githubLink: 'https://github.com/faniillahi24/portfolio-fani-llahi'
  },
  {
    id: 3,
    title: 'Hospital App',
    role: 'Fullstack Developer',
    description: 'Hospital App adalah aplikasi mobile Fullstack yang dirancang untuk menyederhanakan proses pendaftaran dan manajemen antrean pasien rumah sakit. Proyek ini menunjukkan kemampuan saya dalam membangun solusi cross-platform dan backend yang kuat..',
    tags: ['Dart','Flutter', 'PHP Native', 'MySQL'],
    image: '/Projek/hospital2.jpg',
    githubLink: 'https://github.com/faniillahi24/app_hospital'
  },
 {
    id: 4,
    title: 'Sistem Kasir',
    role: 'Software Developer',
    description: 'Sistem Kasir adalah aplikasi desktop yang dirancang untuk mengelola operasional penjualan dan inventaris di lingkungan ritel atau bisnis. Proyek ini dibangun menggunakan C# dan memanfaatkan Windows Forms (atau WPF, sesuaikan dengan yang Anda gunakan) untuk antarmuka pengguna yang intuitif dan fungsional.',
    tags: ['C#','windows Form', 'MySQL'],
    image: '/Projek/sistem kasir2.jpg',
    githubLink: ''
  },
];

//Sertifikat
const certificatesData = [
  { 
    id: 1, 
    title: 'Database Programming with SQL', 
    provider: 'Oracle', 
    date: 'Juni 2024', 
    image: '/ProgrammingSQL.png', 
    credentialId: '',       
    link: 'https://drive.google.com/file/d/1aJjT1nW7NrK2I_j30RMrvHc4fWTKL-B1/view' 
  },
  { 
    id: 3, 
    title: 'Java Fundamentals', 
    provider: 'Oracle', 
    date: 'April 2024', 
    image: '/javafundamental.png', 
    credentialId: '',       
    link: 'https://drive.google.com/file/d/1IBZmrqIZKRHo8Hf-7cesudKDapA5iGXW/view' 
  },
  { 
    id: 4, 
    title: 'Database Foundations', 
    provider: 'Oracle', 
    date: 'Juni 2024', 
    image: '/Databasefoundation.png', 
    credentialId: '',       
    link: 'https://drive.google.com/file/d/1YzDKiROz9isVDFkQB9ZMSq1BIGn29w1L/view' 
  },
   { 
    id: 5, 
    title: 'Java Fundamentals & Java Programming Talent Scouting Academy Digital Talent Scholarship 2024', 
    provider: 'Kementerian Komunikasi dan Informatika Republik Indonesia', 
    date: 'Februari 2024', 
    image: '/fundamentalprogramming.jpeg', 
    credentialId: '2007342840-109/TSA/BLSDM.Kominfo/2024',       
    link: 'https://drive.google.com/file/d/1mF-FHcpoLJK0qbNyDGtCSMQOZ2sahiud/view' 
  },
  { 
    id: 6, 
    title: 'Belajar Back-End Pemula dengan JavaScript', 
    provider: 'Dicoding Indonesia', 
    date: 'Agustus 2025', 
    image: '/pemula-java-script.png', 
    credentialId: 'GRX5JG5OYX0M',       
    link: 'https://www.dicoding.com/certificates/GRX5JG5OYX0M' 
  },
  { 
    id: 7, 
    title: 'Belajar Dasar Cloud dan Gen AI di AWS', 
    provider: 'Dicoding Indonesia', 
    date: 'Agustus 2025', 
    image: '/aws.png',  
    credentialId: 'JMZVVMK2RZN9',      
    link: 'https://www.dicoding.com/certificates/JMZVVMK2RZN9' 
  },
  { 
    id: 8, 
    title: 'Belajar Dasar Pemrograman JavaScript', 
    provider: 'Dicoding Indonesia', 
    date: 'Agustus 2025', 
    image: '/pemrograman-javascript.png',  
    credentialId: '98XWO63W9ZM3',   
    link: 'https://www.dicoding.com/certificates/98XWO63W9ZM3' 
  },
  { 
    id: 9, 
    title: 'Konsep Pemrograman Micro Skill', 
    provider: 'Digital Talent ScholarshipDigital', 
    date: 'Agustus 2025', 
    image: '/konsep-pemrograman.png', 
    credentialId: '2299793850-8858/MS/BLSDM.Komdigi/2025',       
    link: 'https://drive.google.com/file/d/1NO-qd-nHZ1J19Rg7DAiW9fJAVKI2M5Nm/view?usp=sharing' 
  },
  { 
    id: 10, 
    title: 'Ketua Pelaksana Pekan Kreativitas Teknologi Olahraga dan Seni (PKTOS) Semester Genap 2025', 
    provider: 'Unit Kegiatan Mahasiswa CyberTech Politeknik Negeri Padang', 
    date: 'April 2025', 
    image: '/Ketua Pelaksana PKTOS.jpg', 
    credentialId: '67/S.002/UKM-CYBERTECH-PNP/IV/2025',        
    link: 'https://drive.google.com/file/d/11WGUuPpAQECmFv8MGOWJJcqP63tH2pNX/view?usp=sharing' 
  },
   { 
    id: 11, 
    title: 'Campus Connector', 
    provider: 'SeeMeSOL', 
    date: 'Feb 2025', 
    image: '/SERTIF PARTISIPASI CAMPUS CONNECTOR.jpg',  
    link: 'https://drive.google.com/file/d/1DzL2Zi4x_rXXn39M6Cg2gisvcGCfyBsr/view?usp=sharing' 
  },
    { 
    id: 12, 
    title: 'Koordinator Publikasi dan Dokumentasi LLT', 
    provider: 'Majelis Perwakilan Mahasiswa Politeknik Negeri Padang', 
    date: 'November 2024 2025', 
    image: '/Koor PUBDOK LLT.jpg',
    credentialId: '745/PL9/KM/2024',   
    link: 'https://drive.google.com/file/d/175HUy8pUXWFGOwIGkZ_OjYj45NBWFiE6/view?usp=sharing' 
  },
  
  
  
];

// --- TECH STACK DATA DENGAN ICON DARI LUCIDE-REACT ---
const techStackData = [
    { name: 'React', logoIcon: Activity, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' }, // Menggunakan Activity sebagai ikon generik
    { name: 'Next.js', logoIcon: Code, backgroundColor: 'bg-gray-100', logoBackground: 'bg-gray-50' }, // Code untuk Next.js
    { name: 'Tailwind CSS', logoIcon: Brush, backgroundColor: 'bg-cyan-100', logoBackground: 'bg-cyan-50' },
    { name: 'JavaScript', logoIcon: Type, backgroundColor: 'bg-yellow-100', logoBackground: 'bg-yellow-50' },
    { name: 'TypeScript', logoIcon: Type, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' },
    { name: 'Node.js', logoIcon: Server, backgroundColor: 'bg-green-100', logoBackground: 'bg-green-50' },
    { name: 'PHP', logoIcon: Code, backgroundColor: 'bg-indigo-100', logoBackground: 'bg-indigo-50' },
    { name: 'Laravel', logoIcon: Server, backgroundColor: 'bg-red-100', logoBackground: 'bg-red-50' },
    { name: 'C#', logoIcon: Code, backgroundColor: 'bg-purple-100', logoBackground: 'bg-purple-50' },
    { name: 'Flutter', logoIcon: Smartphone, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' },
    { name: 'Dart', logoIcon: Smartphone, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' },
    { name: 'Kotlin', logoIcon: Smartphone, backgroundColor: 'bg-purple-100', logoBackground: 'bg-purple-50' },
    { name: 'Java', logoIcon: Smartphone, backgroundColor: 'bg-red-100', logoBackground: 'bg-red-50' }, // Menggunakan Mobile sebagai ikon generik
    { name: 'MySQL', logoIcon: Database, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' },
    { name: 'Git', logoIcon: GitFork, backgroundColor: 'bg-red-100', logoBackground: 'bg-red-50' },
    { name: 'Figma', logoIcon: LayoutGrid, backgroundColor: 'bg-pink-100', logoBackground: 'bg-pink-50' },
    { name: 'Visual Studio Code', logoIcon: Monitor, backgroundColor: 'bg-blue-100', logoBackground: 'bg-blue-50' },
    { name: 'Android Studio', logoIcon: Monitor, backgroundColor: 'bg-green-100', logoBackground: 'bg-green-50' },
    { name: 'Postman', logoIcon: Gauge, backgroundColor: 'bg-orange-100', logoBackground: 'bg-orange-50' },
];

const tabs = [
  { id: 'projects', label: 'Projects', icon: Briefcase },
  { id: 'certificates', label: 'Certificates', icon: Award },
  { id: 'techstack', label: 'Tech Stack', icon: Code },
];

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState('projects');

  // --- RENDERING FUNGSI UNTUK SETIAP TAB ---

  const renderProjects = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
      {projectsData.map((project) => (
        <div key={project.id} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-green-900/30 transition-all transform hover:-translate-y-2 duration-300 border border-indigo-800">
          
          <div className="relative h-56 overflow-hidden">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>

          <div className="p-6">
            <p className="text-sm font-semibold text-indigo-400 mb-1">Role: {project.role}</p>
            <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4 leading-relaxed text-sm">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-indigo-900/50 text-indigo-400 text-xs font-medium rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-4">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                <Github size={16} /> Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCertificates = () => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"> {/* Gunakan grid untuk kartu sertifikat */}
      {certificatesData.map((cert) => (
        <div key={cert.title} className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl shadow-green-900/30 transition-all transform hover:-translate-y-2 duration-300 border border-green-800">
          
          {/* Gambar Sertifikat */}
          <div className="relative h-56 overflow-hidden bg-gray-700 flex items-center justify-center p-4"> {/* Menambahkan padding */}
            <img src={cert.image} alt={cert.title} className="w-full h-full object-contain transition-transform duration-500 hover:scale-105" /> {/* object-contain agar gambar tidak terpotong */}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
            <p className="text-gray-400 text-sm mb-2">{cert.provider}</p>
            <p className="text-gray-500 text-xs mb-4">Credential ID: {cert.credentialId}</p> {/* Credential ID */}
            
            {/* Tombol "Show Credential" */}
            <a href={cert.link} target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center gap-2 bg-indigo-700 hover:bg-indigo-800 text-white px-4 py-2 rounded-lg font-medium transition-colors w-full">
              <ExternalLink size={16} /> Show Credential
            </a>
          </div>
        </div>
      ))}
    </div>
  );

  // --- TECH STACK RENDER ---
  const renderTechStack = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mt-10">
      {techStackData.map((stack) => {
        const IconComponent = stack.logoIcon; // Dapatkan komponen ikon
        return (
          <div 
            key={stack.name} 
            className={`flex flex-col items-center p-6 rounded-xl shadow-lg border border-gray-700 
                        hover:shadow-indigo-500/20 transition-all transform hover:scale-105 
                        ${stack.backgroundColor || 'bg-white'}`}
          >
            <div 
              className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 
                          ${stack.logoBackground || 'bg-gray-100'}`}
            >
              {IconComponent && <IconComponent size={32} className="text-gray-700" />} {/* Render komponen ikon */}
              {/* Tambahkan text-gray-700 agar ikon terlihat jelas di atas background cerah */}
            </div>
            <h4 className="text-base font-semibold text-gray-800 text-center">{stack.name}</h4>
          </div>
        );
      })}
    </div>
  );

  // --- FUNGSI UTAMA ---

  const renderContent = () => {
    switch (activeTab) {
      case 'certificates':
        return renderCertificates();
      case 'techstack':
        return renderTechStack();
      case 'projects':
      default:
        return renderProjects();
    }
  };

  return (
    <section id="portfolio-showcase" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Judul Halaman */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-white mb-2">Portfolio Showcase</h2>
          <p className="text-lg text-gray-400">Explore my journey through projects, certifications, and technical expertise</p>
        </div>

        {/* Tab/Switcher Navigasi */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-800 p-2 rounded-xl shadow-xl shadow-green-900/30">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-500/50'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  <Icon size={20} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Konten yang Ditampilkan Berdasarkan Tab */}
        <div className="min-h-[500px]"> {/* min-height agar halaman tidak loncat saat ganti tab */}
            {renderContent()}
        </div>

      </div>
    </section>
  );
}
