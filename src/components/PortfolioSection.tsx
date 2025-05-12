import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";

// Portfolio gallery images - обновлены на фотографии татуировок
const portfolioItems = [
  {
    category: "blackwork",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600",
      "https://images.unsplash.com/photo-1566275529824-cca6d008f3da?q=80&w=600",
      "https://images.unsplash.com/photo-1580500325848-0c3fafc6d71c?q=80&w=600",
    ],
  },
  {
    category: "colorful",
    images: [
      "https://images.unsplash.com/photo-1576959635882-33f5c78cee7e?q=80&w=600",
      "https://images.unsplash.com/photo-1524654458049-e36be0721fa2?q=80&w=600",
      "https://images.unsplash.com/photo-1543505298-b8be9b52a21a?q=80&w=600",
    ],
  },
  {
    category: "minimalism",
    images: [
      "https://images.unsplash.com/photo-1526304760382-3591d3840148?q=80&w=600",
      "https://images.unsplash.com/photo-1571232542551-4865885fb721?q=80&w=600",
      "https://images.unsplash.com/photo-1571646034647-0e2986f0a200?q=80&w=600",
    ],
  },
  {
    category: "oldschool",
    images: [
      "https://images.unsplash.com/photo-1565058379802-bbe93b73f0f0?q=80&w=600",
      "https://images.unsplash.com/photo-1562962230-16e3cf205231?q=80&w=600",
      "https://images.unsplash.com/photo-1584155828125-55f90f34d2b2?q=80&w=600",
    ],
  },
];

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("blackwork");
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section
      id="portfolio"
      className="py-24 bg-dark-bg relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 z-0 bg-texture opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Наши <span className="text-accent-purple">Работы</span>
          </h2>
          <p className="text-neutral-gray max-w-2xl mx-auto">
            Каждая татуировка — произведение искусства, созданное с учетом ваших
            пожеланий. Ознакомьтесь с нашим портфолио и вдохновитесь на
            собственный уникальный дизайн.
          </p>
        </div>

        <Tabs
          defaultValue="blackwork"
          value={activeCategory}
          onValueChange={setActiveCategory}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-card/50 backdrop-blur-md">
              <TabsTrigger value="blackwork">Блэкворк</TabsTrigger>
              <TabsTrigger value="colorful">Цветные</TabsTrigger>
              <TabsTrigger value="minimalism">Минимализм</TabsTrigger>
              <TabsTrigger value="oldschool">Олдскул</TabsTrigger>
            </TabsList>
          </div>

          {portfolioItems.map((category) => (
            <TabsContent key={category.category} value={category.category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, index) => (
                  <PortfolioCard
                    key={`${category.category}-${index}`}
                    image={image}
                    isVisible={inView}
                    delay={index * 100}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button
            variant="outline"
            className="border-accent-purple text-accent-purple hover:bg-accent-purple/10"
          >
            Смотреть больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  image: string;
  isVisible: boolean;
  delay?: number;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  image,
  isVisible,
  delay = 0,
}) => {
  return (
    <Card
      className={`overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-700 delay-[${delay}ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <CardContent className="p-0">
        <div className="relative group overflow-hidden">
          <img
            src={image}
            alt="Пример татуировки"
            className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              <Button
                variant="outline"
                size="sm"
                className="w-full bg-black/50 border-white/30 text-white"
              >
                Подробнее
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PortfolioSection;
