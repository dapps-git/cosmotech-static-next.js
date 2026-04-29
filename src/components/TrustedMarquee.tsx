import React from "react";

export default function TrustedMarquee() {
    return (
        <div className="w-full bg-[#C84B1A] text-white overflow-hidden border-y border-white/10 shadow-sm">
            <div className="relative flex items-center h-12 sm:h-14">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-[#C84B1A] via-transparent to-[#C84B1A] pointer-events-none z-10" />

                <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-sm sm:text-lg font-black tracking-wider uppercase">
                    <span className="text-white">
                        Trusted by 100+ Authorities
                    </span>

                    <span className="text-white/80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        Successful Clients
                    </span>

                    <span className="text-white">
                        Trusted by 100+ Authorities
                    </span>

                    <span className="text-white/80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        Successful Clients
                    </span>

                    <span className="text-white">
                        Trusted by 100+ Authorities
                    </span>

                    <span className="text-white/80 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-white/40" />
                        Successful Clients
                    </span>
                </div>
            </div>
        </div>
    );
}