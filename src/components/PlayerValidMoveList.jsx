

import { move } from "../constants"
import ValidMove from "./ValidMove"

export default function PlayerValidMoveList() {

    return (
        <div className="border-dashed border-2 p-5 grid grid-cols-2 gap-4 md:flex md:justify-center">
            {move.map(button => {
                return (
                    <ValidMove key={button.value} button={button} />
                )
            })}
        </div>
    )
}