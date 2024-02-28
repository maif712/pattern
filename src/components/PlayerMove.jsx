

export default function PlayerMove({move}) {
    return (
        <figure className="w-[40px] h-[40px] bg-blue-400 p-1">
            <img src={`./assets/images/arrow-${move}.svg`} />
        </figure>
    )
}