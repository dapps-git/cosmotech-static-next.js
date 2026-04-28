import React from "react";

export default function TrustedMarquee() {
    return (
        <div className="w-full bg-white text-primary overflow-hidden border-y border-border shadow-sm">
            <div className="relative flex items-center h-12 sm:h-14">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-white via-transparent to-white pointer-events-none z-10" />
                <div className="whitespace-nowrap animate-marquee flex items-center gap-12 text-sm sm:text-lg font-black tracking-wider uppercase">
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-dark/40 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/20" />
                        Successful Clients
                    </span>
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-dark/40 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/20" />
                        Successful Clients
                    </span>
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-dark/40 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary/20" />
                        Successful Clients
                    </span>
                </div>
            </div>
        </div>
    );
}
