import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-dark-bg bg-texture flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-[100px]" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div
            className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">
              <span className="text-accent-purple ink-effect inline-block pr-2">
                Искусство
              </span>{" "}
              на
              <span className="text-accent-purple ink-effect inline-block pl-2">
                твоей коже
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-gray mb-8 max-w-xl mx-auto lg:mx-0">
              Тату студия ChernilnyyStyle – это профессиональные мастера,
              современное оборудование и индивидуальный подход к каждому
              клиенту.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-accent-purple hover:bg-accent-purple/80 gap-2"
              >
                <span>Записаться</span>
                <Icon name="CalendarPlus" size={18} />
              </Button>
              <Button variant="outline" size="lg" className="gap-2">
                <span>Портфолио</span>
                <Icon name="Image" size={18} />
              </Button>
            </div>
          </div>

          <div
            className={`flex-1 transition-all duration-1000 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-64 h-64 border-2 border-accent-purple/30 rounded-lg" />
              <img
                src="https://images.unsplash.com/photo-1613470524842-4a504761e56c?q=80&w=1000"
                alt="Тату мастер за работой"
                className="w-full h-auto rounded-lg object-cover shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent-purple/30 rounded-full" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/50 animate-pulseLight">
          <Icon name="ChevronDown" size={32} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
