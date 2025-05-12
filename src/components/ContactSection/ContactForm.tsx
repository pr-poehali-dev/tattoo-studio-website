
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface ContactFormProps {
  className?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className }) => {
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
    <div className={`bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 ${className}`}>
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
  );
};

export default ContactForm;
