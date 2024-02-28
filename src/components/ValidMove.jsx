import { useAppContext } from "../AppContext"


export default function ValidMove({button}) {

    const {handleClick, playerMoveCount, playerTimeToMove} = useAppContext()

    return (
        <button onClick={() => handleClick(button.value)} className={`flex justify-center items-center bg-blue-500 text-white py-2 px-4 rounded-sm text-xl transition hover:bg-blue-600 hover:-translate-y-1 ${playerMoveCount == 4 ? "pointer-events-none bg-gray-400" : ""} ${!playerTimeToMove ? "pointer-events-none bg-gray-400" : ""} hover:shadow-md`}>
            <figure className="h-[40px] w-[40px]">
                <img src={button.iconUrl} alt={button.value} />
            </figure>
        </button>
    )
}