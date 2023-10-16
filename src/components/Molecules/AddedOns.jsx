import { useContext } from "react"
import { FormContext } from '../../Context/Context';

function AddedOns({ index }) {
    const context = useContext(FormContext);
    let plus;
    let price;
    if (index == 0) {
        plus = "Online Service"
        price = 1
    }
    else if (index == 1) {
        plus = "Larger Storage"
        price = 2
    }
    else {
        plus = "Customizable Profile"
        price = 2
    }

    if (context.suscriptionTime) {
        price *= 10
    }
    return (

        <div className="w-full flex justify-between items-center">
            <p>{plus}</p>
            <span>+${price}/yr</span>
        </div>
    )
}

export { AddedOns }