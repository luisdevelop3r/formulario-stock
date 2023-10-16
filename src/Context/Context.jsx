import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
export const FormContext = createContext()

export const FormProvider = ({ children }) => {
    // Form  // counter
    const [step, setStep] = useState(1)
    // Form  // Data for validate step 1

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [applyChanges, setApplyChanges] = useState(false)

    const [crowdedFields, setCrowdedFields] = useState([{ name: false }, { email: false }, { phone: false }])
    // Form  // Data for validate step 2
    const [plan, setPlan] = useState("")
    const [suscriptionTime, setSuscriptionTime] = useState(false)
    const [suscriptionPlace, setSuscriptionPlace] = useState("")

    const [arcade, setArcade] = useState(9)
    const [advanced, setAdvanced] = useState(12)
    const [pro, setPro] = useState(15)

    // Form  // validation step 1
    const validateStep1 = () => {
        if (name.length >= 3) {
            let newCrowdedFields = [...crowdedFields]
            newCrowdedFields[0].name = true
            setCrowdedFields(newCrowdedFields)
        }
        if (validarEmail(email)) {
            let newCrowdedFields = [...crowdedFields]
            newCrowdedFields[1].email = true
            setCrowdedFields(newCrowdedFields)
        }
        if (phone.length >= 9) {
            let newCrowdedFields = [...crowdedFields]
            newCrowdedFields[2].phone = true
            setCrowdedFields(newCrowdedFields)
        }
        if (name.length >= 3 && validarEmail(email) && phone.length >= 9) {
            setStep(step + 1);
            setCrowdedFields([{ name: false }, { email: false }, { phone: false }])
        }
        setApplyChanges(true)
    }
    function validarEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Form  // validation step 2

    const validateStep2 = () => {
        if (plan !== "") {
            setStep(step + 1);
        }
    }
    // Form  // Data for validate step 3
    // plus features
    const [onlineS, setOnlineS] = useState(false)
    const [storage, setStorage] = useState(false)
    const [customization, setCustomization] = useState(false)

    // total price
    const [totalPrice, setTotalPrice] = useState(0)
    const [planPrice, setPlanPrice] = useState(0)


    const validateStep3 = () => {
        let calculatedPrice = 0;

        switch (plan) {
            case "arcade":
                calculatedPrice = 9;
                break;
            case "advanced":
                calculatedPrice = 12;
                break;
            case "pro":
                calculatedPrice = 15;
                break;
            default:
                console.log('?');
                break;
        }

        if (suscriptionTime) {
            calculatedPrice *= 10;
            setSuscriptionPlace("(Yearly)")
        }
        else if (suscriptionTime == false) {
            setSuscriptionPlace("(Monthly)")
        }

        setPlanPrice(calculatedPrice);

        let totalCalculatedPrice = calculatedPrice;

        if (suscriptionTime) {
            onlineS ? totalCalculatedPrice += 10 : totalCalculatedPrice += 0;
            storage ? totalCalculatedPrice += 20 : totalCalculatedPrice += 0;
            customization ? totalCalculatedPrice += 20 : totalCalculatedPrice += 0;
        }
        else if (suscriptionTime == false) {
            onlineS ? totalCalculatedPrice += 1 : totalCalculatedPrice += 0;
            storage ? totalCalculatedPrice += 2 : totalCalculatedPrice += 0;
            customization ? totalCalculatedPrice += 2 : totalCalculatedPrice += 0;
        }

        setTotalPrice(totalCalculatedPrice)
    }
    function ChangePrices() {
        let updatedArcade = 9;
        let updatedAdvanced = 12;
        let updatedPro = 15;

        if (suscriptionTime) {
            updatedArcade = 6;
            updatedAdvanced = 12;
            updatedPro = 15;
            setArcade(updatedArcade);
            setAdvanced(updatedAdvanced);
            setPro(updatedPro);
            console.log('pro');
        }
        else if (suscriptionTime == false) {
            updatedArcade *= 10;
            updatedAdvanced *= 10;
            updatedPro *= 10;
            setArcade(updatedArcade);
            setAdvanced(updatedAdvanced);
            setPro(updatedPro);
            console.log('aaa');
        }

    }
    // Form  // data for show step 4
    const [onsAdded, setOnsAdded] = useState([false, false, false]);

    return (
        <FormContext.Provider value={{
            step,
            setStep,
            name,
            setName,
            email,
            setEmail,
            phone,
            setPhone,
            validateStep1,
            crowdedFields,
            applyChanges,
            plan,
            setPlan,
            suscriptionTime,
            setSuscriptionTime,
            validateStep2,
            setOnlineS,
            setStorage,
            setCustomization,
            validateStep3,
            ChangePrices,
            planPrice,
            totalPrice,
            suscriptionPlace,
            onsAdded,
            setOnsAdded,
            arcade,
            advanced,
            pro
        }}>
            {children}
        </FormContext.Provider>
    )
}
FormProvider.propTypes = {
    children: PropTypes.node.isRequired, // Asegura que la prop 'children' sea proporcionada y sea de tipo 'node'
};