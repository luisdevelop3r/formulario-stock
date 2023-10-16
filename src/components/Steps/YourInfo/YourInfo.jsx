import { useContext } from "react"
import { FormContext } from '../../../Context/Context';
import { NextStep } from '../../StepHandle/NextStep'

function YourInfo() {
    const context = useContext(FormContext);

    return (
        <div className="provide-details">
            <h1 className="font-bold">Personal info</h1>
            <p className='text-[#9699ab] text-[clamp(.6875rem,0.75rem_+_1.4vw,1.25rem)] leading-normal mb-[1.5625rem]'>Please provide your name, email address, and phone number.</p>
            <form>
                <label htmlFor="name">
                    <p>Name</p>
                    <span className={context.crowdedFields[0].name == false && context.applyChanges ? "error-desktop" : "hidden"}>This field is required  </span>
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    className={`${context.crowdedFields[0].name == false && context.applyChanges && '!border-[crimson]'} 'focused h-[3.125rem] rounded-[0.4375rem]'`}
                    placeholder="e.g Kamasah Dickson"
                    value={context.name}
                    onChange={e => context.setName(e.target.value)}
                />
                <label htmlFor="email">
                    <p>Email address</p>
                    <span className={context.crowdedFields[1].email == false && context.applyChanges ? "error-desktop" : "hidden"}>This field is required</span>
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className={`${context.crowdedFields[1].email == false && context.applyChanges && '!border-[crimson]'} 'focused h-[3.125rem] rounded-[0.4375rem]'`}
                    placeholder="e.g kamasahdickson19@gmail.com"
                    value={context.email}
                    onChange={e => context.setEmail(e.target.value)}
                />
                <label htmlFor="phone">
                    <p>phone number</p>
                    <span className={context.crowdedFields[2].phone == false && context.applyChanges ? "error-desktop" : "hidden"}>This field is required</span>
                </label>
                <input
                    id="phone"
                    type="text"
                    name="phone"
                    className={`${context.crowdedFields[2].phone == false && context.applyChanges && '!border-[crimson]'} 'focused h-[3.125rem] rounded-[0.4375rem]'`}
                    placeholder="e.g +233594571065"
                    value={context.phone}
                    onChange={e => context.setPhone(e.target.value)}
                />
            </form>

            <div className="desktop-move-forward">
                <NextStep />
            </div>
        </div>
    )
}

export { YourInfo }