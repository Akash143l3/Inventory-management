import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inventory Management System",
  description: "A complete system for managing products, inventory, and orders",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-6 bg-gray-50">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
