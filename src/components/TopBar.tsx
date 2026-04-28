export default function TopBar() {
    return (
        <div
            className="fixed top-0 left-0 w-full z-[100] bg-primary text-white flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-8 px-2 py-1 text-xs sm:text-sm font-medium shadow-md"
            style={{ letterSpacing: '0.5px' }}
        >
            <span className="flex items-center gap-1">
                <span role="img" aria-label="phone">📱</span>
                <a href="tel:+918089401777" className="hover:underline text-white">+91 8089 401 777</a>
            </span>
            <span className="hidden sm:flex items-center gap-1">
                <span role="img" aria-label="email">✉️</span>
                <a href="mailto:info@cosmotechs.com" className="hover:underline text-white">info@cosmotechs.com</a>
            </span>
            <span className="hidden md:flex items-center gap-1">
                <span role="img" aria-label="location">📍</span>
                Kannamkulam, BP Angadi (PO), Tirur, Malappuram Dt., Kerala-676102
            </span>
        </div>
    );
}
