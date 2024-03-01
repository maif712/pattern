import { useAppContext } from "../AppContext"

export default function IsReady() {

    const {isReady} = useAppContext()
    return (
        <h2 className="absolute text-4xl bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-5 px-10 flex justify-center items-center uppercase shadow-md backdrop-blur-md bg-blue-500/30 rounded-[8px] dark:text-white">{isReady}</h2>
    )
}