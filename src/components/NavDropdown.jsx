import Link from "next/link";

function ChevronDown() {
    return (
                                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 transition-transform group-hover:rotate-180"
                        >
                        <path d="m6 9 6 6 6-6" />
                        </svg>
    )

}

export default function NavDropdown({ label, items}) {
    return (
        <li className="relative group ">
            <div className="flex cursor-pointer items-center gap-1 ">
                <span>{label}</span>
                <ChevronDown />
            </div>

            {/* Dropdown */}
            <div className="
                    absolute left-0 top-full
                    mt-0 min-w-[110px]
                    rounded-md border bg-white shadow-lg py-2
                    bg-gradient-to-br from-black via-zinc-900 to-zinc-800
                    
                    opacity-0
                    translate-y-1
                    pointer-events-none
                    
                    transition-all
                    duration-300
                    ease-out
                    
                    group-hover:opacity-500
                    group-hover:translate-y-0
                    group-hover:pointer-events-auto">
                {items.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                        {item.text}
                    </Link>
                ))}
            </div>
        </li>
    )
}