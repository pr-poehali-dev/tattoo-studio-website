
import Logo from "@/components/Logo";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-bg relative pt-16 pb-8">
      <div className="absolute inset-0 z-0 bg-texture opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Logo className="mb-4" />
            <p className="text-neutral-gray text-sm mb-4">
              Профессиональная тату студия с опытными мастерами и современным оборудованием. Создаем уникальные дизайны для ваших идей.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-gray hover:text-accent-purple transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-neutral-gray hover:text-accent-purple transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-neutral-gray hover:text-accent-purple transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <FooterLink href="/">Главная</FooterLink>
              <FooterLink href="#portfolio">Портфолио</FooterLink>
              <FooterLink href="#masters">Мастера</FooterLink>
              <FooterLink href="#styles">Стили</FooterLink>
              <FooterLink href="#contact">Контакты</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <FooterLink href="#">Художественная татуировка</FooterLink>
              <FooterLink href="#">Перекрытие старых тату</FooterLink>
              <FooterLink href="#">Разработка эскизов</FooterLink>
              <FooterLink href="#">Консультации</FooterLink>
              <FooterLink href="#">Коррекция</FooterLink>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="text-neutral-gray text-sm flex">
                <Icon name="MapPin" className="mr-2 shrink-0 mt-0.5" size={16} />
                <span>г. Москва, ул. Художников, 42</span>
              </li>
              <li className="text-neutral-gray text-sm flex">
                <Icon name="Phone" className="mr-2 shrink-0 mt-0.5" size={16} />
                <span>+7 (999) 123-45-67</span>
              </li>
              <li className="text-neutral-gray text-sm flex">
                <Icon name="Mail" className="mr-2 shrink-0 mt-0.5" size={16} />
                <span>info@chernilnyystyle.ru</span>
              </li>
              <li className="text-neutral-gray text-sm flex">
                <Icon name="Clock" className="mr-2 shrink-0 mt-0.5" size={16} />
                <span>Пн-Вс: 10:00 - 22:00</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="bg-neutral-gray/20" />
        
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-neutral-gray text-sm">
          <p>© {currentYear} ChernilnyyStyle. Все права защищены.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-accent-purple transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-accent-purple transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-neutral-gray text-sm hover:text-accent-purple transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
