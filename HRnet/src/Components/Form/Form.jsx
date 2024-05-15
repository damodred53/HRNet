import Button from "../Button/Button";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from "react";
import Select from "react-dropdown-select";
import  optionsState from "./StateData.jsx";
import optionsDepartment from "./DepartmentData.jsx";
import Modal_module from "modal_florent_guyard";
import {useDispatch, useSelector} from "react-redux";
import { addEmployee } from "../../redux.js";
import dateFormater from "../../utils/dateFormater.js";
import typeVerification from "../../utils/typeVerification.js";


const Form = ({employeeData}) => {

    const [ birthDate, setBirthDate ] = useState();
    const [ startDate, setStartDate ] = useState();
    const [isModaleVisible, setIsModaleVisible] = useState(false);
    const [formData, setFormData] = useState([]);

    
    const dispatch = useDispatch();
    
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
        console.log(event)
        /*const formatedBirthDate = dateFormater(event);*/
        setBirthDate(event)
    };

    const handleChangeStart = (event) => {   
        setStartDate(event);
        /*const formatedStartDate = dateFormater(event)*/

        /*return formatedStartDate*/
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        let stateValue;
        let departmentValue;
        let employeeData = {};
        
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

        const formatedBirthDate = dateFormater(birthDate);
        const formatedStartDate = dateFormater(startDate);


        employeeData = {
            firstName : firstName,
            lastName : lastName,
            birthDate : formatedBirthDate,
            startDate : formatedStartDate,
            stateValue : stateValue,
            street : street,
            city : city,
            zipCode : zipCode,
            departmentValue : departmentValue
        }

        
      
        const isFormValid = typeVerification(employeeData)
       
        if (isFormValid) {
            dispatch(addEmployee(employeeData));
            console.log(state);
            setIsModaleVisible(true);
        } else {
            throw new Error ('veuillez remplir tous les champs correctement');
        }
            
        
    }

    return (

        <section className="section_form">
            <form className="form" onSubmit={(event) => handleSubmit(event)}>

                <div className="form_div">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" ></input>
                    <p className="form_div_error_paragraph" id="form_div_firstname">please complete this form using letters </p>
                </div>

                <div className="form_div">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" ></input>
                    <p className="form_div_error_paragraph" id="form_div_lastname" >please complete this form using letters </p>
                </div>

                <div className="form_div">
                    <label htmlFor="birth">Date of Birth</label>
                    <DatePicker onChange={(event) => handleChange(event)} value={birthDate} id="birth" />
                </div>

                <div className="form_div">
                    <label htmlFor="start">Start Date</label>
                    <DatePicker onChange={(event) => handleChangeStart(event)} value={startDate}  />
                </div>

                <fieldset className="form_fieldset">
                    <legend>Address</legend>

                    <div className="form_div">
                        <label>Street</label>
                        <input type="text" id="street" ></input>
                        <p className="form_div_error_paragraph" id="form_div_street">please complete this form using letters </p>
                    </div>
                    
                    <div className="form_div">
                        <label>City</label>
                        <input type="text" id="city" ></input>
                        <p className="form_div_error_paragraph" id="form_div_city">please complete this form using letters </p>
                    </div>

                    <div className="form_div">
                        <label>State</label>
                        <span className="state"><Select options={optionsState} /></span>
                       
                    </div>

                    <div className="form_div">
                        <label>Zip Code</label>
                        <input type="text" id="zip_code"></input>
                        <p className="form_div_error_paragraph" id="form_div_zip_code">please complete this form</p>
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