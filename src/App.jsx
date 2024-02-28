import { useAppContext } from "./AppContext"
import AiMove from "./components/AiMove"
import IsReady from "./components/IsReady"
import PlayeButton from "./components/PlayButton"
import PlayerForm from "./components/PlayerForm"
import PlayerMoveList from "./components/PlayerMoveList"
import PlayerValidMoveList from "./components/PlayerValidMoveList"
import Modal from "./components/Modal"
import Footer from "./components/Footer"


export default function App() {
    const { playerTimeToMove, isReady } = useAppContext()


    return (
        <>
            <main className="layout-wrapper">
                <h1 className="text-center my-8 font-bold text-4xl uppercase tracking-wider text-white/85 bg-green-950 p-2 rounded-sm shadow-md">copy the pattern</h1>
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
            <Footer />
        </>
    )
}