import { useContext } from "react"
import { FormContext } from '../../Context/Context';
import { AsideWrapper } from '../AsideWrapper/AsideWrapper'
import { NextStep } from '../StepHandle/NextStep'

import { YourInfo } from '../Steps/YourInfo/YourInfo'
import { SelectPlan } from '../Steps/SelectPlan/SelectPlan';
import { AddOns } from '../Steps/AddOns/AddOns';
import { Summary } from "../Steps/Summary/Summary";
import { Thanks } from "../Steps/Thanks/Thanks";
import { BackStep } from "../StepHandle/BackStep";
import { Confirm } from "../StepHandle/Confirm";

const FormComponent = () => {
  const context = useContext(FormContext);

  return (
    <div className="form-section bg-cover bg-center bg-no-repeat">
      <div className="form-wrapper grid gap-[1.875rem] grid-cols-1 h-full ">
        <div className="aside-wrapper mt-[1.875rem]">
          <AsideWrapper />
        </div>
        <div className="container">
          {context.step === 1 && <YourInfo />}
          {context.step === 2 && <SelectPlan />}
          {context.step === 3 && <AddOns />}
          {context.step === 4 && <Summary />}
          {context.step === 5 && <Thanks />}
        </div>
        <div className="form move-forward">
          <NextStep />
          {context.step === 2 && <BackStep />}
          {context.step === 3 && <BackStep />}
          {context.step === 4 && <BackStep />}
          {context.step === 4 && <Confirm />}
        </div>
      </div>
    </div>
  );
};

export { FormComponent };