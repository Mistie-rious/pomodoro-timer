import { useState } from "react";
import Timer from "./Timer";

export default function Navbar() {
    function showDialog() {
        (document.getElementById("my_modal_1") as HTMLDialogElement).showModal();
    }

    const [inputtime, setInputTime] = useState<number>();
    const [finaltime, setFinalTime] = useState<number>()

    const handleSubmit = () => {
        setFinalTime(inputtime)
        
    }
    console.log(inputtime)
    return (
        <nav className="text-white  px-20  py-6 flex justify-between">
            <p>mistie's pomo</p>

            <button onClick={showDialog}>settings</button>
            <dialog id="my_modal_1" className=" modal">
                <div className="bg-cuteblue px-9 py-4 rounded-lg">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">How long do you want to focus?</p>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="number"
                            value={inputtime}
                            onChange={(e) => setInputTime(e.target.valueAsNumber)}
                            placeholder="Time??"
                            className="border rounded-sm px-2 outline-none py-2 w-full"
                        />
                    </form>
                    <div className="modal-action">
                        <form className="flex-col" method="dialog">
                            <label></label>

                            <button className="bg-white px-3 py-2 text-cuteblue rounded-md">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </dialog>
            <Timer finaltime = {finaltime}/>
        </nav>
    );
}
