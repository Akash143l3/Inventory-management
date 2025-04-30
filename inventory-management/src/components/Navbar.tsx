"use client";

import { useState, useEffect, MouseEvent, KeyboardEvent, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  Search,
  Menu,
  X,
  LayoutDashboard,
  Package,
  Database,
  ShoppingCart,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";

// Define the navigation item type
interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Navbar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<NavigationItem[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [activeResultIndex, setActiveResultIndex] = useState(-1);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);

  const navigation: NavigationItem[] = [
    { name: "Dashboard", href: "/", icon: LayoutDashboard },
    { name: "Products", href: "/products", icon: Package },
    { name: "Inventory", href: "/inventory", icon: Database },
    { name: "Orders", href: "/orders", icon: ShoppingCart },
    { name: "Customers", href: "/customers", icon: Users },
    { name: "Reports", href: "/reports", icon: BarChart2 },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Help", href: "/help", icon: HelpCircle },
  ];

  // Navigate to the selected page
  const navigateTo = (href: string) => {
    router.push(href);
    setSearchTerm("");
    setShowResults(false);
    setIsMenuOpen(false);

    // Remove focus from search input
    if (searchInputRef.current) {
      searchInputRef.current.blur();
    }
  };

  // Handle selecting a search result with keyboard or click
  const handleSelectResult = (item: NavigationItem) => {
    navigateTo(item.href);
  };

  // Filter navigation items based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchResults([]);
      setShowResults(false);
      setActiveResultIndex(-1);
      return;
    }

    const filtered = navigation.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filtered);
    setShowResults(filtered.length > 0);
    setActiveResultIndex(filtered.length > 0 ? 0 : -1);
  }, [searchTerm]);

  // Handle keyboard navigation in search results
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!showResults) return;

    // Enter key - select current result
    if (e.key === "Enter") {
      e.preventDefault();
      if (activeResultIndex >= 0 && activeResultIndex < searchResults.length) {
        handleSelectResult(searchResults[activeResultIndex]);
      } else if (searchResults.length === 1) {
        // If there's only one result, select it even if none is active
        handleSelectResult(searchResults[0]);
      } else if (searchResults.length > 0) {
        // If there are results but none selected, select the first one
        handleSelectResult(searchResults[0]);
      }
    }

    // Arrow down - move to next result
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveResultIndex((prevIndex) =>
        prevIndex < searchResults.length - 1 ? prevIndex + 1 : 0
      );
    }

    // Arrow up - move to previous result
    else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveResultIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : searchResults.length - 1
      );
    }

    // Escape - close search results
    else if (e.key === "Escape") {
      setShowResults(false);
      if (searchInputRef.current) {
        searchInputRef.current.blur();
      }
    }
  };

  // Scroll active item into view
  useEffect(() => {
    if (activeResultIndex >= 0 && searchResultsRef.current) {
      const activeElement = searchResultsRef.current.querySelector(
        `[data-index="${activeResultIndex}"]`
      );
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }, [activeResultIndex]);

  // Handle click outside to close search results
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | any) => {
      const target = event.target as Node;
      if (
        target &&
        searchInputRef.current &&
        searchResultsRef.current &&
        !searchInputRef.current.contains(target) &&
        !searchResultsRef.current.contains(target)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // If there's an exact match when typing, highlight that option
  useEffect(() => {
    if (searchTerm && searchResults.length > 0) {
      const exactMatchIndex = searchResults.findIndex(
        (item) => item.name.toLowerCase() === searchTerm.toLowerCase()
      );
      if (exactMatchIndex !== -1) {
        setActiveResultIndex(exactMatchIndex);
      }
    }
  }, [searchResults, searchTerm]);

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
            <div className="relative search-container">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search pages..."
                className="pl-10 py-2 pr-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64 transition-all duration-300 hover:border-blue-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => {
                  if (searchResults.length > 0) setShowResults(true);
                }}
                onKeyDown={handleKeyDown}
                aria-expanded={showResults}
                aria-autocomplete="list"
                aria-controls="search-results"
                role="combobox"
                autoComplete="off"
              />

              {/* Search Results Dropdown */}
              {showResults && searchResults.length > 0 && (
                <div
                  ref={searchResultsRef}
                  id="search-results"
                  className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10 border border-gray-200 overflow-hidden transition-all duration-200 ease-in-out"
                  role="listbox"
                >
                  <ul className="py-1 max-h-64 overflow-auto">
                    {searchResults.map((item, index) => (
                      <li
                        key={item.name}
                        role="option"
                        aria-selected={activeResultIndex === index}
                        data-index={index}
                      >
                        <button
                          className={`w-full text-left flex items-center px-4 py-3 text-sm ${
                            activeResultIndex === index
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700 hover:bg-blue-50"
                          } transition duration-150 ease-in-out`}
                          onClick={() => handleSelectResult(item)}
                          onMouseEnter={() => setActiveResultIndex(index)}
                        >
                          <span
                            className={`flex items-center justify-center h-8 w-8 rounded-md ${
                              activeResultIndex === index
                                ? "bg-blue-200 text-blue-700"
                                : "bg-blue-100 text-blue-600"
                            } mr-3`}
                          >
                            <item.icon className="h-5 w-5" />
                          </span>
                          <span className="font-medium">{item.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <button className="p-2 rounded-full text-gray-500 hover:bg-gray-100 transition duration-150">
              <Bell className="h-5 w-5" />
            </button>

            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-sm">
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
          {/* Mobile Search */}
          <div className="px-4 pt-2 pb-3">
            <div className="relative search-container">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search pages..."
                className="pl-10 py-2 pr-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full transition-all duration-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                aria-expanded={showResults}
                aria-autocomplete="list"
                aria-controls="mobile-search-results"
                role="combobox"
                autoComplete="off"
              />

              {/* Mobile Search Results */}
              {showResults && searchResults.length > 0 && (
                <div
                  id="mobile-search-results"
                  className="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10 border border-gray-200 overflow-hidden"
                  role="listbox"
                >
                  <ul className="py-1 max-h-64 overflow-auto">
                    {searchResults.map((item, index) => (
                      <li
                        key={item.name}
                        role="option"
                        aria-selected={activeResultIndex === index}
                        data-index={index}
                      >
                        <button
                          className={`w-full text-left flex items-center px-4 py-3 text-sm ${
                            activeResultIndex === index
                              ? "bg-blue-100 text-blue-800"
                              : "text-gray-700 hover:bg-blue-50"
                          } transition duration-150 ease-in-out`}
                          onClick={() => handleSelectResult(item)}
                          onMouseEnter={() => setActiveResultIndex(index)}
                        >
                          <span
                            className={`flex items-center justify-center h-8 w-8 rounded-md ${
                              activeResultIndex === index
                                ? "bg-blue-200 text-blue-700"
                                : "bg-blue-100 text-blue-600"
                            } mr-3`}
                          >
                            <item.icon className="h-5 w-5" />
                          </span>
                          <span className="font-medium">{item.name}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="w-full flex items-center px-4 py-2 text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition duration-150"
                onClick={() => navigateTo(item.href)}
              >
                <span className="flex items-center justify-center h-8 w-8 rounded-md bg-gray-100 text-gray-600 mr-3">
                  <item.icon className="h-5 w-5" />
                </span>
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
