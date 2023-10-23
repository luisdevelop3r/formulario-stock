import { useContext } from "react"
import { FormContext } from '../../../Context/Context';
import { NextStep } from '../../StepHandle/NextStep'
import { BackStep } from '../../StepHandle/BackStep'
import iconArcade from '../../../assets/images/icon-arcade.svg'
import iconAdvanced from '../../../assets/images/icon-advanced.svg'
import iconPro from '../../../assets/images/icon-pro.svg'

function SelectPlan() {
    const context = useContext(FormContext);

    let receiptPlan;

    context.suscriptionTime ? receiptPlan = "/yr" : receiptPlan = "/mo";


    return (
        <div className="provide-details">
            <h1 className="font-bold">Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
            <form className='flex flex-col mt-[unset] h-[390px]'>
                <div className='flex items-start justify-between w-full h-[62.333333%] pt-9'>

                    <div onClick={() => context.setPlan("arcade")} className={`w-full h-[61.333333%] flex flex-col p-[0.9375rem] rounded-lg plan items-start text-left justify-between !mt-0
                    ${context.plan == "arcade" ? 'bg-[#f8f9fe] border-[#5145f4]' : ''}`}>
                        <img src={iconArcade} alt="" />
                        <div>
                            <h2 className='font-medium text-lg'>Arcade</h2>
                            <p>${context.arcade}{receiptPlan}</p>
                        </div>
                    </div>

                    <div onClick={() => context.setPlan("advanced")} className={`w-full h-[61.333333%] flex flex-col p-[0.9375rem] rounded-lg plan items-start text-left justify-between ml-[0.7rem] !mt-0
                    ${context.plan == "advanced" ? 'bg-[#f8f9fe] border-[#5145f4]' : ''}`}>
                        <img src={iconAdvanced} alt="" />
                        <div>
                            <h2 className='font-medium text-lg'>Advanced</h2>
                            <p>${context.advanced}{receiptPlan}</p>
                        </div>
                    </div>

                    <div onClick={() => context.setPlan("pro")} className={`w-full h-[61.333333%] flex flex-col p-[0.9375rem] rounded-lg plan items-start text-left justify-between ml-[0.7rem] !mt-0
                    ${context.plan == "pro" ? 'bg-[#f8f9fe] border-[#5145f4]' : ''}`}>
                        <img src={iconPro} alt="" />
                        <div>
                            <h2 className='font-medium text-lg'>Pro</h2>
                            <p>${context.pro}{receiptPlan}</p>
                        </div>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center rounded-lg bg-[hsl(231,100%,99%)]'>
                    <h2 className={`font-medium text-lg ${context.suscriptionTime ? 'text-[#9699ab]' : ''}`}>Monthly</h2>
                    <label className="switch mx-7">
                        <input type="checkbox" onClick={() => {
                            context.setSuscriptionTime(!context.suscriptionTime)
                            context.validateStep3()
                            context.ChangePrices()
                        }} />
                        <span className="slider"></span>
                    </label>
                    <h2 className={`font-medium text-lg ${context.suscriptionTime == false ? 'text-[#9699ab]' : ''}`}>Yearly</h2>
                </div>
            </form>

            <div className="desktop-move-forward">
                <BackStep />
                <NextStep />
            </div>
        </div>
    )
}

export { SelectPlan }