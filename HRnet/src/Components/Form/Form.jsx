import Button from "../Button/Button";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";

const Form = () => {

    const [ birthDate, setBirthDate ] = useState(new Date());
    const [ startDate, setStartDate ] = useState(new Date());

    const handleChange = (event) => {
        setBirthDate(event);
    };

    const handleChangeStart = (event) => {
        setStartDate(event);
    };

    useEffect(() => {
        setBirthDate();
        setStartDate();
    }, [])
    
    return (

        <section className="section_form">
            <form className="form">

                <div className="form_div">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name"></input>
                </div>

                <div className="form_div">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name"></input>
                </div>

                <div className="form_div">
                    <label htmlFor="birth">Date of Birth</label>
                    <DatePicker onChange={(event) => handleChange(event)} value={birthDate}/>
                </div>

                <div className="form_div">
                    <label htmlFor="start">Start Date</label>
                    <DatePicker onChange={(event) => handleChangeStart(event)} value={startDate} />
                </div>

                <fieldset className="form_fieldset">
                    <legend>Address</legend>

                    <div className="form_div">
                        <label>Street</label>
                        <input type="text"></input>
                    </div>
                    
                    <div className="form_div">
                        <label>City</label>
                        <input type="text"></input>
                    </div>

                    <div className="form_div">
                        <label>State</label>
                    </div>

                    <div className="form_div">
                        <label>Zip Code</label>
                        <input type="text"></input>
                    </div>

                </fieldset>

                    <div className="form_fieldset_state">
                        <label>Department</label>
                    </div>

                <Button />
            </form>
        </section>
    )
}

export default Form;