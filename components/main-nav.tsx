"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import Icon from "@/components/ui/icon";
import {
  ArrowUpDown,
  BarChart3,
  Package,
  Palette,
  Ruler,
  Settings,
  SquareStack,
  Tv,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.storeId}`,
      label: "Overview",
      active: pathname === `/${params.storeId}`,
      icon: <BarChart3 size={20} />,
      title: "Overview",
    },
    {
      href: `/${params.storeId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.storeId}/billboards`,
      icon: <Tv size={20} />,
      title: "Billboards",
    },
    {
      href: `/${params.storeId}/categories`,
      label: "Categories",
      active: pathname === `/${params.storeId}/categories`,
      icon: <SquareStack size={20} />,
      title: "Categories",
    },
    {
      href: `/${params.storeId}/sizes`,
      label: "Sizes",
      active: pathname === `/${params.storeId}/sizes`,
      icon: <Ruler size={20} />,
      title: "Sizes",
    },
    {
      href: `/${params.storeId}/colors`,
      label: "Colors",
      active: pathname === `/${params.storeId}/colors`,
      icon: <Palette size={20} />,
      title: "Colors",
    },
    {
      href: `/${params.storeId}/products`,
      label: "Products",
      active: pathname === `/${params.storeId}/products`,
      icon: <Package size={20} />,
      title: "Products",
    },
    {
      href: `/${params.storeId}/orders`,
      label: "Orders",
      active: pathname === `/${params.storeId}/orders`,
      icon: <ArrowUpDown size={20} />,
      title: "Orders",
    },
    {
      href: `/${params.storeId}/settings`,
      label: "Settings",
      active: pathname === `/${params.storeId}/settings`,
      icon: <Settings size={20} />,
      title: "Settings",
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <>
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "text-sm font-medium hidden sm:block transition-colors hover:text-primary",
              route.active
                ? "text-black dark:text-white bg-secondary dark:bg-secondary-dark px-3 py-2 rounded-md svg"
                : "text-muted-foreground"
            )}
          >
            <span
              className="flex items-center justify-center gap-x-[6px]"
              title={route.title}
            >
              <Icon icon={route.icon} />
              <span className="hidden lg:block">{route.label}</span>
            </span>
          </Link>
        </>
      ))}
      <span className="block sm:hidden">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium text-sm border">
                Go To
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                {routes.map((route) => (
                  <>
                    <NavigationMenuLink
                      className={cn(
                        "text-sm font-medium flex flex-col gap-2 px-3 py-2 transition-colors hover:text-primary",
                        route.active
                          ? "text-black font-semibold dark:text-white bg-secondary dark:bg-secondary-dark px-3 py-2 rounded-md svg"
                          : "text-muted-foreground"
                      )}
                      href={route.href}
                      active={route.active}
                    >
                      <span
                        className="flex items-center justify-start gap-x-2"
                        title={route.title}
                      >
                        <Icon icon={route.icon} />
                        {route.label}
                      </span>
                    </NavigationMenuLink>
                  </>
                ))}
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </span>
    </nav>
  );
}
