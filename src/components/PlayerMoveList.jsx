import { useAppContext } from "../AppContext"
import PlayerMove from "./PlayerMove"


export default function PlayerMoveList() {

    const {showPlayerMove} = useAppContext()

    return (
        <div className="flex gap-5 items-center justify-center h-[60px] min-w-[100px] bg-slate-500 text-gray-50 p-3 rounded-sm text-xl">
            {showPlayerMove.map((move, index) => {
                return (
                    <PlayerMove key={index} move={move} />
                )
            })}
        </div>
    )
}