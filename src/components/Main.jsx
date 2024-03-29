import AiMove from "../components/AiMove"
import IsReady from "../components/IsReady"
import PlayeButton from "../components/PlayButton"
import PlayerForm from "../components/PlayerForm"
import PlayerMoveList from "../components/PlayerMoveList"
import PlayerValidMoveList from "../components/PlayerValidMoveList"
import Modal from "../components/Modal"
import { useAppContext } from "../AppContext"


export default function Main() {

    const { playerTimeToMove, isReady } = useAppContext()

    return (
        <main className="layout-wrapper">
            <h1 className="text-center my-8 font-bold text-4xl uppercase tracking-wider text-dark bg-[#ffd7de] p-2 rounded-sm shadow-md dark:bg-[#461e25] dark:text-white">copy the pattern</h1>
            <div className="flex gap-5 flex-col">
                {!isReady == "" && <IsReady />}
                <AiMove />
                <PlayerMoveList />
                <PlayerValidMoveList />
                {playerTimeToMove && <PlayerForm />}
                <PlayeButton />
                <Modal />
            </div>
        </main>
    )
}