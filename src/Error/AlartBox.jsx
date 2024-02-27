import { useState } from "react";
import Buttons from "../buttons/Buttons"
import { useNavigate } from "react-router-dom";

const AlertBox = ({ alertText = "", yes = 'Yes', no = 'No', fname = '',navigateTo='' }) => {
    
    const [display, setDisplay] = useState('')
    const ClickHandeler = (condition) => {
        setDisplay('none')
        if (condition == 'yes') {
            fname(true)

        }
        fname(false)
    }
    return (
        <div className="box-shadow" style={{ display: display }}>
            <div className="flex flex-direction-row flex-wrap justify-space-between " >
                <i className="fa fa-alert" /><i className=" fa fa-close" onClick={() => setDisplay('none')} />
            </div>
            <div>
                <h4>{alertText}</h4>

            </div>
            <div className="flex flex-direction-row flex-wrap center-align">
                <Buttons borderRadius="5px" btnName={yes} btnEvent="" fname={ClickHandeler} />
                <Buttons borderRadius="5px" btnName={no} fname={ClickHandeler} />
            </div>
        </div>
    )
}
export default AlertBox