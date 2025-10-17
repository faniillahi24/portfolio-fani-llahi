import { Code2, Palette, LayoutGrid as Layout, Smartphone, Bug, Database, Zap } from 'lucide-react';

// Data Skills yang Disesuaikan Deskripsinya
const skills = [
    {
        icon: Code2,
        name: 'Frontend Development',
        description: 'React, Next.js, Tailwind CSS, JavaScript, TypeScript. Membangun antarmuka pengguna interaktif.',
        level: 90
    },
    {
        icon: Database,
        name: 'Backend & Services',
        description: 'Node.js, Express.js, PHP, Laravel, C#. Mengembangkan API dan logika server yang kuat.',
        level: 85
    },
    {
        icon: Smartphone,
        name: 'Mobile Development',
        description: 'Flutter, Dart, Kotlin, Java. Membuat aplikasi mobile untuk Android dan iOS.',
        level: 82
    },
    {
        icon: Zap,
        name: 'Tools & Database',
        description: 'MySQL, Git, Figma, VS Code, Postman. Manajemen data dan optimalisasi alur kerja.',
        level: 88
    }
];

export default function About() {
    // Menggunakan warna dari tema biru/ungu yang konsisten
    const ACCENT_COLOR = 'bg-indigo-500';
    const HOVER_SHADOW = 'hover:shadow-indigo-400/20';
    const ICON_SHADOW = 'shadow-indigo-500/50';

    return (
        <section id="tentang" className="py-24 bg-gray-900 text-white">
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Judul Bagian "Tentang Saya" */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-extrabold text-white mb-4">Tentang Saya</h2>
                    {/* Garis pemisah aksen */}
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* --- Bagian Biografi (Menggunakan 1 Kolom) --- */}
                {/* MENGHAPUS GRID 2 KOLOM */}
                <div className="max-w-4xl mx-auto mb-20"> 
                    
                    {/* Kolom Biografi (Teks Diperlebar) */}
                    <div className="space-y-6">
                        <p className="text-base text-gray-300 leading-relaxed text-justify md:text-lg">
                            Halo, nama saya Fani Illahi, atau bisa dipanggil Fani. Saya berasal dari Politeknik Negeri Padang, 
                            Jurusan Teknologi Informasi, Program Studi Manajemen Informatika.
                        </p>
                        <p className="text-base text-gray-300 leading-relaxed text-justify md:text-lg">
                            Didorong oleh komitmen untuk terus belajar, ketekunan, dan rasa tanggung jawab yang tinggi, 
                            saya memiliki semangat besar dalam mempelajari teknologi terkini. Minat saya di bidang 
                            rekayasa perangkat lunak meliputi pengembangan aplikasi mobile, frontend development, 
                            pengembangan website, desain UI/UX, dan lainnya.
                        </p>
                        <p className="text-base text-gray-300 leading-relaxed text-justify md:text-lg">
                            Pengalaman saya dalam berorganisasi juga dapat diterapkan di dunia industri, karena saya 
                            terbiasa bekerja dalam tim serta memimpin sebuah kegiatan. Dengan pendekatan proaktif 
                            dalam memecahkan masalah dan dedikasi untuk selalu mengikuti perkembangan industri, 
                            saya siap berkontribusi secara efektif dalam proyek-proyek yang dinamis dan inovatif.
                        </p>
                    </div>
                </div>

                {/* --- Bagian Kartu Skill --- */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <div
                                key={index}
                                className={`bg-gray-800 rounded-xl p-8 shadow-2xl shadow-gray-700/30 transition-all transform hover:-translate-y-3 ${HOVER_SHADOW}`}
                            >
                                {/* Ikon: Latar Belakang dan Shadow menggunakan indigo-500 */}
                                <div className={`${ACCENT_COLOR} w-16 h-16 rounded-xl flex items-center justify-center mb-5 shadow-lg ${ICON_SHADOW}`}>
                                    <Icon className="text-gray-900" size={32} />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-3 tracking-wide">{skill.name}</h4>
                                <p className="text-sm text-gray-400 mb-5">{skill.description}</p>
                                
                                {/* Progress Bar */}
                                <div className="w-full bg-gray-700 rounded-full h-3">
                                    <div
                                        className={`${ACCENT_COLOR} h-3 rounded-full transition-all duration-1000`} // Progress Bar: Warna menggunakan indigo-500
                                        style={{ width: `${skill.level}%` }}
                                    ></div>
                                </div>
                                <p className="text-xs text-gray-400 mt-2 text-right font-semibold">{skill.level}%</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
