
import { useInView } from "@/hooks/use-in-view";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const tattooStyles = [
  {
    id: "blackwork",
    name: "Блэкворк",
    image: "https://images.unsplash.com/photo-1590246819883-a92c85a1e1c1?q=80&w=600",
    description: "Стиль, основанный на использовании исключительно черной краски. Характеризуется плотным заполнением, четкими линиями и высоким контрастом.",
    features: [
      "Только черная краска",
      "Высокий контраст",
      "Геометрические формы",
      "Плотное заполнение"
    ]
  },
  {
    id: "realism",
    name: "Реализм",
    image: "https://images.unsplash.com/photo-1568219532044-e219bc0acd63?q=80&w=600",
    description: "Стремление максимально точно воспроизвести реальные объекты, портреты и сцены, создавая эффект фотографического изображения на коже.",
    features: [
      "Фотореалистичность",
      "Детализация",
      "Тонкая работа с тенями",
      "Точная цветопередача"
    ]
  },
  {
    id: "traditional",
    name: "Олдскул",
    image: "https://images.unsplash.com/photo-1573648952795-3dc1857a921d?q=80&w=600",
    description: "Классический американский стиль с жирными контурами, яркими цветами и ограниченной цветовой палитрой. Традиционные мотивы включают розы, черепа, якоря и ласточек.",
    features: [
      "Жирные контуры",
      "Яркие цвета",
      "Классические символы",
      "Минимум полутонов"
    ]
  },
  {
    id: "minimalism",
    name: "Минимализм",
    image: "https://images.unsplash.com/photo-1596566267723-509edda16745?q=80&w=600",
    description: "Простые, лаконичные композиции с минимумом деталей. Часто выполняются тонкими линиями или небольшими участками краски.",
    features: [
      "Тонкие линии",
      "Простые формы",
      "Минимум цветов",
      "Небольшие размеры"
    ]
  }
];

const StylesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="styles" className="py-24 bg-dark-bg relative">
      <div className="absolute inset-0 z-0 bg-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Популярные <span className="text-accent-purple">Стили</span>
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Мы работаем во всех современных стилях татуировки. Выберите стиль, который отражает вашу индивидуальность и эстетические предпочтения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tattooStyles.map((style, index) => (
            <StyleCard 
              key={style.id}
              style={style}
              isVisible={inView}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StyleCardProps {
  style: {
    id: string;
    name: string;
    image: string;
    description: string;
    features: string[];
  };
  isVisible: boolean;
  delay?: number;
}

const StyleCard: React.FC<StyleCardProps> = ({ style, isVisible, delay = 0 }) => {
  return (
    <Card 
      className="overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-700 ease-out" 
      style={{ 
        transitionDelay: `${delay}ms`,
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)'
      }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src={style.image} 
              alt={style.name} 
              className="w-full h-full object-cover aspect-square md:aspect-auto"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h3 className="text-xl font-bold text-white mb-3">{style.name}</h3>
            <p className="text-neutral-gray text-sm mb-4">{style.description}</p>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="features" className="border-neutral-gray/30">
                <AccordionTrigger className="text-accent-purple hover:text-accent-purple/80 text-sm py-2">
                  Особенности стиля
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="list-disc pl-5 text-sm text-neutral-gray">
                    {style.features.map((feature, index) => (
                      <li key={index} className="mb-1">{feature}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StylesSection;
