import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span>Dibuat dengan</span>
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            <span>oleh Fani Illahi</span>
          </div>

          <div className="text-center text-slate-400 text-sm">
            <p>&copy; {currentYear} Fani Illahi. All rights reserved.</p>
          </div>

          <div className="text-xs text-slate-500">
            <p>Kode yang Indah, lahir dari ketekunan.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
