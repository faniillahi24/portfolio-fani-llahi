import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'tentang', label: 'Tentang Saya' },
    { id: 'portfolio-showcase', label: 'Portofolio' },
    { id: 'kontak', label: 'Kontak' },
  ];

  return (
    // 1. Ganti latar belakang (bg) gelap dan shadow yang halus
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-700 shadow-xl z-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            {/* 2. Judul (Logo): Font tebal, warna emas/putih */}
            <h1 className="text-2xl font-extrabold text-white tracking-wider">
              <span className="text-purple-400">Fani's</span> Portfolio
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  // 3. Gaya Tombol: Warna dasar putih lembut, hover bergaris bawah (underline) atau glow
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 text-sm font-semibold transition-all relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-purple-400 after:w-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tombol Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white p-2 transition-colors border border-gray-700 rounded-lg"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        // 4. Mobile Menu: Latar belakang gelap, border lebih jelas
        <div className="md:hidden bg-gray-800 border-t border-gray-700"> 
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                // 5. Gaya Tombol Mobile: Block penuh, hover elegan
                className="block w-full text-left text-gray-300 hover:bg-gray-700 hover:text-purple-400 px-3 py-2 text-base font-medium transition-colors rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}