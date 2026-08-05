"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface Props {
  href: string;
  title: string;
  icon: LucideIcon;
}

export default function SidebarItem({
  href,
  title,
  icon: Icon,
}: Props) {
  const pathname = usePathname();

  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 rounded-lg px-4 py-3 transition

      ${
        active
          ? "bg-green-600 text-white"
          : "text-gray-700 hover:bg-green-50"
      }`}
    >
      <Icon size={20} />

      <span>{title}</span>
    </Link>
  );
}