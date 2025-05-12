
import { useInView } from "@/hooks/use-in-view";

interface GallerySectionProps {
  className?: string;
}

const GallerySection: React.FC<GallerySectionProps> = ({ className }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  const studioImages = [
    {
      src: "https://images.unsplash.com/photo-1588421357574-87938a86fa28?q=80&w=600",
      alt: "Рабочее место тату-мастера"
    },
    {
      src: "https://images.unsplash.com/photo-1598016670108-4c450fb089b4?q=80&w=600",
      alt: "Интерьер тату-студии"
    },
    {
      src: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?q=80&w=600",
      alt: "Оборудование для татуировок"
    },
    {
      src: "https://images.unsplash.com/photo-1585644198921-8770ef3b6a10?q=80&w=600",
      alt: "Зона ожидания"
    }
  ];

  return (
    <div 
      className={`mt-12 ${className}`}
      ref={ref}
    >
      <h3 className="text-xl font-bold text-white mb-6 text-center">Галерея студии</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {studioImages.map((image, index) => (
          <div 
            key={index}
            className={`overflow-hidden rounded-lg border border-accent-purple/20 transition-all duration-700 delay-${index * 100} 
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-neutral-gray">
          Приходите к нам, чтобы увидеть нашу студию лично и обсудить ваш будущий проект!
        </p>
      </div>
    </div>
  );
};

export default GallerySection;
