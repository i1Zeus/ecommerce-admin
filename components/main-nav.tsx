"use client";

import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathName = usePathname();
  const params = useParams();
  const routes = [
    {
      herf: `/${params.storeId}`,
      label: "Settings",
      active: pathName === `/${params.storeId}/settings`,
    },
  ];

  return (
    <nav
      className={(cn("flex items-center space-x-4 lg:space-x-6"), className)}
    >
      {routes.map((route) => (
        <a
          key={route.herf}
          href={route.herf}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          Settings
        </a>
      ))}
    </nav>
  );
}
