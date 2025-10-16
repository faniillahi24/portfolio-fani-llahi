import { Mail, MapPin, Phone, Facebook, Instagram, Github, Linkedin, Send } from 'lucide-react';
import { useState, FormEvent } from 'react';

// =======================================================================================================
// === PENTING: GANTI DUA HAL DI BAWAH INI DENGAN DATA FORM JOTFORM ANDA (Cek opsi Publish/Embed di Jotform)
// =======================================================================================================
// URL SUBMIT ASLI JOTFORM: https://submit.jotform.com/submit/252884635961066
const JOTFORM_SUBMIT_URL = 'https://submit.jotform.com/submit/252884635961066'; // <--- URL SUDAH DIGANTI!
// Gunakan nama unik field dari Jotform Anda. Contoh: q1_name, q2_email.
const JOTFORM_FIELD_MAP = {
  name: 'q2_fullname0', // GANTI 'q1_namaLengkap' DENGAN NAMA FIELD UNIK JOTFORM UNTUK NAMA
  email: 'q3_email1',      // GANTI 'q2_emailAnda' DENGAN NAMA FIELD UNIK JOTFORM UNTUK EMAIL
  message: 'q4_textarea2'     // GANTI 'q3_pesanKlien' DENGAN NAMA FIELD UNIK JOTFORM UNTUK PESAN
}
// =======================================================================================================


export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Mengubah state menjadi FormData (wajib untuk Jotform submit)
    const jotformData = new FormData();
    jotformData.append(JOTFORM_FIELD_MAP.name, formData.name); 
    jotformData.append(JOTFORM_FIELD_MAP.email, formData.email); 
    jotformData.append(JOTFORM_FIELD_MAP.message, formData.message); 
    
    try {
      const response = await fetch(JOTFORM_SUBMIT_URL, {
        method: 'POST',
        body: jotformData, // Menggunakan FormData
      });

      // Jotform biasanya mengembalikan status 200/302, response.ok mencakup 200-299.
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Jika Jotform merespons dengan error (misalnya 4xx atau 5xx)
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Hapus pesan status setelah 3 detik
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Data sosial media dengan penyesuaian warna hover
  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/faniilh_/', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Github, url: 'https://github.com/faniillahi24', label: 'GitHub', color: 'hover:bg-green-700' }, 
    { icon: Linkedin, url: 'https://www.linkedin.com/in/fani-illahi-711927328/', label: 'LinkedIn', color: 'hover:bg-blue-700' }
  ];

  return (
    // 1. Latar Belakang Gelap Kontras
    <section id="kontak" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-extrabold text-white mb-4">Hubungi Saya</h2>
          {/* Garis pemisah aksen emas */}
          <div className="w-24 h-1 bg-indigo-400 mx-auto mb-4 rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tertarik untuk berkolaborasi? Mari kita diskusikan proyek Anda!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* --- Panel Kiri: Info Kontak & Sosial Media --- */}
          <div className="space-y-12">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Mari Terhubung</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Saya selalu terbuka untuk proyek baru, ide kreatif, atau peluang untuk menjadi bagian dari visi Anda. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="space-y-6">
              {[
                { Icon: Mail, title: 'Email', value: 'illahifani45@gmail.com' },
                { Icon: Phone, title: 'Telepon', value: '+62 831-8254-6263' },
                { Icon: MapPin, title: 'Lokasi', value: 'Padang, Indonesia' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 text-gray-300 transition-colors">
                  {/* 2. Ikon Kontak: Latar belakang gelap, ikon emas */}
                  <div className="bg-gray-800 p-3 rounded-lg border border-gray-700 shadow-lg">
                    <item.Icon className="text-indigo-400" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-gray-400">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-bold text-white mb-6">Ikuti Saya</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      // 3. Tombol Sosial Media: BG gelap, hover menonjol
                      className={`bg-gray-800 p-4 rounded-full text-gray-300 hover:text-white transition-all transform hover:scale-110 shadow-lg shadow-gray-800/50 border border-gray-700 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* --- Panel Kanan: Formulir Kontak --- */}
          <div className="bg-gray-800 rounded-3xl p-10 shadow-2xl shadow-lime-400/10 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {['Nama Lengkap', 'Email', 'Pesan'].map((label, index) => {
                const name = label === 'Nama Lengkap' ? 'name' : label === 'Email' ? 'email' : 'message';
                const type = name === 'email' ? 'email' : 'text';
                const placeholder = name === 'name' ? 'Masukkan nama Anda' : name === 'email' ? 'email@example.com' : 'Tuliskan pesan Anda di sini...';
                
                return (
                  <div key={index}>
                    <label htmlFor={name} className="block text-sm font-semibold text-gray-300 mb-2">
                      {label}
                    </label>
                    {name === 'message' ? (
                      <textarea
                        id={name}
                        name={name}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        // 4. Input Field: BG gelap, border aksen fokus emas
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all outline-none resize-none shadow-inner shadow-black/10"
                        placeholder={placeholder}
                      ></textarea>
                    ) : (
                      <input
                        type={type}
                        id={name}
                        name={name}
                        value={formData[name as 'name' | 'email']}
                        onChange={handleChange}
                        required
                        // 4. Input Field: BG gelap, border aksen fokus emas
                        className="w-full px-4 py-3 rounded-xl bg-gray-900 border border-gray-700 text-white focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all outline-none shadow-inner shadow-black/10"
                        placeholder={placeholder}
                      />
                    )}
                  </div>
                );
              })}

              <button
                type="submit"
                disabled={isSubmitting}
                // 5. Tombol Submit: Emas, shadow menonjol, efek hover yang kuat
                className="w-full flex items-center justify-center gap-2 bg-indigo-400 hover:bg-indigo-500 disabled:bg-gray-700 text-gray-900 px-6 py-3 rounded-lg font-bold transition-all transform hover:scale-[1.02] disabled:scale-100 shadow-xl shadow-indigo-400/30"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Kirim Pesan
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                // 6. Pesan Sukses: Warna hijau yang kontras, terintegrasi dengan tema
                <div className="bg-indigo-600 border border-indigo-700 text-white px-4 py-3 rounded-lg text-center font-medium shadow-lg">
                  Pesan berhasil dikirim! Terima kasih.
                </div>
              )}
              {submitStatus === 'error' && (
                // Pesan Error
                <div className="bg-red-600 border border-red-700 text-white px-4 py-3 rounded-lg text-center font-medium shadow-lg">
                  Terjadi kesalahan saat mengirim. Coba lagi atau kirim langsung ke email saya.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
