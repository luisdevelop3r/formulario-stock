import { useContext } from "react";
import { FormContext } from "../../Context/Context";

function Confirm() {
    const context = useContext(FormContext);
    return (
        <div className="fixiado4" >
            <button className="bg-[rgb(71,61,255)] text-[clamp(.6875rem,0.6875rem_+_1.3vw,1.25rem)] text-white cursor-pointer inline-block ml-auto px-5 py-2.5 rounded-[0.4375rem] border-[none];" form="myForm" onClick={() => context.setStep(context.step + 1)}>
                Confirm
            </button>
        </div>
    )
}

export { Confirm }