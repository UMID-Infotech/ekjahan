"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import "@/components/navigation/footer-navigation.css";

import { Home, ShieldCheck, BriefcaseBusiness, Menu } from "lucide-react";

const FooterNavigation = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={22} /> },
    { name: "Warranty", path: "/warranty", icon: <ShieldCheck size={22} /> },
    { name: "Career", path: "/career", icon: <BriefcaseBusiness size={22} /> },
    { name: "Menu", path: "/menu", icon: <Menu size={22} /> },
  ];

  return (
    <div className="footer-nav-container fixed bottom-0 left-0 w-full bg-white shadow-t-md flex justify-around items-center py-2 border-t border-gray-200 z-50">

      {navItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.name}
            href={item.path}
            className="flex flex-col items-center justify-center relative"
          >
            {/* ACTIVE BUBBLE ICON */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-[#eb5a25] text-white p-3 rounded-full shadow-md -translate-y-3"
                  : "text-gray-500"
              }`}
            >
              <div className="text-xl">{item.icon}</div>
            </div>

            {/* LABEL TEXT */}
            <span
              className={`mt-1 mb-2 text-xs font-medium ${
                isActive ? "text-[#eb5a25]" : "text-gray-500"
              }`}
            >
              {item.name}
            </span>

            {/* UNDERLINE */}
            {isActive && (
              <div className="absolute bottom-0 h-[3px] w-8 bg-[#eb5a25] rounded-full"></div>
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default FooterNavigation;
