
import { useInView } from "@/hooks/use-in-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Tooltip,
  TooltipContent,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import Icon from "@/components/ui/icon";

const masters = [
  {
    id: 1,
    name: "Александр",
    role: "Главный мастер",
    specialty: "Блэкворк, реализм",
    experience: "8 лет",
    avatar: "https://images.unsplash.com/photo-1531891570158-e71b35a485bc?q=80&w=800",
    social: {
      instagram: "#",
      vk: "#"
    }
  },
  {
    id: 2,
    name: "Елена",
    role: "Старший мастер",
    specialty: "Цветная татуировка, акварель",
    experience: "6 лет",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800",
    social: {
      instagram: "#",
      vk: "#"
    }
  },
  {
    id: 3,
    name: "Михаил",
    role: "Мастер",
    specialty: "Олдскул, минимализм",
    experience: "5 лет",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    social: {
      instagram: "#",
      vk: "#"
    }
  }
];

const MastersSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="masters" className="py-24 bg-dark-bg/70 relative">
      <div className="absolute inset-0 z-0 bg-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши <span className="text-accent-purple">Мастера</span>
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Команда профессионалов с богатым опытом. Каждый мастер специализируется на определенных стилях и техниках.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {masters.map((master, index) => (
            <MasterCard 
              key={master.id} 
              master={master} 
              isVisible={inView} 
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface MasterCardProps {
  master: {
    name: string;
    role: string;
    specialty: string;
    experience: string;
    avatar: string;
    social: {
      instagram: string;
      vk: string;
    }
  };
  isVisible: boolean;
  delay?: number;
}

const MasterCard: React.FC<MasterCardProps> = ({ master, isVisible, delay = 0 }) => {
  return (
    <Card className={`bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-700 ease-out`} 
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-6">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/30 to-accent-purple/50 rounded-full blur-md"></div>
            <Avatar className="h-32 w-32 border-2 border-accent-purple">
              <AvatarImage src={master.avatar} alt={master.name} />
              <AvatarFallback className="bg-accent-purple/20 text-xl">
                {master.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-1">{master.name}</h3>
          <p className="text-accent-purple font-medium mb-3">{master.role}</p>
          
          <div className="w-full mb-4">
            <div className="flex items-center mb-2">
              <Icon name="Palette" className="mr-2 text-neutral-gray" size={16} />
              <span className="text-neutral-gray text-sm">{master.specialty}</span>
            </div>
            <div className="flex items-center">
              <Icon name="Clock" className="mr-2 text-neutral-gray" size={16} />
              <span className="text-neutral-gray text-sm">Опыт: {master.experience}</span>
            </div>
          </div>
          
          <div className="flex space-x-3 mt-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href={master.social.instagram} 
                  className="text-neutral-gray hover:text-accent-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="Instagram" size={20} />
                </a>
              </TooltipTrigger>
              <TooltipContent>Instagram</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <a 
                  href={master.social.vk} 
                  className="text-neutral-gray hover:text-accent-purple transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="h-5 w-5 flex items-center justify-center">VK</div>
                </a>
              </TooltipTrigger>
              <TooltipContent>ВКонтакте</TooltipContent>
            </Tooltip>
            
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-neutral-gray hover:text-accent-purple transition-colors">
                  <Icon name="Calendar" size={20} />
                </button>
              </TooltipTrigger>
              <TooltipContent>Записаться</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MastersSection;
