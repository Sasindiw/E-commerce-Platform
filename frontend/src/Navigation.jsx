import React from "react";
import { ShoppingCart } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "./components/ui/avatar";

function NavBar(props) {
  return (
    <div className="flex justify-between items-center p-0 px-5 h-[109px] bg-white w-full shadow-md fixed box-border left-0 right-0 top-0 z-10">
      <div className="flex items-center flex-1">
        <a
          href="#"
          className="font-bold text-2xl text-black no-underline mr-7 mb-1"
        >
          Mebius
        </a>
        <a href="#" className="no-underline text-black mx-3 text-lg">
          Home
        </a>
        <a href="#" className="no-underline text-black mx-3 text-lg">
          Shop
        </a>
      </div>
      <div className="flex items-center gap-5">
        <span className="no-underline text-black mx-3 text-lg">
          {props.cartCount}
        </span>
        <a
          href="#"
          className="flex items-center no-underline text-black text-base transition-colors hover:text-blue-600"
        >
          <ShoppingCart className="mr-1" aria-hidden="true" />
          Cart
        </a>
        <span className="text-lg text-black">Hi, {props.name}</span>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>SW</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}

export default NavBar;
