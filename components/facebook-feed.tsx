"use client";

import { useEffect, useRef } from "react";

export function FacebookFeed() {
    // IFrame implementation - no JS SDK initialization required

    return (
        <div className="flex flex-col items-center w-full">
            {/* Minimalist container */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden w-full max-w-[500px]">
                {/* Feed Container - IFrame Version for Robustness */}
                <div className="bg-gray-50 min-h-[500px]">
                    <iframe
                        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D61585026020662&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId"
                        width="500"
                        height="800"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-in-picture; web-share"
                        className="w-full h-[500px]"
                        title="Facebook Feed"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

declare global {
    interface Window {
        fbAsyncInit: () => void;
        FB: any;
    }
}
