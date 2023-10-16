import { useContext } from "react"
import { FormContext } from '../../Context/Context';

function BackStep() {
    const context = useContext(FormContext);

    return (
        <div className="container !bg-transparent relative left-[-24%] fixiado" >
            <button className="relative left-28 !bg-[#fff] font-medium order-2 !text-[#9699ab]" type="submit" form="myForm"
                onClick={() => context.setStep(context.step - 1)}>
                Go Back
            </button>
        </div>
    )
}

export { BackStep } 