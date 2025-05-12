
import Icon from "@/components/ui/icon";

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

export default SocialLink;
