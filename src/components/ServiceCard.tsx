import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

const ServiceCard = ({ title, description, image, link }: ServiceCardProps) => {
  const Card = (
    <div className="group card-elevated overflow-hidden animate-on-hover">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        {link && (
          <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-4 transition-all">
            Learn More <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (link) {
    return <Link to={link}>{Card}</Link>;
  }

  return Card;
};

export default ServiceCard;
