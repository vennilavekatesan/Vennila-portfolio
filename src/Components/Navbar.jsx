import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Download } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        setIsMenuOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <div className="w-12 h-12 border-2 border-emerald-400 rounded flex items-center justify-center">
                            <span className="text-2xl font-bold text-emerald-400">V</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-12">
                        <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                            About
                        </button>
                        <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                            Experience
                        </button>
                        <button onClick={() => scrollToSection('work')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                            Work
                        </button>
                        <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-emerald-400 transition-colors">
                            Contact
                        </button>
                        <a
                            href={`${window.location.origin}/Vennila_V.pdf`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black rounded transition-all"
                        >
                            My Resume
                            <ExternalLink size={16} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-emerald-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-gray-950 border-t border-gray-900">
                    <button onClick={() => scrollToSection('about')} className="block w-full text-left px-6 py-4 hover:bg-gray-900 transition-colors">
                        About
                    </button>
                    <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-6 py-4 hover:bg-gray-900 transition-colors">
                        Experience
                    </button>
                    <button onClick={() => scrollToSection('work')} className="block w-full text-left px-6 py-4 hover:bg-gray-900 transition-colors">
                        Work
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-6 py-4 hover:bg-gray-900 transition-colors">
                        Contact
                    </button>
                    <div className="p-4">
                        <a href={`${window.location.origin}/Vennila_V.pdf`}  target="_blank"
  rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-5 py-3 border border-emerald-400 text-emerald-400 rounded">
                            My Resume
                            <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;