import { useContext, useState } from 'react';
import { NextStep } from '../../StepHandle/NextStep'
import { BackStep } from '../../StepHandle/BackStep'
import { FormContext } from '../../../Context/Context';

function AddOns() {
    const context = useContext(FormContext);
    const [featuresSelected, setFeaturesSelected] = useState([false, false, false]);

    function toggleFeature(index) {
        const newFeaturesSelected = [...featuresSelected];
        newFeaturesSelected[index] = !newFeaturesSelected[index];
        setFeaturesSelected(newFeaturesSelected);
        context.setOnsAdded(newFeaturesSelected);
    }

    return (
        <div className="provide-details2 bg-white shadow-[0_1.1rem_1rem_-0.8rem_#d6d9e6] px-5 py-[1.875rem] rounded-[0.625rem]">
            <h1 className="font-bold text-[#02295a] text-[clamp(1.25rem,1.25rem_+_3vw,2.1875rem)] mb-2.5">Pick add-ons</h1>
            <p className='text-[#9699ab] text-[clamp(.6875rem,0.75rem_+_1.4vw,1.25rem)] leading-normal mb-[1.5625rem]'>Add-ons help enhance your gaming experience.</p>
            <form>
                <label className={`grid grid-cols-[4rem,2fr,1fr] items-center justify-items-end p-[0.8rem] border rounded-lg border-solid mb-5 cursor-pointer
                ${featuresSelected[0] == true ? 'bg-[#f8f9fe] border-[#5145f4]' : 'bg-white border-[hsl(229deg,24%,87%)]'}`} >
                    <div className="checkbox-container">
                        <input onClick={() => { toggleFeature(0); context.setOnlineS(!context.onlineS) }} className={featuresSelected[0] ? 'custom-checkbox active2' : 'custom-checkbox'} type="checkbox" />
                        <span className="checkmark"></span>
                    </div>

                    <div className='w-full'>
                        <h3 className='text-[#02295a] font-black'>Online service</h3>
                        <p className='text-[#9699ab]'>Access to multiplayer games</p>
                    </div>
                    <p className='text-[#5145f4] font-normal mr-[3%]'>+$1/mo</p>
                </label>

                <label className={`grid grid-cols-[4rem,2fr,1fr] items-center justify-items-end p-[0.8rem] border rounded-lg border-solid mb-5 cursor-pointer
                ${featuresSelected[1] == true ? 'bg-[#f8f9fe] border-[#5145f4]' : 'bg-white border-[hsl(229deg,24%,87%)]'}`} >
                    <div className="checkbox-container">
                        <input className="custom-checkbox" onClick={() => { toggleFeature(1); context.setStorage(!context.storage) }} type="checkbox" />
                        <span className="checkmark"></span>
                    </div>

                    <div className='w-full'>
                        <h3 className='text-[#02295a] font-black'>Larger storage</h3>
                        <p className='text-[#9699ab]'>Extra 1TB of cloud save</p>
                    </div>
                    <p className='text-[#5145f4] font-normal mr-[3%]'>+$2/mo</p>
                </label>

                <label className={`grid grid-cols-[4rem,2fr,1fr] items-center justify-items-end p-[0.8rem] border rounded-lg border-solid mb-5 cursor-pointer
                ${featuresSelected[2] == true ? 'bg-[#f8f9fe] border-[#5145f4]' : 'bg-white border-[hsl(229deg,24%,87%)]'}`} >
                    <div className="checkbox-container">
                        <input className="custom-checkbox" onClick={() => { toggleFeature(2); context.setCustomization(!context.customization) }} type="checkbox" />
                        <span className="checkmark"></span>
                    </div>

                    <div className='w-full pl-2'>
                        <h3 className='text-[#02295a] font-black'>Customizable Profile</h3>
                        <p className='text-[#9699ab]'>Custom theme on your profile</p>
                    </div>
                    <p className='text-[#5145f4] font-normal mr-[3%]'>+$2/mo</p>
                </label>
            </form>

            <div className="desktop-move-forwar2d">
                <BackStep />
                <NextStep />
            </div>
        </div>
    )
}

export { AddOns }