import Button from "../Button/Button";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import  optionsState from "./StateData.jsx";
import optionsDepartment from "./DepartmentData.jsx";
import Modal_module from "modal_florent_guyard";


const Form = () => {

    

    const [ birthDate, setBirthDate ] = useState(new Date());
    const [ startDate, setStartDate ] = useState(new Date());
    const [isModaleVisible, setIsModaleVisible] = useState(false);
    

    useEffect(() => {

        const searchModal = document.querySelector('.modal');
        console.log(searchModal);

        if(searchModal) {

            const searchValidation = document.querySelector('.modal_div_cross');
            searchValidation.addEventListener('click', () => {
                setIsModaleVisible(false);
            });

            const searchModal = document.querySelector('.modal:not(.modal_div)');
            searchModal.addEventListener('click', (event) => {
                if (event.target === searchModal) {
                    setIsModaleVisible(false);
                }
            });
            
        } 
    
    },[isModaleVisible])

    const handleChange = (event) => {
        setBirthDate(event);
        console.log(birthDate)
    };

    const handleChangeStart = (event) => {
        setStartDate(event);
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        let stateValue;
        let departmentValue;

        const firstName = document.getElementById('first_name').value;
        const lastName = document.getElementById('last_name').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.querySelector(".state");
        if (state) {
             stateValue = state.querySelector(".react-dropdown-select-content").textContent;
        }
        const zipCode = document.getElementById('zip_code').value;
        const department = document.querySelector(".department");
        if (department) {
            departmentValue = department.querySelector(".react-dropdown-select-content").textContent;
        }


        /*console.log("firstname : ", firstName);
        console.log("lastName : ", lastName);
        console.log("birth :", birthDate);
        console.log("start :", startDate);
        console.log("state :", stateValue);
        console.log("street : ", street);
        console.log("city : ", city);
        console.log("zipCode : ", zipCode);
        console.log("department :", departmentValue);*/

        setIsModaleVisible(true);

    }



    return (

        <section className="section_form">
            <form className="form" onSubmit={(event) => handleSubmit(event)}>

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
                    <DatePicker onChange={(event) => handleChange(event)} value={birthDate} id="birth"/>
                </div>

                <div className="form_div">
                    <label htmlFor="start">Start Date</label>
                    <DatePicker onChange={(event) => handleChangeStart(event)} value={startDate} />
                </div>

                <fieldset className="form_fieldset">
                    <legend>Address</legend>

                    <div className="form_div">
                        <label>Street</label>
                        <input type="text" id="street"></input>
                    </div>
                    
                    <div className="form_div">
                        <label>City</label>
                        <input type="text" id="city"></input>
                    </div>

                    <div className="form_div">
                        <label>State</label>
                        <span className="state"><Select options={optionsState}  /></span>
                       
                    </div>

                    <div className="form_div">
                        <label>Zip Code</label>
                        <input type="text" id="zip_code"></input>
                    </div>

                </fieldset>

                    <div className="form_department">
                        <label>Department</label>
                        <span className="department">
                            <Select options={optionsDepartment}  />
                        </span>
                    </div>

                <Button className= "form_button" />
            </form>
                {isModaleVisible ? <Modal_module /> : ""}
                

        </section>
    )
}

export default Form;