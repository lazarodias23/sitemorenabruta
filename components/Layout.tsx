import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Twitter, Phone, MapPin, Mail, Lock } from 'lucide-react';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  active: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, onClick, active }) => (
  <Link
    to={to}
    onClick={onClick}
    className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
      active ? 'text-brand-red font-bold' : 'text-gray-300 hover:text-white'
    }`}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ to, children, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="block text-2xl font-serif text-white hover:text-brand-red transition-colors py-2"
  >
    {children}
  </Link>
);

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Agência', path: '/agencia' },
    { label: 'Acompanhantes', path: '/modelos' },
    { label: 'Categorias', path: '/categories' },
    { label: 'Roteiro', path: '/boates' },
    { label: 'Contato', path: '/contatos' },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col font-sans">
      {/* Header */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 border-b ${
          isScrolled || isMenuOpen
            ? 'bg-black/95 backdrop-blur-md border-zinc-800 py-4'
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="z-50 group">
            <h1 className="text-2xl font-bold tracking-tighter uppercase group-hover:text-brand-red transition-colors duration-300">
              Morena <span className="text-brand-red group-hover:text-white transition-colors duration-300">Bruta</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} active={location.pathname === item.path}>
                {item.label}
              </NavLink>
            ))}
            <Link 
              to="/contatos" 
              className="px-6 py-2 bg-brand-red hover:bg-red-700 text-white text-xs uppercase font-bold tracking-widest transition-all transform hover:scale-105"
            >
              Reservar
            </Link>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 text-white hover:text-brand-red transition-colors"
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
        >
          <nav className="flex flex-col items-center gap-6 text-center">
            {navItems.map((item) => (
              <MobileNavLink key={item.path} to={item.path}>
                {item.label}
              </MobileNavLink>
            ))}
             <Link 
              to="/contatos" 
              className="mt-8 px-8 py-3 bg-brand-red text-white text-sm uppercase font-bold tracking-widest"
            >
              Fale Conosco
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-white">Morena Bruta</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              Conectamos cavalheiros de bom gosto a mulheres extraordinárias para momentos inesquecíveis.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/agmorenabruta/" className="p-2 bg-zinc-800 rounded-full hover:bg-brand-red transition-colors text-white"><Instagram size={18} /></a>
                <a href="#" className="p-2 bg-zinc-800 rounded-full hover:bg-brand-red transition-colors text-white"><Twitter size={18} /></a>
                <a href="https://wa.me/554891305799" className="p-2 bg-zinc-800 rounded-full hover:bg-brand-red transition-colors text-white"><Lock size={18} /></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-red">Menu</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link to="/agencia" className="hover:text-white transition-colors">Sobre Nós</Link></li>
                <li><Link to="/modelos" className="hover:text-white transition-colors">Casting</Link></li>
                <li><Link to="/boates" className="hover:text-white transition-colors">Parceiros</Link></li>
                <li><Link to="/landing" className="hover:text-white transition-colors">Seja uma Acompanhante</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-red">Contato Rápido</h3>
              <ul className="space-y-4 text-sm text-zinc-400">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-red shrink-0" />
                  <span>Maj Ouríques nº 1117 Centro<br/>Cachoeira do Sul - RS</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-red shrink-0" />
                  <span>(48) 913057999</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-red shrink-0" />
                  <span>agenciamorenabruta@gmail.com</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-brand-red">Discrição</h3>
              <p className="text-zinc-400 text-xs mb-4">
                Garantimos sigilo absoluto em todas as interações. Atendimento exclusivo para maiores de 18 anos.
              </p>
              <div className="flex items-center gap-2 text-zinc-500 text-xs border border-zinc-800 p-3 rounded bg-black/20">
                <Lock size={14} className="text-brand-red" />
                <span>Site 100% Seguro e Discreto</span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
            <p>&copy; 2024 Morena Bruta. Conteúdo Adulto +18.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacidade" className="hover:text-white">Política de Privacidade</Link>
              <Link to="#" className="hover:text-white">Termos de Serviço</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};