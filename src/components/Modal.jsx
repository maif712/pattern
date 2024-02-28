import { useEffect } from "react"
import { useAppContext } from "../AppContext"


export default function Modal() {

    const {isWinner, modalRef, setIsWinner} = useAppContext()

    useEffect(() => {
        const closeModalTimeOut = setTimeout(() => {
            modalRef.current.close()
            setIsWinner(null)
        }, 500);

        return () => clearTimeout(closeModalTimeOut)
    }, [isWinner])



    return (
        <dialog className={`p-10 backdrop-blur-md rounded-md ${isWinner ? " bg-green-600/40" : "bg-red-600/40"} `} ref={modalRef}>
            <span className="uppercase font-bold tracking-wider text-3xl text-black/80">{isWinner ? "correct" : "wrong"}</span>
        </dialog>
    )
}