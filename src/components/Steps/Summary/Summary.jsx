import { useContext } from "react";
import { FormContext } from "../../../Context/Context";
import { AddedOns } from '../../Molecules/AddedOns';
import { BackStep } from "../../StepHandle/BackStep";
import { Confirm } from "../../StepHandle/Confirm";

function Summary() {
    const context = useContext(FormContext);
    let receiptPlan;
    let per;
    context.suscriptionTime ? receiptPlan = "/yr" : receiptPlan = "/mo";
    //const onlineS = 0
    function logo() {
        console.log(context.onsAdded[0]);
        console.log(context.onsAdded[0].index);
    }
    logo()
    context.suscriptionTime ? per = '(per year)' : per = '(per month)';

    return (
        <div className="provide-details">
            <h1 className="font-bold">Finishing up</h1>
            <p className='text-[#9699ab] text-[clamp(.6875rem,0.75rem_+_1.4vw,1.25rem)] leading-normal mb-[1.5625rem]'>Double-check everything looks OK before confirming.</p>
            <main className="w-full bg-[rgba(248,249,254,255)] rounded-lg">
                <div className="flex justify-between items-center m-[1.25rem] border-b border-[#e6e6e6]">

                    <div className="flex flex-col">
                        <span className="font-semibold text-[#02295a] capitalize" id="receiptPlan">
                            {context.plan}
                            {context.suscriptionPlace}
                        </span>
                        <u className="font-thin text-[#9699ab] cursor-pointer" onClick={() => context.setStep(2)}>Change</u>
                    </div>
                    <span className="font-semibold text-[#02295a]">${context.planPrice}{receiptPlan}</span>
                </div>
                <div className="flex flex-col m-[1.25rem]">
                    {context.onsAdded.map((isAdded, index) => isAdded && <AddedOns key={index} index={index} />)}
                </div>

            </main>
            <div className="w-full flex justify-between my-6">
                <p className="ml-5">Total{per}</p>
                <h2 className="font-bold text-[1.3rem]; text-[#5041c7] capitalize mr-5">+${context.totalPrice}{receiptPlan}</h2>
            </div>

            <div className="w-full h-[20%] flex justify-between items-end fixiado3">
                <div className="desktop-move-forwar2d">
                    <BackStep />
                    <Confirm />
                </div>
            </div>
        </div>
    )
}

export { Summary }