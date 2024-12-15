//Convention => export with an upper case letter.

import { Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export const NavLinks: { id: number; title: string; route: string }[] = [
  {
    id: 0,
    title: "Home",
    route: "/",
  },
  {
    id: 1,
    title: "Services",
    route: "/our-services",
  },
  {
    id: 2,
    title: "Work",
    route: "/work",
  },
  {
    id: 3,
    title: "Approach",
    route: "/approach",
  },
  {
    id: 4,
    title: "About",
    route: "/about",
  },
  {
    id: 5,
    title: "Blog",
    route: "/blog",
  },
];

export const ContactData: {
  key: number;
  method: string;
  description: string;
  icon: any;
  detail: string;
}[] = [
  {
    key: 1,
    method: "Call Us",
    description: "Reach out to us and take the first steps",
    icon: <Phone className="h-4 w-4" />,
    detail: "+256 761 074816",
  },
  {
    key: 2,
    method: "Direct Email",
    description: "For inquiries about web and app development",
    icon: <Mail className="h-4 w-4" />,
    detail: "xapisoft@gmail.com",
  },
  {
    key: 3,
    method: "Live Chat",
    description: "Connect with us on WhatsApp for quick convinient support.",
    icon: <FaWhatsapp className="h-4 w-4" />,
    detail: "+256 761 074816",
  },
  {
    key: 4,
    method: "Visit Us",
    description: "We are here to how you how easy and affordable it is to go",
    icon: <MapPin className="h-4 w-4" />,
    detail: "Kira",
  },
];

export const RetailSolutions: {
  key: number;
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    key: 1,
    icon: "/icons/branding-and-design.png",
    title: "Creative design and branding",
    description:
      "We create brand identities that stand out, from logos to visuals that communicate your story and connect with your audience.",
  },
  {
    key: 2,
    icon: "/icons/website-design-and-development.png",
    title: "Website design and development",
    description:
      "We design and develop custom websites and web apps that look great and work seamlessly on all devices.",
  },
  {
    key: 3,
    icon: "/icons/custom-software-development.png",
    title: "Custom Software development",
    description:
      "We develop tailored software solutions designed to meet the specific needs of your business.",
  },
  {
    key: 4,
    icon: "/icons/application-development.png",
    title: "Mobile application development",
    description:
      "We design and build applications that simplify complex processes, improve productivity, and help your business grow.",
  },
];
