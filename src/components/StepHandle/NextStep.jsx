import { useContext } from "react"
import { FormContext } from '../../Context/Context';

function NextStep() {
    const context = useContext(FormContext);
    function validateSteps(step) {
        if (step === 1) {
            context.validateStep1();
        }
        else if (step === 2) {
            context.validateStep2();
        }
        else if (step === 3) {
            context.validateStep3()
            context.setStep(context.step + 1);
        }
    }


    return (
        <div className={`container2 fixiado2 ${context.step == 4 ? 'hidden' : ''}  ${context.step == 5 ? 'hidden' : ''}`} >
            <button className="NextStepButton" form="myForm" onClick={() => validateSteps(context.step)}>
                Next step
            </button>
        </div>
    )
}

export { NextStep }