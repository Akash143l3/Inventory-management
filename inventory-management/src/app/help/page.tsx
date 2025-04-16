"use client";

import { HelpCircle, MessageSquareText, Mail, Info } from "lucide-react";

export default function HelpPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <HelpCircle className="w-7 h-7 text-blue-600" />
        Help & Support
      </h1>

      <div className="space-y-4">
        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <Info className="text-blue-500" />
            <div>
              <h2 className="text-lg font-semibold">Getting Started</h2>
              <p className="text-sm text-muted-foreground">
                Learn how to use the platform
              </p>
            </div>
          </div>
        </div>

        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <MessageSquareText className="text-purple-500" />
            <div>
              <h2 className="text-lg font-semibold">FAQs</h2>
              <p className="text-sm text-muted-foreground">
                Browse frequently asked questions
              </p>
            </div>
          </div>
        </div>

        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <Mail className="text-green-500" />
            <div>
              <h2 className="text-lg font-semibold">Contact Support</h2>
              <p className="text-sm text-muted-foreground">
                Email us or raise a support ticket
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
