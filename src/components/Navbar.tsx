
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-dark-bg/90 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/">Главная</NavLink>
          <NavLink href="#portfolio">Портфолио</NavLink>
          <NavLink href="#masters">Мастера</NavLink>
          <NavLink href="#styles">Стили</NavLink>
          <NavLink href="#contact">Контакты</NavLink>
          <Button className="animate-pulse bg-accent-purple hover:bg-accent-purple/80">
            Записаться
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-bg/95 backdrop-blur-md animate-fadeIn">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </MobileNavLink>
            <MobileNavLink 
              href="#portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Портфолио
            </MobileNavLink>
            <MobileNavLink 
              href="#masters" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Мастера
            </MobileNavLink>
            <MobileNavLink 
              href="#styles" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Стили
            </MobileNavLink>
            <MobileNavLink 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Контакты
            </MobileNavLink>
            <Button className="w-full bg-accent-purple hover:bg-accent-purple/80">
              Записаться
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <Link
    to={href}
    className="text-white/80 hover:text-accent-purple transition-colors duration-200 font-medium"
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick?: () => void;
}

const MobileNavLink: React.FC<MobileNavLinkProps> = ({ href, children, onClick }) => (
  <Link
    to={href}
    className="text-white/80 hover:text-accent-purple py-2 text-lg transition-colors duration-200 font-medium"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
