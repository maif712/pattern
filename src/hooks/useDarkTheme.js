import { useEffect, useState } from "react"


export default function useDarkTheme() {


    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const localValue = localStorage.getItem("THEME")
        if(localValue == null) return false

        return JSON.parse(localStorage.getItem("THEME"))
    })

    useEffect(() => {
        localStorage.setItem("THEME", JSON.stringify(isDarkTheme))
    }, [isDarkTheme])

    useEffect(() => {
        const mainHtml = document.querySelector("html")
        isDarkTheme ? mainHtml.classList.add("dark") : mainHtml.classList.remove("dark")
    }, [isDarkTheme])

    const handleDarkTheme = () => {
        setIsDarkTheme(prev => !prev)
    }

    return {
        isDarkTheme,
        handleDarkTheme
    }
}