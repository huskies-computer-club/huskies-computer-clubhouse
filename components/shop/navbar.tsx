"use client";
import React from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { UserButton, useUser } from "@clerk/nextjs";

export function ShopNavbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-2" />
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const { isSignedIn } = useUser();
    return (
        <div
            className={cn("top-10 inset-x-0 w-10/12 max-w-2xl mx-auto z-50", className)}
        >
            <Menu>
                <Link href="/home">
                    Home
                </Link>
                <Link href="/shop">
                    Shop
                </Link>
                {isSignedIn ? (
                    <UserButton />
                ) : (
                    <Link href="/sign-in">Account</Link>
                )}
                <Link href="/shop/cart">
                    Cart
                </Link>
            </Menu>
        </div>
    );
}
