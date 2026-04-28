export default function TopBar() {
    return (
        <div
            className="fixed top-0 left-0 w-full z-[100] bg-primary text-white flex flex-row items-center justify-center gap-4 sm:gap-8 px-4 py-2 text-[10px] sm:text-xs font-medium shadow-md h-8 lg:h-10"
            style={{ letterSpacing: '0.5px' }}
        >
            <span className="flex items-center">
                <a href="tel:+918089401777" className="hover:underline text-white font-bold">+91 8089 401 777</a>
            </span>
            <span className="flex items-center">
                <a href="mailto:info@cosmotechs.com" className="hover:underline text-white font-bold">info@cosmotechs.com</a>
            </span>
            <span className="hidden lg:flex items-center gap-1 text-white/90 font-semibold ">
                Kannamkulam, BP Angadi (PO), Tirur Malappuram Dt, Kerala 676102
            </span>
        </div>
    );
}
