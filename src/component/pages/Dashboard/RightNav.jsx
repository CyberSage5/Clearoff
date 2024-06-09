// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useAuth } from '../../auth/useAuth';
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import {
  Home,
  LineChart,
  Package,
  ShoppingCart,
  Users,
} from "lucide-react"

export default function RightNav () {
   const { currentUser} = useAuth();

  return (
   <>
<div className="flex-1 relative hidden lg:block lg:h-screen lg:w-[20%] bg-white/5">
<p>{currentUser.email}</p>
<div className="w-full">
  <nav className="grid px-2 text-sm font-medium lg:px-4 ">
    <Link
      href="#"
      className="flex items-center gap-3 w-full rounded-lg px-3 py-2 transition-all hover:text-white hover:bg-clRed"
    >
      <Home className="h-4 w-4" />
      Dashboard
    </Link>
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white hover:bg-clRed group"
    >
      <ShoppingCart className="h-4 w-4" />
      Orders
      <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-black group-hover:text-clRed group-hover:bg-white">
        6
      </Badge>
    </Link>
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-primary transition-all hover:text-white hover:bg-clRed"
      >
      <Package className="h-4 w-4" />
      Products{" "}
    </Link>
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white hover:bg-clRed"
    >
      <Users className="h-4 w-4" />
      Customers
    </Link>
    <Link
      href="#"
      className="flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-white hover:bg-clRed"
    >
      <LineChart className="h-4 w-4" />
      Analytics
    </Link>
  </nav>
</div>
</div>


       </>
  );
}
