"use client";

import { useState } from "react";
import { Search, User, ShoppingCart } from "lucide-react";

export default function CustomersPage() {
  // In a real app, you would fetch customers from an API
  // For this example, we'll use mock data
  const mockCustomers = [
    {
      CustomerID: 1,
      CustomerName: "John Doe",
      Email: "john@example.com",
      Phone: "555-123-4567",
      OrderCount: 5,
    },
    {
      CustomerID: 2,
      CustomerName: "Jane Smith",
      Email: "jane@example.com",
      Phone: "555-765-4321",
      OrderCount: 3,
    },
    {
      CustomerID: 3,
      CustomerName: "Bob Johnson",
      Email: "bob@example.com",
      Phone: "555-987-6543",
      OrderCount: 7,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCustomers = mockCustomers.filter(
    (customer) =>
      customer.CustomerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.Email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-6 py-12 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-gray-900">Customers</h1>
      </div>

      <div className="flex items-center bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 w-full max-w-md">
        <Search className="h-5 w-5 text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search customers..."
          className="w-full py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto bg-white rounded-lg shadow-lg p-4">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Customer
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Email
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Phone
              </th>
              <th className="py-3 px-4 text-left text-sm font-semibold text-gray-700">
                Orders
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr
                key={customer.CustomerID}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-4 flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-5 w-5 text-gray-500" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">
                      {customer.CustomerName}
                    </p>
                    <p className="text-xs text-gray-500">
                      ID: {customer.CustomerID}
                    </p>
                  </div>
                </td>
                <td className="py-4 px-4 text-sm text-gray-700">
                  {customer.Email}
                </td>
                <td className="py-4 px-4 text-sm text-gray-700">
                  {customer.Phone}
                </td>
                <td className="py-4 px-4 text-sm text-gray-700">
                  <div className="flex items-center">
                    <ShoppingCart className="h-4 w-4 text-gray-500 mr-2" />
                    <span>{customer.OrderCount}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
