"use client";

import React, { useState } from "react";
import { Bot } from "lucide-react";
import AuroraBody from "@/components/AuroraBody";
import ContextProvider from "@/context/ContextProvider";
import Image from "next/image";

const Neo = () => {
    const [open, setOpen] = useState(false);

    return (
        <ContextProvider>
            <>
                {/* Toggle Button */}
                {!open && (
                    <button
                        onClick={() => setOpen(true)}
                        className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white p-4 rounded-full shadow-lg transition"
                    >
                        <Bot className="w-5 h-5" />
                    </button>
                )}

                {/* Chat UI */}
                {open && (
                    <div className="fixed bottom-6 right-6 w-[95vw] max-w-md h-[80vh] bg-neutral-900 text-white border border-zinc-700 shadow-2xl rounded-2xl z-50 flex flex-col animate-slide-up">
                        {/* Header */}
                        <div className="flex items-center justify-between p-4 bg-neutral-800 border-b border-zinc-700 rounded-t-2xl">
                            <div className="flex items-center space-x-2">
                                <Image 
                                    src="/logo.png"
                                    alt="Neo AI Logo"
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <h2 className="text-lg font-semibold">Ask Neo</h2>
                            </div>
                           
                            <button
                                onClick={() => setOpen(false)}
                                className="text-2xl text-gray-400 hover:text-white"
                            >
                                &times;
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-none">
                            {/* Auto chat rendering area */}
                            <AuroraBody />
                        </div>
                    </div>
                )}
            </>
        </ContextProvider>
    );
};

export default Neo;
