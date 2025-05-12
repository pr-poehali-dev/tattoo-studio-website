
import Icon from "@/components/ui/icon";

interface ContactItemProps {
  icon: string;
  title: string;
  content: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, content }) => {
  return (
    <div className="flex items-start">
      <div className="mt-1">
        <div className="w-8 h-8 rounded-full bg-accent-purple/20 flex items-center justify-center">
          <Icon name={icon} size={16} className="text-accent-purple" />
        </div>
      </div>
      <div className="ml-4">
        <h4 className="font-medium text-white">{title}</h4>
        <p className="text-neutral-gray">{content}</p>
      </div>
    </div>
  );
};

export default ContactItem;
