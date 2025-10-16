import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  roles: string[];
  speed?: number;
  delay?: number; 
}

const Typewriter: React.FC<TypewriterProps> = ({ roles, speed = 100, delay = 1500 }) => {
  const [currentText, setCurrentText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[roleIndex];
      
      if (isDeleting) {
        // Mode Menghapus
        setCurrentText(prev => prev.substring(0, prev.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        // Mode Mengetik
        setCurrentText(prev => currentRole.substring(0, prev.length + 1));
        if (currentText === currentRole) {
          setIsDeleting(true);
        }
      }
    };

    let timeoutId: NodeJS.Timeout;
    const typingDelay = isDeleting ? speed / 2 : speed;
    const endOfRoleDelay = isDeleting ? typingDelay : delay;

    timeoutId = setTimeout(handleTyping, currentText === roles[roleIndex] ? endOfRoleDelay : typingDelay);

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, roleIndex, roles, speed, delay]);

  return (
    // Menggunakan aksen Emas/Kuning dan kursos yang berkedip
    <span className="relative inline-block">
      {currentText}
      <span className="ml-1 animate-pulse-slow text-yellow-400">|</span> 
    </span>
  );
};

export default Typewriter;