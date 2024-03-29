

export default function Footer() {
    return (
        <footer className="bg-green-800 mt-auto dark:bg-dark-footer">
            <div className="layout-wrapper">
                <p className="text-white/90 justify-center items-center capitalize flex gap-1 dark:text-dark-text-secondry">made with <span><svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                </span>by <span className="py-1 px-3 bg-green-950 rounded-md  font-semibold tracking-wider dark:bg-dark-text-secondry dark:text-dark-footer">MAIF</span>, 2024</p>
            </div>
        </footer>
    )
}