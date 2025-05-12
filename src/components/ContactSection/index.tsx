
import { useInView } from "@/hooks/use-in-view";
import SectionTitle from "./SectionTitle";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import MapPlaceholder from "./MapPlaceholder";

const ContactSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="contact" className="py-24 bg-dark-bg/90 relative">
      <div className="absolute inset-0 z-0 bg-texture opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <SectionTitle 
          title="Связаться с"
          highlightedText="Нами"
          description="Готовы воплотить свои идеи в реальность? Запишитесь на консультацию или задайте вопрос нашим мастерам."
          isVisible={inView}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={`transition-all duration-700 delay-100 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <ContactForm />
          </div>
          
          <div className={`transition-all duration-700 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <ContactInfo />
            <MapPlaceholder />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
