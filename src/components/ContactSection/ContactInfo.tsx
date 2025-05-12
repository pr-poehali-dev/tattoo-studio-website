
import ContactItem from "./ContactItem";
import SocialLink from "./SocialLink";

interface ContactInfoProps {
  className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ className }) => {
  return (
    <div className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 ${className}`}>
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
  );
};

export default ContactInfo;
