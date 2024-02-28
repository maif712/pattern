import { useAppContext } from "../AppContext"


export default function PlayerForm() {

    const {handleSubmit} = useAppContext()

    return (
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <button className="bg-[#292929] py-2 px-4 text-gray-50 uppercase font-bold tracking-widest rounded-md text-2xl transition-colors hover:bg-green-800">submit your move</button>
        </form>
    )
}