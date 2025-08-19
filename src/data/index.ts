import type { TSection, TService, TTeam } from "../types";

export const sectionsData: TSection[] = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "our-team",
    label: "Our Team",
  },
  {
    id: "about-us",
    label: "About Us",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

export const servicesData: TService[] = [
  {
    title: "Digital Strategy",
    desc: "Strategic digital transformation and innovation consulting that propels your business into the future with data-driven insights",
    icon: "⚡",
  },
  {
    title: "Web Development",
    desc: "Modern, responsive websites and applications built with cutting-edge technology and optimized for performance",
    icon: "💻",
  },
  {
    title: "Mobile Solutions",
    desc: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices",
    icon: "📱",
  },
  {
    title: "UI/UX Design",
    desc: "Intuitive and beautiful interface design that puts users at the center of every interaction and experience",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    desc: "Lightning-fast solutions optimized for speed, efficiency, and seamless user experiences that exceed expectations",
    icon: "⚡",
  },
  {
    title: "Technical Consulting",
    desc: "Expert guidance on technology choices, architecture decisions, and implementation strategies for complex projects",
    icon: "🛠️",
  },
];

export const teamData: TTeam[] = [
  {
    name: "Pratish Joshi",
    role: "Founder & CEO",
    avatar: "👨‍💻",
  },
  {
    name: "Shrishak Bhattarai",
    role: "Founder & CTO",
    avatar: "👩‍💼",
  },
  {
    name: "Nikesh Nakarmi",
    role: "Founder & COO",
    avatar: "👨‍🎨",
  },
];
