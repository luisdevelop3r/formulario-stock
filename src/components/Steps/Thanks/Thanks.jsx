import iconThanks from '../../../assets/images/icon-thank-you.svg'

function Thanks() {
    return (
        <div className="provide-details !h-[87%]">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <img src={iconThanks} alt="" />
                <h1 className="font-bold">Thank you!</h1>
                <p className="leading-normal text-center">Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.</p>
            </div>
        </div>
    )
}

export { Thanks }