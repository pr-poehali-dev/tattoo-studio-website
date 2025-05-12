
interface SectionTitleProps {
  title: string;
  highlightedText: string;
  description: string;
  isVisible: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  highlightedText, 
  description, 
  isVisible 
}) => {
  return (
    <div className={`text-center mb-16 transition-all duration-700 ${
      isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'
    }`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title} <span className="text-accent-purple">{highlightedText}</span>
      </h2>
      <p className="text-neutral-gray max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
