import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Testimonials from "./components/Testimonials";
import { FloatingNav } from "./components/ui/floating-navbar";
import Footer from "./components/Footer";
import { 
  IconHome, 
  IconUser, 
  IconMap2,      // para Journey (mapa o ruta)
  IconDeviceLaptop, // para Stack (tecnologías)
  IconFolderOpen, // para Projects (proyectos)
  IconMail       // para Contact (contacto)
} from "@tabler/icons-react";
import { JSX } from "react";
import { getTranslations } from 'next-intl/server';

export interface NavItem {
  name: string;
  link: string;
  icon?: JSX.Element;
}
const getNavItems = async () => {
  const t = await getTranslations();
  
  return [
    {
      name: t('NavBar.Home'),
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('NavBar.About'),
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('NavBar.Experience'),
      link: "#experience",
      icon: <IconMap2 className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('NavBar.Stack'),
      link: "#stack",
      icon: <IconDeviceLaptop className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('NavBar.Projects'),
      link: "#testimonials",
      icon: <IconFolderOpen className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: t('NavBar.Contact'),
      link: "#contact",
      icon: <IconMail className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
}

export default async function Home() {
  const navItems: NavItem[] = await getNavItems();

  return (
    <main className="bg-white dark:bg-black flex justify-center items-center mx-auto px-5 sm:px-10">
      <div className=" w-full">
        <FloatingNav navItems={navItems} />
        
        <Hero/>
        <About/>
        <Experience/>
        <Stack/>
        <Testimonials/>
        <Contact/>
        <Footer/>
      </div>
    </main> 
  );
}