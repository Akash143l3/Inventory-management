"use client";

import { useState } from "react";
import Link from "next/link";
import { Bell, Search, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600">
                InventoryPro
              </Link>
            </div>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 form-input w-64"
              />
            </div>

            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100">
              <Bell className="h-5 w-5" />
            </button>

            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              <span className="font-medium text-sm">AD</span>
            </div>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Dashboard
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Products
            </Link>
            <Link
              href="/inventory"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Inventory
            </Link>
            <Link
              href="/orders"
              className="block px-3 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800"
            >
              Orders
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
