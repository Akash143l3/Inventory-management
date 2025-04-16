"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Database,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const navigation = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Inventory", href: "/inventory", icon: Database },
    { name: "Orders", href: "/orders", icon: ShoppingCart },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  return (
    <aside
      className={`bg-white shadow-sm ${
        collapsed ? "w-20" : "w-64"
      } transition-all duration-300 hidden md:block`}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center justify-end p-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>

        <nav className="flex-1 space-y-1 px-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  flex items-center px-3 py-2 rounded-md text-sm font-medium
                  ${
                    isActive
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-800"
                  }
                `}
              >
                <item.icon
                  className={`${
                    collapsed ? "mx-auto" : "mr-3"
                  } h-5 w-5 flex-shrink-0`}
                />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
