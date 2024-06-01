import Button from "../Button/Button";
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect, useRef } from "react";
import Select from "react-dropdown-select";
import  optionsState from "./StateData.jsx";
import optionsDepartment from "./DepartmentData.jsx";
import Modal_module from "modal_florent_guyard";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux.js";
import dateFormater from "../../utils/dateFormater.js";
import typeVerification from "../../utils/typeVerification.js";

/**
 * fonction permettant l'affichage et la gestion du formulaire de création
 * des employées
 * @returns {JSX.Element}
 */

const Form = () => {

    const [ birthDate, setBirthDate ] = useState();
    const [ startDate, setStartDate ] = useState();
    const [isModaleVisible, setIsModaleVisible] = useState(false);

    // Les useRefs permettent de récupérer les informations contenus dans le smodules de dates et 
    // les menus déroulants
    const refDate = useRef(null);
    const refStart = useRef(null);
    const departmentRef = useRef(null);
    const stateRef = useRef(null);

    const dispatch = useDispatch();
    
    useEffect(() => {

// les éléments conditionnels ci-dessous ont pour fonction d'installer des atributs 
// ARIA afin d'améliorer l'accessibilité de l'application

        if (refDate.current) 
        {
            refDate.current.setAttribute('aria-label', 'Description');
            const childDate = refDate.current.children[1];
            childDate.setAttribute('role', 'menu')
            const firstButton = childDate.querySelector('.react-date-picker__clear-button');
            const secondButton = childDate.querySelector('.react-date-picker__calendar-button');
            firstButton.setAttribute('role', 'menuitem')
            firstButton.setAttribute('aria-label', 'remove the date')
            firstButton.setAttribute('title', 'Remove the date')
            secondButton.setAttribute('role', 'menuitem')
            secondButton.setAttribute('aria-label', 'Open the calendar');
            secondButton.setAttribute('title', 'Open the calendar')
            const firstIcon = firstButton.querySelector('.react-date-picker__clear-button__icon')
            firstIcon.setAttribute("aria-hidden", "true");

        }

        if (refStart.current)
        {
            refStart.current.setAttribute('aria-label', 'Description');
            const childStart = refStart.current.children[1];
            childStart.setAttribute('role', "menu")
            const firstButton = childStart.querySelector('.react-date-picker__clear-button');
            const secondButton = childStart.querySelector('.react-date-picker__calendar-button');
            firstButton.setAttribute('role', 'menuitem');
            firstButton.setAttribute('aria-label', 'remove the date');
            firstButton.setAttribute('title', 'Remove the date');
            secondButton.setAttribute('role', 'menuitem');
            secondButton.setAttribute('aria-label', 'Open the calendar');
            secondButton.setAttribute('title', 'Open the calendar');
        }

        if (departmentRef.current) {
            const childDepartment = departmentRef.current.children[0];
            const childDepartment2 = childDepartment.children[0];
            childDepartment2.setAttribute('role', "menu");
        }

        if (stateRef.current) {
            const childState = stateRef.current.children[1];
            const childDepartment2 = childState.children[0];
            const childDepartment3 = childDepartment2.children[0]
            childDepartment3.setAttribute('role', "menu")
        }

        const searchModal = document.querySelector('.modal');

        if(searchModal) {

            // gestion de la disparition de la modale en cliquant sur la croix
            const searchValidation = document.querySelector('.modal_div_cross');
            searchValidation.addEventListener('click', () => {
                setIsModaleVisible(false);
            });

            // gestion de la disparition de la modale en cliquant sur la partie grisée de la modale
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
    };

    const handleChangeStart = (event) => {   
        setStartDate(event);
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

            /* modification du format des dates*/
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

        /* Vérification du typage des données */
        const isFormValid = typeVerification(employeeData);
       
        if (isFormValid) {
            // envoi dans redux des données du formulaire
            dispatch(addEmployee(employeeData));
            // apparition de la modale confirmant la création d'un employée
            setIsModaleVisible(true);
        } else {
            throw new Error ('veuillez remplir tous les champs correctement');
        }
    }

    return (

        <section className="section_form">
            <form className="form" onSubmit={(event) => handleSubmit(event)} aria-labelledby="form-title">
                <h1 id="form-title" hidden>Employee Form</h1>

                <div className="form_div">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" id="first_name" aria-required="true" aria-describedby="form_div_firstname" />
                    <p className="form_div_error_paragraph" id="form_div_firstname" role="alert">Please complete this form using letters</p>
                </div>

                <div className="form_div">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" id="last_name" aria-required="true" aria-describedby="form_div_lastname" />
                    <p className="form_div_error_paragraph" id="form_div_lastname" role="alert">Please complete this form using letters</p>
                </div>

                <div ref={refDate} className="form_div">
                    <label htmlFor="birth" id="form-birth">Date of Birth</label>
                    <DatePicker  onChange={(event) => handleChange(event)} value={birthDate} id="birth" aria-required="true" aria-labelledby="form-birth" />
                    <p className="form_div_error_paragraph" id="form_div_birthDate" role="alert" >Please complete this field</p>
                </div>

                <div ref={refStart} className="form_div">
                    <label htmlFor="start" id="form-start">Start Date</label>
                    <DatePicker  onChange={(event) => handleChangeStart(event)} value={startDate} id="start" aria-required="true" aria-labelledby="form-start" />
                    <p className="form_div_error_paragraph" id="form_div_startDate" role="alert" >Please complete this field</p>
                </div>

                <fieldset className="form_fieldset" aria-labelledby="address-legend">
                    <legend id="address-legend">Address</legend>

                    <div className="form_div">
                        <label htmlFor="street">Street</label>
                        <input type="text" id="street" aria-required="true" aria-describedby="form_div_street" />
                        <p className="form_div_error_paragraph" id="form_div_street" role="alert">Please complete this form using letters</p>
                    </div>

                    <div className="form_div">
                        <label htmlFor="city">City</label>
                        <input type="text" id="city" aria-required="true" aria-describedby="form_div_city" />
                        <p className="form_div_error_paragraph" id="form_div_city" role="alert">Please complete this form using letters</p>
                    </div>

                    <div className="form_div" ref={stateRef}>
                        <label htmlFor="state">State</label>
                        <span className="state">
                            <Select options={optionsState} aria-labelledby="state-label" />
                        </span>
                    </div>

                    <div className="form_div">
                        <label htmlFor="zip_code">Zip Code</label>
                        <input type="text" id="zip_code" aria-required="true" aria-describedby="form_div_zip_code" />
                        <p className="form_div_error_paragraph" id="form_div_zip_code" role="alert">Please complete this form</p>
                    </div>
                </fieldset>

                <div className="form_department">
                    <label htmlFor="department">Department</label>
                    <span className="department" ref={departmentRef}>
                        <Select options={optionsDepartment} aria-labelledby="department-label"  />
                    </span>
                </div>

                <Button className="form_button" aria-label="Submit form" />
            </form>
            {isModaleVisible ? <Modal_module aria-live="assertive" textContent="employee created !!" /> : ""}
        </section>
    )
}

export default Form;