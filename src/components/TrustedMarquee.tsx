import React from "react";

export default function TrustedMarquee() {
    return (
        <div className="w-full bg-[#23201c] text-white overflow-hidden border-b border-white/10">
            <div className="relative flex items-center h-10 sm:h-12">
                <div className="absolute left-0 w-full h-full bg-gradient-to-r from-[#23201c] via-transparent to-[#23201c] pointer-events-none z-10" />
                <div className="whitespace-nowrap animate-marquee flex items-center gap-8 text-sm sm:text-base font-semibold tracking-wide">
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-white/80">Successful Clients</span>
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-white/80">Successful Clients</span>
                    <span className="text-primary">Trusted by 100+ Authorities</span>
                    <span className="text-white/80">Successful Clients</span>
                </div>
            </div>
        </div>
    );
}
