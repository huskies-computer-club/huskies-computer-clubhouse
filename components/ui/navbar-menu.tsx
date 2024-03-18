"use client";
import React from "react";

export const Menu = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <nav
            className="relative border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

