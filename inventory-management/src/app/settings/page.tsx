"use client";

import { Settings, User, Bell, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Settings className="w-7 h-7 text-blue-600" />
        Settings
      </h1>

      <div className="space-y-4">
        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <User className="text-purple-500" />
            <div>
              <h2 className="text-lg font-semibold">Account</h2>
              <p className="text-sm text-muted-foreground">
                Update profile, email, and password
              </p>
            </div>
          </div>
        </div>

        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <Bell className="text-yellow-500" />
            <div>
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-sm text-muted-foreground">
                Manage notification preferences
              </p>
            </div>
          </div>
        </div>

        <div className="card p-4 rounded shadow bg-white dark:bg-gray-900">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-green-500" />
            <div>
              <h2 className="text-lg font-semibold">Security</h2>
              <p className="text-sm text-muted-foreground">
                Enable 2FA, manage sessions
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
