'use client';

import React from 'react';
import ContextProvider from '@/context/ContextProvider';
import '@/styles/globals.css'; // Make sure Tailwind is imported here

export default function NeoLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <ContextProvider>
            <div className="min-h-screen w-full bg-neutral-900 text-white">
                {children}
            </div>
        </ContextProvider>
    );
}
