"use client";
import {
  Home,
  ShoppingCart,
  Shirt,
  ShoppingBag,
  Package,
  Sun,
  Snowflake,
  DollarSign,
  Info,
  Phone,
  User,
  Heart,
  MenuIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";

const Navbar = () => {
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  const menu = [
    { title: "Home", url: "/", icon: <Home className="size-5 shrink-0" /> },
    {
      title: "Shop",
      url: "/shop",
      items: [
        {
          title: "Men",
          description: "Explore latest trends for men",
          icon: <Shirt className="size-5 shrink-0" />,
          url: "/shop/men",
        },
        {
          title: "Women",
          description: "Discover new arrivals for women",
          icon: <ShoppingCart className="size-5 shrink-0" />,
          url: "/shop/women",
        },
        {
          title: "Kids",
          description: "Cute & comfy styles for kids",
          icon: <Shirt className="size-5 shrink-0" />,
          url: "/shop/kids",
        },
        {
          title: "Accessories",
          description: "Bags, belts, hats & more",
          icon: <ShoppingBag className="size-5 shrink-0" />,
          url: "/shop/accessories",
        },
      ],
    },
    {
      title: "Collections",
      url: "/collections",
      items: [
        {
          title: "Summer Collection",
          description: "Stay cool with our summer picks",
          icon: <Sun className="size-5 shrink-0" />,
          url: "/collections/summer",
        },
        {
          title: "Winter Collection",
          description: "Stay warm with cozy outfits",
          icon: <Snowflake className="size-5 shrink-0" />,
          url: "/collections/winter",
        },
        {
          title: "Sale",
          description: "Up to 50% off selected items",
          icon: <DollarSign className="size-5 shrink-0" />,
          url: "/collections/sale",
        },
      ],
    },
    {
      title: "About Us",
      url: "/about",
      icon: <Info className="size-5 shrink-0" />,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: <Phone className="size-5 shrink-0" />,
    },
    {
      title: "Account",
      url: "/account",
      items: [
        {
          title: "Profile",
          description: "View & edit your profile",
          icon: <User className="size-5 shrink-0" />,
          url: "/account/profile",
        },
        {
          title: "Orders",
          description: "Check your order history",
          icon: <Package className="size-5 shrink-0" />,
          url: "/account/orders",
        },
        {
          title: "Wishlist",
          description: "Your saved items",
          icon: <Heart className="size-5 shrink-0" />,
          url: "/account/wishlist",
        },
      ],
    },
  ];

  return (
    <section className="py-4 ">
      <div className="container mx-auto ">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="max-h-8"
              alt="Shadcn UI Navbar"
            />
            <span className="text-lg font-semibold tracking-tighter">
              Merrygooes.shop
            </span>
          </Link>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {menu.map((item) => {
                if (item.items) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] grid-cols-2 p-3">
                          {item.items.map((subItem, index) => (
                            <NavigationMenuLink
                              asChild
                              key={index}
                              className="rounded-md p-3 transition-colors hover:bg-muted/70"
                            >
                              <Link href={subItem.url}>
                                <div>
                                  <p className="mb-1 font-semibold text-foreground">
                                    {subItem.title}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href={item.url}>{item.title}</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline">Sign in</Button>
            <Button>Start for free</Button>
          </div>
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <MenuIcon className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              {/* mobile navbar header  */}
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="max-h-8"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-lg font-semibold tracking-tighter">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col p-4">
                <div className="flex flex-col gap-6">
                  {menu.map((item) => {
                    if (item.items) {
                      return (
                        <Accordion
                          key={item.title}
                          type="single"
                          collapsible
                          className=""
                        >
                          <AccordionItem
                            value="solutions"
                            className="border-none"
                          >
                            <AccordionTrigger className="text-base   p-0 hover:no-underline">
                              {item?.title}
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="grid md:grid-cols-2">
                                {item.items.map((subItem, index) => (
                                  <Link
                                    href={subItem.url}
                                    key={index}
                                    className="rounded-md p-3 transition-colors hover:bg-muted/70"
                                  >
                                    <div key={subItem.title}>
                                      <p className="mb-1 font-semibold text-foreground">
                                        {subItem.title}
                                      </p>
                                      <p className="text-sm text-muted-foreground">
                                        {subItem.description}
                                      </p>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      );
                    } else {
                      return (
                        <Link
                          key={item.title}
                          href={item.url}
                          className="font-medium"
                        >
                          {item.title}
                        </Link>
                      );
                    }
                  })}
                </div>
                <div className="mt-6 flex flex-col gap-4">
                  <Button variant="outline">Sign in</Button>
                  <Button>Start for free</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
