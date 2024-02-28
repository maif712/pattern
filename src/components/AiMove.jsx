import { useAppContext } from "../AppContext"


export default function AiMove() {

    const {aiMove} = useAppContext()

    return (
        <figure className="w-[60px] h-[60px] bg-orange-500 shadow-md mx-auto">
            <img src={aiMove.iconUrl} alt={aiMove.value} />
        </figure>
    )
}