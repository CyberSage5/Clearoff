/* eslint-disable no-unused-vars */
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Bell,
  CircleUser,
  Search,
  LineChart,
  Package,
  ShoppingCart,
  Users,
  Menu,
  Home
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from '../../auth/useAuth';

export default function TopNav() {
  const { logout } = useAuth();


  return (
<header className="flex h-20 items-center w-full gap-20 px-4 lg:h-20 lg:px-6">

{/* slideOut menu */}

<Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="shrink-0 md:hidden"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="flex flex-col">
                  <nav className="grid gap-2 text-lg font-medium">
                    <Link
                      href="#"
                      className="flex items-center gap-2 text-lg font-semibold"
                    >
                      <span className="text-clRed text-2xl font-extrabold mb-4">Clearoff</span>
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:border hover:border-clRed hover:text-clRed"
                    >
                      <Home className="h-5 w-5" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl py-2 px-3 hover:text-white hover:bg-clRed group"
                    >
                      <ShoppingCart className="h-5 w-5" />
                      Orders
                      {/* <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black goup-hover:bg-white group-hover:text-clRed">
                        6
                      </Badge> */}
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-white hover:bg-clRed"
                      >
                      <Package className="h-5 w-5" />
                      Products
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-white hover:bg-clRed"
                      >
                      <Users className="h-5 w-5" />
                      Customers
                    </Link>
                    <Link
                      href="#"
                      className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 hover:text-white hover:bg-clRed"
                      >
                      <LineChart className="h-5 w-5" />
                      Analytics
                    </Link>
                  </nav>
                  {/* <div className="mt-auto">
                    <Card>
                    <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                    Unlock all features and get unlimited access to our
                    support team.
                    </CardDescription>
                      </CardHeader>
                      <CardContent>
                      <Button size="sm" className="w-full">
                      Upgrade
                        </Button>
                      </CardContent>
                    </Card>
                  </div> */}
                </SheetContent>
              </Sheet>

              <div className="flex h-14 items-center px-4 lg:h-[60px] lg:px-6">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                  <span className="text-clRed text-2xl font-extrabold">Clearoff</span>
                </Link>
                <Button variant="outline" size="icon" className="ml-4 h-8 w-8">
                  <Bell className="h-4 w-4" />
                  <span className="sr-only">Toggle notifications</span>
                </Button>
              </div> 

              {/* search bar */}
              <div className="w-full h-full flex items-center">
                <form className="w-full">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4" />
                    <Input
                      type="search"
                      placeholder="Search products..."
                      className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-full"
                    />
                  </div>
                </form>
              </div>


              {/* user Icon with dropdown */}
         <div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="secondary" size="icon" className="rounded-full bg-clRed text-white">
                    <CircleUser className="h-5 w-6" />
                    <span className="sr-only">Toggle user menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Support</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <span onClick={logout()}>
                    Logout
                    </span>
                    </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
      </div>
            </header>
  )
}
