"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function DashboardPage() {
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: "/login" });
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <div className="space-y-4">
          <div>]</div>
          <div>
            <p className="text-gray-600">Status:</p>
            <p className="font-medium text-green-600">Active</p>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Actions</h3>
        <button
          onClick={handleSignOut}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}
