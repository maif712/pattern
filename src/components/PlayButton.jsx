import { useAppContext } from "../AppContext"


export default function PlayeButton() {

    const {gameFunction, isGameStart} = useAppContext()

    return (
        <div className="my-10 flex justify-center">
            <button className="bg-[#ffde66] p-2 uppercase border-2 border-[#000100] tracking-wider text-xl font-bold rounded-[4px] play-button" onClick={gameFunction}>{isGameStart ? "play again" : "play"}</button>
        </div>
    )
}