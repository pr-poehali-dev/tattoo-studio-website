
import { useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // В реальном проекте здесь был бы код для отправки формы
    alert('Форма отправлена! В реальном проекте здесь был бы запрос к серверу.');
    setFormState({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg/90 relative">
      <div className="absolute inset-0 z-0 bg-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Связаться с <span className="text-accent-purple">Нами</span>
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Готовы воплотить свои идеи в реальность? Запишитесь на консультацию или задайте вопрос нашим мастерам.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">Запишитесь на консультацию</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Ваше имя</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      className="bg-dark-bg border-border/50 focus-visible:ring-accent-purple"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Номер телефона</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className="bg-dark-bg border-border/50 focus-visible:ring-accent-purple"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      className="bg-dark-bg border-border/50 focus-visible:ring-accent-purple resize-none min-h-[120px]"
                      placeholder="Опишите желаемую татуировку или задайте вопрос"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent-purple hover:bg-accent-purple/80"
                  >
                    Отправить заявку
                  </Button>
                </div>
              </form>
            </div>
          </div>
          
          <div 
            className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8">
              <h3 className="text-xl font-bold text-white mb-6">Контактная информация</h3>
              
              <div className="space-y-6">
                <ContactItem 
                  icon="MapPin" 
                  title="Адрес"
                  content="г. Москва, ул. Художников, 42"
                />
                
                <ContactItem 
                  icon="Phone" 
                  title="Телефон"
                  content="+7 (999) 123-45-67"
                />
                
                <ContactItem 
                  icon="Mail" 
                  title="Email"
                  content="info@chernilnyystyle.ru"
                />
                
                <ContactItem 
                  icon="Clock" 
                  title="Режим работы"
                  content="Пн-Вс: 10:00 - 22:00"
                />
                
                <div>
                  <h4 className="font-medium text-white mb-3">Социальные сети</h4>
                  <div className="flex space-x-4">
                    <SocialLink icon="Instagram" href="#" label="Instagram" />
                    <SocialLink icon="Facebook" href="#" label="Facebook" />
                    <SocialLink icon="MessageCircle" href="#" label="Telegram" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-2 rounded-lg overflow-hidden bg-card/30">
              <div className="rounded-lg overflow-hidden h-[300px]">
                {/* В реальном проекте здесь можно было бы встроить карту с API Яндекс или Google */}
                <div className="w-full h-full bg-card flex items-center justify-center text-neutral-gray">
                  <p className="text-sm">
                    Здесь будет карта с расположением студии<br />
                    <span className="text-xs">(API карт будет интегрирован в продакшене)</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1">
        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
          <Icon name={icon} size={16} className="text-accent-purple" />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-neutral-gray">{content}</p>
      </div>
    </div>
  );
};

interface SocialLinkProps {
  icon: string;
  href: string;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-accent-purple/20 flex items-center justify-center hover:bg-accent-purple/30 transition-colors"
    >
      <Icon name={icon} size={18} className="text-accent-purple" />
    </a>
  );
};

export default ContactSection;
