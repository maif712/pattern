import { createContext, useContext, useEffect, useRef } from "react";
import { useState } from "react"
import { move } from "./constants";
import useDarkTheme from "./hooks/useDarkTheme";


const AppContext = createContext(null)

export function AppContextProvider({children}) {

    const [aiMove, setAiMove] = useState("")
    const [mainMove, setMainMove] = useState("")
    const [playerMove, setPlayerMove] = useState("")
    const [isWinner, setIsWinner] = useState(null)

    const [showPlayerMove, setShowPlayerMove] = useState([])
    const [playerTimeToMove, setPlayerTimeToMove] = useState(false)
    const [playerTimeToMoveTimerId, setPlayerTimeToMoveTimerId] = useState(null)

    const [isGameStart, setIsGameStart] = useState(false)
    const [timerId, setTimerId] = useState(null)

    const [playerMoveCount, setPlayerMoveCount] = useState(0)
    const [gameDelayTimerId, setGameDelayTimerId] = useState(null)

    const [isReady, setIsReady] = useState("")

    // Dark Theme custom hook
    const {isDarkTheme, handleDarkTheme} = useDarkTheme()
    // End

    useEffect(() => {
        const mainHtml = document.querySelector("html")
        isDarkTheme ? mainHtml.classList.add("dark") : mainHtml.classList.remove("dark")
    }, [isDarkTheme])
    
    const modalRef = useRef()

    const gameFunction = () => {

        let patternTime = 4;

        if (isGameStart) {
            playAgain()
        }

        setIsReady("Ready...")

        setTimeout(() => {
            setIsReady("go!")
        }, 900);

        const gameStartDelayTimer = setTimeout(() => {
            const ids = []
            for (let index = 0; index < patternTime; index++) {
                const myInterval = setTimeout(() => {
                    const rndMove = Math.floor(Math.random() * move.length)
                    setAiMove(move[rndMove])
                    setMainMove(prev => prev + move[rndMove].value)
                    setTimeout(() => {
                        setAiMove("")
                    }, 1000);
                }, index * 1500);
                ids.push(myInterval)
            }
            setTimerId(ids)
            setIsReady("")
        }, 1500);
        setGameDelayTimerId(gameStartDelayTimer)

        const palyerTimeToMove = setTimeout(() => {
            setPlayerTimeToMove(true)
        }, patternTime * 1800);
        setPlayerTimeToMoveTimerId(palyerTimeToMove)

        setIsGameStart(true)
    }

    const handleStop = () => {
        timerId.forEach(id => clearTimeout(id));
        clearTimeout(playerTimeToMoveTimerId)
        clearTimeout(gameDelayTimerId)
    }

    const playAgain = () => {
        handleStop()
        setMainMove("")
        setTimerId([])
        setPlayerMove("")
        setPlayerMoveCount(0)
        setShowPlayerMove([])
        setPlayerTimeToMove(false)
        setIsGameStart(false)
    }

    const handleClick = (playerMove) => {
        setPlayerMove(prev => prev + `${playerMove} `)
        setShowPlayerMove(prev => [...prev, playerMove])
        setPlayerMoveCount(prev => prev + 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimedPlayerMove = playerMove.split(" ").join("")
        trimedPlayerMove == mainMove ? setIsWinner(true) : setIsWinner(false)
        modalRef.current.showModal()
    }

    const values = {
        isReady,
        aiMove,
        showPlayerMove,
        handleClick,
        playerTimeToMove,
        handleSubmit,
        gameFunction,
        playerMoveCount,
        isGameStart,
        isWinner,
        setIsWinner,
        playerTimeToMove,
        modalRef,
        isDarkTheme,
        handleDarkTheme
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export default AppContext
export const useAppContext = () => useContext(AppContext)