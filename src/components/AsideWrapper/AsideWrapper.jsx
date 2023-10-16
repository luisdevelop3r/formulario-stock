import { useContext } from "react"
import { FormContext } from '../../Context/Context';

function AsideWrapper() {
    const context = useContext(FormContext);

    return (
        <div className="container">
            <div className="aside">
                <div className="steps flex items-center justify-center h-4/5 w-full text-white gap-5 z-3">
                    <div className={`step ${context.step === 1 ? 'active' : 'false'}`} aria-label="1">
                        <p>1</p>
                        <div className="tree">
                            <span>STEP 1</span>
                            <h2>YOUR INFO</h2>
                        </div>
                    </div>
                    <div className={`step ${context.step === 2 ? 'active' : 'false'}`} aria-label="2">
                        <p>2</p>
                        <div className="tree">
                            <span>STEP 2</span>
                            <h2>SELECT PLAN</h2>
                        </div>
                    </div>
                    <div className={`step ${context.step === 3 ? 'active' : 'false'}`} aria-label="3">
                        <p>3</p>
                        <div className="tree">
                            <span>STEP 3</span>
                            <h2>ADD-ONS</h2>
                        </div>
                    </div>
                    <div className={`step ${context.step === 4 ? 'active' : 'false'}`} aria-label="4">
                        <p>4</p>
                        <div className="tree">
                            <span>STEP 4</span>
                            <h2>SUMMARY</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AsideWrapper }