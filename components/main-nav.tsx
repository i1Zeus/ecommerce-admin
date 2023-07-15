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
      label: "Overview",
      active: pathName === `/${params.storeId}`,
    },
    {
      herf: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathName === `/${params.storeId}/billboards`,
    },
    {
      herf: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathName === `/${params.storeId}/categories`,
    },
    {
      herf: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathName === `/${params.storeId}/sizes`,
    },
    {
      herf: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathName === `/${params.storeId}/colors`,
    },
    {
      herf: `/${params.storeId}/settings`,
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
            "text-sm font-semibold px-2 transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </a>
      ))}
    </nav>
  );
}
