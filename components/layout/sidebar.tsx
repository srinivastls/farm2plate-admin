"use client";

import {
  LayoutDashboard,
  Package,
  Warehouse,
  ShoppingCart,
  Users,
  Tractor,
  FolderTree,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r bg-white">

      <div className="border-b p-6">

        <h1 className="text-3xl font-bold text-green-700">
          FarmPlate
        </h1>

        <p className="text-sm text-gray-500">
          Admin Portal
        </p>

      </div>

      <div className="flex-1 space-y-2 p-4">

        <SidebarItem
          href="/dashboard"
          title="Dashboard"
          icon={LayoutDashboard}
        />

        <SidebarItem
          href="/products"
          title="Products"
          icon={Package}
        />

        <SidebarItem
          href="/inventory"
          title="Inventory"
          icon={Warehouse}
        />

        <SidebarItem
          href="/orders"
          title="Orders"
          icon={ShoppingCart}
        />

        <SidebarItem
          href="/customers"
          title="Customers"
          icon={Users}
        />

        <SidebarItem
          href="/farms"
          title="Farms"
          icon={Tractor}
        />

        <SidebarItem
          href="/categories"
          title="Categories"
          icon={FolderTree}
        />

        <SidebarItem
          href="/analytics"
          title="Analytics"
          icon={BarChart3}
        />

        <SidebarItem
          href="/settings"
          title="Settings"
          icon={Settings}
        />

      </div>

      <div className="border-t p-4">

        <button
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>

    </aside>
  );
}