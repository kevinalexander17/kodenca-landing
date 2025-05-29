import { 
  Code2, 
  Smartphone, 
  ShoppingCart, 
  Database, 
  LineChart, 
  Users,
  Shield,
  Zap,
  ArrowRight,
  Send,
  Calendar,
  Clock,
  Info,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  CheckCircle,
  AlertCircle,
  Star,
  Award,
  Target,
  TrendingUp,
  Globe
} from 'lucide-react';

export const Icons = {
  // Servicios
  Code2,
  Smartphone,
  ShoppingCart,
  Database,
  LineChart,
  Users,
  Shield,
  Zap,
  Globe,
  
  // Navegación y acciones
  ArrowRight,
  Send,
  Calendar,
  Clock,
  Info,
  CheckCircle,
  AlertCircle,
  
  // Contacto y redes sociales
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  
  // Métricas y logros
  Star,
  Award,
  Target,
  TrendingUp
} as const;

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export function Icon({ name, className = "w-5 h-5", size }: IconProps) {
  const IconComponent = Icons[name];
  return <IconComponent className={className} size={size} />;
} 